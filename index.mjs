//export REACH_CONNECTOR_MODE=ALGO
//../reach run

import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = await loadStdlib();

console.log(`Create test accounts for Creator and Alice`);
const startingBalance = stdlib.parseCurrency(1000);
const accCreator = await stdlib.newTestAccount(startingBalance);
const accAlice = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

console.log(`Store the starting balances for Creator and Alice`);
const beforeCreator = await getBalance(accCreator);
const beforeAlice = await getBalance(accAlice);

console.log(`Establish the smart contract`);
const ctcCreator = accCreator.contract(backend);
const ctcAlice = accAlice.contract(backend, ctcCreator.getInfo());

// There are 3 weeks worth of training
const WEEK = ['#1', '#2', '#3'];

// Assume Alice has not completed any Weeks
let weekOutcomeArray = [false, false, false];

const Player = (Who) => ({
  seeWeekOutcomeArray: () => {
    console.log(`Alice's weekly status is: ${weekOutcomeArray}`);
    return weekOutcomeArray;
  },
});

await Promise.all([

  ctcCreator.p.Creator({
    ...Player('Creator'),
    updateWeekOutcomeArray: (weekNumber,weekOutcome) => {
      weekOutcomeArray[weekNumber] = weekOutcome;
    },
  }),

  ctcAlice.p.Alice({
    ...Player('Alice'),
    provideWeek: () => {
      const weekNumber = Math.floor(Math.random() * 3);
      console.log(`Alice asks for Week ${WEEK[weekNumber]} to be assessed`);
      return weekNumber;
    },
  }),

]);

console.log(`Final results of this smart contract are:`);

if ( weekOutcomeArray[0] == true ) {
  console.log(`* Alice received Week 1's NFT`);
}
if ( weekOutcomeArray[1] == true ) {
  console.log(`* Alice received Week 2's NFT`);
}
if ( weekOutcomeArray[2] == true ) {
  console.log(`* Alice received Week 3's NFT`);
}
