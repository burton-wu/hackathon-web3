'reach 0.1';
'use strict';

// This iteration
// [1*] Moved updateWeekOutcomeArray to Player (a workaround)
// [2*] 
// [3*] Change providerEnv to 'MainNet'

// Next iteration will add back the following features:
// [1] Pay transfer
// [2] Overall badge
// [3] Checking passcode
// [4] NFT

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

  var STOPPING = false;
  invariant ( balance() == 0 );
  while ( STOPPING == false) {

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

    // Creator assesses the overall outcome (and did not pass overall before)
    const overallOutcome = ( weekOutcomeArray2[0] == true &&
      weekOutcomeArray2[1] == true && weekOutcomeArray2[2] == true) ? true : false;

    STOPPING = overallOutcome;
    continue;
  }  

  commit();

});
