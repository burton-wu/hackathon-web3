'reach 0.1';
'use strict';

// This iteration
// [1*] Moved updateWeekOutcomeArray to Player (a workaround)
// [2*] 

// Next iteration will add back the following features:
// [1*] While loop
// [2] Overall badge
// [3] Checking passcode

const Player = {
  seeWeekOutcomeArray: Fun([], Array(Bool,3)),
  updateWeekOutcomeArray: Fun([UInt,Bool], Null),
};

export const main = Reach.App(() => {

  const Creator = Participant('Creator', {
    ...Player,
  });

  const Alice = Participant('Alice', {
    ...Player,
    provideWeek: Fun([], UInt),
  });

  init();
  
  // Display the initial weekly status (by Alice)
  Alice.only(() => {
    const weekOutcomeArray0 = declassify(interact.seeWeekOutcomeArray());
  });

  Alice.publish(weekOutcomeArray0);
  commit();

  // Display the initial weekly status (by Creator)
  Creator.only(() => {
    const weekOutcomeArray1 = declassify(interact.seeWeekOutcomeArray());
  });

  Creator.publish(weekOutcomeArray1);
  commit();

  // Alice requests assessment badge for Week X
  Alice.only(() => {
    const weekNumber = declassify(interact.provideWeek());
    check(weekNumber<3,"Invalid week has been selected.");
  });

  Alice.publish(weekNumber);
  check(weekNumber<3,"Invalid week has been selected.");
  commit();

  // Outcome of the badge will always be true for now
  const weekOutcome = true;

  // Update and publish the WeekOutcomeArray (Creator)
  Creator.only(() => {
    interact.updateWeekOutcomeArray(weekNumber,weekOutcome);
    const weekOutcomeArray2 = declassify(interact.seeWeekOutcomeArray());
  });

  Creator.publish(weekOutcomeArray2);
  commit();

  // Update and publish the WeekOutcomeArray (Alice)
  Alice.only(() => {
    interact.updateWeekOutcomeArray(weekNumber,weekOutcome);
    const weekOutcomeArray3 = declassify(interact.seeWeekOutcomeArray());
  });

  Alice.publish(weekOutcomeArray3);
  commit();

});
