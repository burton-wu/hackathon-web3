// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0],
      3: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  
  
  const v80 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:24:70:application',
    fs: ['at ./index.rsh:23:13:application call to [unknown function] (defined at: ./index.rsh:23:17:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v80],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v85], secs: v87, time: v86, didSend: v30, from: v84 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v85], secs: v87, time: v86, didSend: v30, from: v84 } = txn1;
  ;
  const v90 = stdlib.protect(ctc2, await interact.provideWeek(), {
    at: './index.rsh:32:55:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'provideWeek',
    who: 'Alice'
    });
  const v91 = stdlib.lt(v90, stdlib.checkedBigNumberify('./index.rsh:33:22:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v91, {
    at: './index.rsh:33:10:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'Invalid week has been selected.',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v84, v90],
    evt_cnt: 1,
    funcNum: 1,
    lct: v86,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v93], secs: v95, time: v94, didSend: v41, from: v92 } = txn2;
      
      ;
      const v96 = stdlib.addressEq(v84, v92);
      ;
      const v97 = stdlib.lt(v93, stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '3'));
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v93], secs: v95, time: v94, didSend: v41, from: v92 } = txn2;
  ;
  const v96 = stdlib.addressEq(v84, v92);
  stdlib.assert(v96, {
    at: './index.rsh:36:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v97 = stdlib.lt(v93, stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v97, {
    at: './index.rsh:37:8:application',
    fs: [],
    msg: 'Invalid week has been selected.',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v105], secs: v107, time: v106, didSend: v54, from: v104 } = txn3;
  ;
  const v110 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:53:70:application',
    fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:17:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Alice'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v84, v110],
    evt_cnt: 1,
    funcNum: 3,
    lct: v106,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v115], secs: v117, time: v116, didSend: v67, from: v114 } = txn4;
      
      ;
      const v118 = stdlib.addressEq(v84, v114);
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v115], secs: v117, time: v116, didSend: v67, from: v114 } = txn4;
  ;
  const v118 = stdlib.addressEq(v84, v114);
  stdlib.assert(v118, {
    at: './index.rsh:56:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  return;
  
  
  
  
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v85], secs: v87, time: v86, didSend: v30, from: v84 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v93], secs: v95, time: v94, didSend: v41, from: v92 } = txn2;
  ;
  const v96 = stdlib.addressEq(v84, v92);
  stdlib.assert(v96, {
    at: './index.rsh:36:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v97 = stdlib.lt(v93, stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v97, {
    at: './index.rsh:37:8:application',
    fs: [],
    msg: 'Invalid week has been selected.',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.updateWeekOutcomeArray(v93, true), {
    at: './index.rsh:45:36:application',
    fs: ['at ./index.rsh:44:15:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'updateWeekOutcomeArray',
    who: 'Creator'
    });
  const v100 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:46:70:application',
    fs: ['at ./index.rsh:44:15:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Creator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v84, v100],
    evt_cnt: 1,
    funcNum: 2,
    lct: v94,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v105], secs: v107, time: v106, didSend: v54, from: v104 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v105], secs: v107, time: v106, didSend: v54, from: v104 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v115], secs: v117, time: v116, didSend: v67, from: v114 } = txn4;
  ;
  const v118 = stdlib.addressEq(v84, v114);
  stdlib.assert(v118, {
    at: './index.rsh:56:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAEDAiYCAQAAIjUAMRhBAXcpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSUMQABwSSQMQAAvJBJEJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEfRgdDjT/ULA0AzEAEkRCAMRIJTQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQU1/oAEcTP1MDT+ULA0/yhLAVcAIGdIJDUBMgY1AkIApUkjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQM1/0k1BRc1/oAE1RUZFDT+FlCwNP8xABJENP4kDEQ0/yhLAVcAIGdIJTUBMgY1AkIAV0giNAESRDQESSISTDQCEhFESTUFNf+ABHNPeGo0/1CwgaCNBogAbTEAKEsBVwAgZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v85",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v85",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v93",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v105",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v115",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v93",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v105",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v115",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000c1c38038062000c1c833981016040819052620000269162000224565b60008055436003556040517fd9fe77929a57a435d88ce369dbd837cb668f91aa71ce26c08b9411d101557bdc90620000629033908490620002d3565b60405180910390a16200007834156007620000c9565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c0929190620000f3565b50505062000367565b81620000ef5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000101906200032a565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620001d457620001d462000199565b60405290565b604051602081016001600160401b0381118282101715620001d457620001d462000199565b604051606081016001600160401b0381118282101715620001d457620001d462000199565b600081830360808112156200023857600080fd5b62000242620001af565b8351815260206060601f19840112156200025b57600080fd5b62000265620001da565b925085603f8601126200027757600080fd5b62000281620001ff565b8060808701888111156200029457600080fd5b8388015b81811015620002c15780518015158114620002b35760008081fd5b845292840192840162000298565b50508452508101919091529392505050565b6001600160a01b03831681528151602080830191909152828101515160a0830191906000604085015b60038210156200031f5782511515815291830191600191909101908301620002fc565b505050509392505050565b600181811c908216806200033f57607f821691505b602082108114156200036157634e487b7160e01b600052602260045260246000fd5b50919050565b6108a580620003776000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806335e2ae37146100835780638323075714610096578063873779a1146100ab578063ab53f2c6146100be578063be9c140c146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046106e0565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004610703565b61023a565b3480156100ca57600080fd5b506100d36103e4565b60405161007a929190610715565b61005d6100ef3660046106e0565b610481565b61010460036000541460126105cd565b61011e8135158061011757506001548235145b60136105cd565b60008080556002805461013090610772565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610772565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c191906107a7565b90507f317438446fe5716fdae8aa13a881a88c5a3d417632428706b88a0007dd308d4f33836040516101f4929190610852565b60405180910390a1610208341560106105cd565b8051610220906001600160a01b0316331460116105cd565b60008080556001819055610236906002906105f2565b5050565b61024a600160005414600b6105cd565b6102648135158061025d57506001548235145b600c6105cd565b60008080556002805461027690610772565b80601f01602080910402602001604051908101604052809291908181526020018280546102a290610772565b80156102ef5780601f106102c4576101008083540402835291602001916102ef565b820191906000526020600020905b8154815290600101906020018083116102d257829003601f168201915b505050505080602001905181019061030791906107a7565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a161035c341560086105cd565b8051610374906001600160a01b0316331460096105cd565b6103866003602084013510600a6105cd565b60408051602081019091526000815281516001600160a01b0316808252600260005543600155604080516020810192909252015b604051602081830303815290604052600290805190602001906103de92919061062f565b50505050565b6000606060005460028080546103f990610772565b80601f016020809104026020016040519081016040528092919081815260200182805461042590610772565b80156104725780601f1061044757610100808354040283529160200191610472565b820191906000526020600020905b81548152906001019060200180831161045557829003601f168201915b50505050509050915091509091565b610491600260005414600e6105cd565b6104ab813515806104a457506001548235145b600f6105cd565b6000808055600280546104bd90610772565b80601f01602080910402602001604051908101604052809291908181526020018280546104e990610772565b80156105365780601f1061050b57610100808354040283529160200191610536565b820191906000526020600020905b81548152906001019060200180831161051957829003601f168201915b505050505080602001905181019061054e91906107a7565b90507f243167b32f8aea149eaf73d74f1dfd9c6956c8dc2b76af9cd7e5d23478acea4f3383604051610581929190610852565b60405180910390a16105953415600d6105cd565b60408051602081019091526000815281516001600160a01b0316808252600360005543600155604080516020810192909252016103ba565b816102365760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546105fe90610772565b6000825580601f1061060e575050565b601f01602090049060005260206000209081019061062c91906106b3565b50565b82805461063b90610772565b90600052602060002090601f01602090048101928261065d57600085556106a3565b82601f1061067657805160ff19168380011785556106a3565b828001600101855582156106a3579182015b828111156106a3578251825591602001919060010190610688565b506106af9291506106b3565b5090565b5b808211156106af57600081556001016106b4565b6000608082840312156106da57600080fd5b50919050565b6000608082840312156106f257600080fd5b6106fc83836106c8565b9392505050565b6000604082840312156106da57600080fd5b82815260006020604081840152835180604085015260005b818110156107495785810183015185820160600152820161072d565b8181111561075b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061078657607f821691505b602082108114156106da57634e487b7160e01b600052602260045260246000fd5b6000602082840312156107b957600080fd5b6040516020810181811067ffffffffffffffff821117156107ea57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461080457600080fd5b81529392505050565b8035825260208083018183016000805b6003811015610849578235801515808214610836578384fd5b855250928401929184019160010161081d565b50505050505050565b6001600160a01b038316815260a081016106fc602083018461080d56fea2646970667358221220877f2cf28935c102dbb478a24eef9db3fca240d27aba7a4e8fb35e2536cad16d64736f6c634300080c0033`,
  BytecodeLen: 3100,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:38:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:57:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Creator": Creator
  };
export const _APIs = {
  };
