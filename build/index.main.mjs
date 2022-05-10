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
      2: [ctc0]
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
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v72], secs: v74, time: v73, didSend: v30, from: v71 } = txn1;
  ;
  const v77 = stdlib.protect(ctc2, await interact.provideWeek(), {
    at: './index.rsh:32:55:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'provideWeek',
    who: 'Alice'
    });
  const v78 = stdlib.lt(v77, stdlib.checkedBigNumberify('./index.rsh:33:22:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v78, {
    at: './index.rsh:33:10:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'Invalid week has been selected.',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v71, v77],
    evt_cnt: 1,
    funcNum: 1,
    lct: v73,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v80], secs: v82, time: v81, didSend: v40, from: v79 } = txn2;
      
      ;
      const v83 = stdlib.lt(v80, stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '3'));
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v40, from: v79 } = txn2;
  ;
  const v83 = stdlib.lt(v80, stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v83, {
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
  const {data: [v91], secs: v93, time: v92, didSend: v54, from: v90 } = txn3;
  ;
  const v94 = stdlib.addressEq(v71, v90);
  stdlib.assert(v94, {
    at: './index.rsh:49:11:dot',
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
  
  
  const v67 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:24:70:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v67],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v72], secs: v74, time: v73, didSend: v30, from: v71 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v72], secs: v74, time: v73, didSend: v30, from: v71 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v40, from: v79 } = txn2;
  ;
  const v83 = stdlib.lt(v80, stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v83, {
    at: './index.rsh:37:8:application',
    fs: [],
    msg: 'Invalid week has been selected.',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.updateWeekOutcomeArray(v80, true), {
    at: './index.rsh:45:36:application',
    fs: ['at ./index.rsh:44:15:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'updateWeekOutcomeArray',
    who: 'Creator'
    });
  const v86 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:46:70:application',
    fs: ['at ./index.rsh:44:15:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Creator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v71, v86],
    evt_cnt: 1,
    funcNum: 2,
    lct: v81,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v91], secs: v93, time: v92, didSend: v54, from: v90 } = txn3;
      
      ;
      const v94 = stdlib.addressEq(v71, v90);
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
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v91], secs: v93, time: v92, didSend: v54, from: v90 } = txn3;
  ;
  const v94 = stdlib.addressEq(v71, v90);
  stdlib.assert(v94, {
    at: './index.rsh:49:11:dot',
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
  appApproval: `BiADAAECJgIBAAAiNQAxGEEBMSlkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAHhJJAxAAC8kEkQkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gARxM/UwNP9QsDQDMQASREIAfkgjNAESRDQESSISTDQCEhFEKGRJNQM1/0k1BRc1/oAE1RUZFDT+FlCwNP6BAwxENP8oSwFXACBnSCQ1ATIGNQJCAFdIIjQBEkQ0BEkiEkw0AhIRREk1BTX/gARzT3hqNP9QsIGgjQaIAG0xAChLAVcAIGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v72",
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
                "name": "v72",
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
                "name": "v80",
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
                "name": "v91",
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
                "name": "v80",
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
                "name": "v91",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000a7338038062000a73833981016040819052620000269162000224565b60008055436003556040517fd9fe77929a57a435d88ce369dbd837cb668f91aa71ce26c08b9411d101557bdc90620000629033908490620002d3565b60405180910390a16200007834156007620000c9565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c0929190620000f3565b50505062000367565b81620000ef5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000101906200032a565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620001d457620001d462000199565b60405290565b604051602081016001600160401b0381118282101715620001d457620001d462000199565b604051606081016001600160401b0381118282101715620001d457620001d462000199565b600081830360808112156200023857600080fd5b62000242620001af565b8351815260206060601f19840112156200025b57600080fd5b62000265620001da565b925085603f8601126200027757600080fd5b62000281620001ff565b8060808701888111156200029457600080fd5b8388015b81811015620002c15780518015158114620002b35760008081fd5b845292840192840162000298565b50508452508101919091529392505050565b6001600160a01b03831681528151602080830191909152828101515160a0830191906000604085015b60038210156200031f5782511515815291830191600191909101908301620002fc565b505050509392505050565b600181811c908216806200033f57607f821691505b602082108114156200036157634e487b7160e01b600052602260045260246000fd5b50919050565b6106fc80620003776000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780638323075714610078578063873779a11461008d578063ab53f2c6146100a0578063be9c140c146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008457600080fd5b50600154610065565b61005261009b366004610545565b6100d6565b3480156100ac57600080fd5b506100b5610267565b60405161006f92919061055d565b6100526100d13660046105ba565b610304565b6100e6600160005414600a61044a565b610100813515806100f957506001548235145b600b61044a565b600080805560028054610112906105cc565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906105cc565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610601565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16101f83415600861044a565b61020a6003602084013510600961044a565b60408051602081019091526000815281516001600160a01b0316808252600260005543600155604080516020810192909252016040516020818303038152906040526002908051906020019061026192919061046f565b50505050565b60006060600054600280805461027c906105cc565b80601f01602080910402602001604051908101604052809291908181526020018280546102a8906105cc565b80156102f55780601f106102ca576101008083540402835291602001916102f5565b820191906000526020600020905b8154815290600101906020018083116102d857829003601f168201915b50505050509050915091509091565b610314600260005414600e61044a565b61032e8135158061032757506001548235145b600f61044a565b600080805560028054610340906105cc565b80601f016020809104026020016040519081016040528092919081815260200182805461036c906105cc565b80156103b95780601f1061038e576101008083540402835291602001916103b9565b820191906000526020600020905b81548152906001019060200180831161039c57829003601f168201915b50505050508060200190518101906103d19190610601565b90507f243167b32f8aea149eaf73d74f1dfd9c6956c8dc2b76af9cd7e5d23478acea4f3383604051610404929190610667565b60405180910390a16104183415600c61044a565b8051610430906001600160a01b03163314600d61044a565b60008080556001819055610446906002906104f3565b5050565b816104465760405163100960cb60e01b81526004810182905260240160405180910390fd5b82805461047b906105cc565b90600052602060002090601f01602090048101928261049d57600085556104e3565b82601f106104b657805160ff19168380011785556104e3565b828001600101855582156104e3579182015b828111156104e35782518255916020019190600101906104c8565b506104ef929150610530565b5090565b5080546104ff906105cc565b6000825580601f1061050f575050565b601f01602090049060005260206000209081019061052d9190610530565b50565b5b808211156104ef5760008155600101610531565b60006040828403121561055757600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561059157858101830151858201606001528201610575565b818111156105a3576000606083870101525b50601f01601f191692909201606001949350505050565b60006080828403121561055757600080fd5b600181811c908216806105e057607f821691505b6020821081141561055757634e487b7160e01b600052602260045260246000fd5b60006020828403121561061357600080fd5b6040516020810181811067ffffffffffffffff8211171561064457634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461065e57600080fd5b81529392505050565b6001600160a01b0383168152813560208083019190915260a0820190604083018482016000805b60038110156106ba5782358015158082146106a7578384fd5b855250928401929184019160010161068e565b5050505050939250505056fea26469706673582212208252aec41ffad34dca6c46e5a8f911af83ea9ba29077a155f06129528976296f64736f6c634300080c0033`,
  BytecodeLen: 2675,
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
