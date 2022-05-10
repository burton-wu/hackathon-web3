//Testing GitHub3

'reach 0.1';
'use strict';

const Player = {
  seeWeekOutcomeArray: Fun([], Array(Bool,3)),
};

export const main = Reach.App(() => {

  const Creator = Participant('Creator', {
    ...Player,
    updateWeekOutcomeArray: Fun([UInt,Bool], Null),
  });

  const Alice = Participant('Alice', {
    ...Player,
    provideWeek: Fun([], UInt),
  });

  init();
  
  // Display The initial weekly status
  Creator.only(() => {
    const weekOutcomeArray0 = declassify(interact.seeWeekOutcomeArray());
  });

  Creator.publish(weekOutcomeArray0);
  commit();

  // Alice requests assessment for Week X
  Alice.only(() => {
    const weekNumber = declassify(interact.provideWeek());
    check(weekNumber<3,"Invalid week has been selected.");
  });

  Alice.publish(weekNumber);
  check(weekNumber<3,"Invalid week has been selected.");
  commit();

  // Outcome will always be true for now
  const weekOutcome = true;

  // Update and publish the WeekOutcomeArray
  Creator.only(() => {
    interact.updateWeekOutcomeArray(weekNumber,weekOutcome);
    const weekOutcomeArray2 = declassify(interact.seeWeekOutcomeArray());
  });

  Creator.publish(weekOutcomeArray2);
  commit();

});
