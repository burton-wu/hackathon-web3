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
  
  
  const v71 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:24:70:application',
    fs: ['at ./index.rsh:23:13:application call to [unknown function] (defined at: ./index.rsh:23:17:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v71],
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
      
      
      const {data: [v76], secs: v78, time: v77, didSend: v30, from: v75 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v76], secs: v78, time: v77, didSend: v30, from: v75 } = txn1;
  ;
  const v81 = stdlib.protect(ctc2, await interact.provideWeek(), {
    at: './index.rsh:32:55:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'provideWeek',
    who: 'Alice'
    });
  const v82 = stdlib.lt(v81, stdlib.checkedBigNumberify('./index.rsh:33:22:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v82, {
    at: './index.rsh:33:10:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'Invalid week has been selected.',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v75, v81],
    evt_cnt: 1,
    funcNum: 1,
    lct: v77,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn2;
      
      ;
      const v87 = stdlib.addressEq(v75, v83);
      ;
      const v88 = stdlib.lt(v84, stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '3'));
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn2;
  ;
  const v87 = stdlib.addressEq(v75, v83);
  stdlib.assert(v87, {
    at: './index.rsh:36:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v88 = stdlib.lt(v84, stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v88, {
    at: './index.rsh:37:8:application',
    fs: [],
    msg: 'Invalid week has been selected.',
    who: 'Alice'
    });
  const v93 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:53:70:application',
    fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:17:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v75, v93],
    evt_cnt: 1,
    funcNum: 2,
    lct: v85,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v98], secs: v100, time: v99, didSend: v58, from: v97 } = txn3;
      
      ;
      const v101 = stdlib.addressEq(v75, v97);
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
  const {data: [v98], secs: v100, time: v99, didSend: v58, from: v97 } = txn3;
  ;
  const v101 = stdlib.addressEq(v75, v97);
  stdlib.assert(v101, {
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
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v76], secs: v78, time: v77, didSend: v30, from: v75 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v84], secs: v86, time: v85, didSend: v41, from: v83 } = txn2;
  ;
  const v87 = stdlib.addressEq(v75, v83);
  stdlib.assert(v87, {
    at: './index.rsh:36:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v88 = stdlib.lt(v84, stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v88, {
    at: './index.rsh:37:8:application',
    fs: [],
    msg: 'Invalid week has been selected.',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.updateWeekOutcomeArray(v84, true), {
    at: './index.rsh:45:36:application',
    fs: ['at ./index.rsh:44:15:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'updateWeekOutcomeArray',
    who: 'Creator'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v58, from: v97 } = txn3;
  ;
  const v101 = stdlib.addressEq(v75, v97);
  stdlib.assert(v101, {
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
  appApproval: `BiADAAECJgIBAAAiNQAxGEEBNylkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAH5JJAxAAC8kEkQkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gARxM/UwNP9QsDQDMQASREIAhEgjNAESRDQESSISTDQCEhFEKGRJNQM1/0k1BRc1/oAE1RUZFDT+FlCwNP8xABJENP6BAwxENP8oSwFXACBnSCQ1ATIGNQJCAFdIIjQBEkQ0BEkiEkw0AhIRREk1BTX/gARzT3hqNP9QsIGgjQaIAG0xAChLAVcAIGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v76",
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
                "name": "v76",
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
                "name": "v84",
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
                "name": "v98",
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
                "name": "v84",
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
                "name": "v98",
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
  Bytecode: `0x608060405260405162000a8b38038062000a8b833981016040819052620000269162000224565b60008055436003556040517fd9fe77929a57a435d88ce369dbd837cb668f91aa71ce26c08b9411d101557bdc90620000629033908490620002d3565b60405180910390a16200007834156007620000c9565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c0929190620000f3565b50505062000367565b81620000ef5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000101906200032a565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620001d457620001d462000199565b60405290565b604051602081016001600160401b0381118282101715620001d457620001d462000199565b604051606081016001600160401b0381118282101715620001d457620001d462000199565b600081830360808112156200023857600080fd5b62000242620001af565b8351815260206060601f19840112156200025b57600080fd5b62000265620001da565b925085603f8601126200027757600080fd5b62000281620001ff565b8060808701888111156200029457600080fd5b8388015b81811015620002c15780518015158114620002b35760008081fd5b845292840192840162000298565b50508452508101919091529392505050565b6001600160a01b03831681528151602080830191909152828101515160a0830191906000604085015b60038210156200031f5782511515815291830191600191909101908301620002fc565b505050509392505050565b600181811c908216806200033f57607f821691505b602082108114156200036157634e487b7160e01b600052602260045260246000fd5b50919050565b61071480620003776000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780638323075714610078578063873779a11461008d578063ab53f2c6146100a0578063be9c140c146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008457600080fd5b50600154610065565b61005261009b36600461055d565b6100d6565b3480156100ac57600080fd5b506100b561027f565b60405161006f929190610575565b6100526100d13660046105d2565b61031c565b6100e6600160005414600b610462565b610100813515806100f957506001548235145b600c610462565b600080805560028054610112906105e4565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906105e4565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610619565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16101f834156008610462565b8051610210906001600160a01b031633146009610462565b6102226003602084013510600a610462565b60408051602081019091526000815281516001600160a01b03168082526002600055436001556040805160208101929092520160405160208183030381529060405260029080519060200190610279929190610487565b50505050565b600060606000546002808054610294906105e4565b80601f01602080910402602001604051908101604052809291908181526020018280546102c0906105e4565b801561030d5780601f106102e25761010080835404028352916020019161030d565b820191906000526020600020905b8154815290600101906020018083116102f057829003601f168201915b50505050509050915091509091565b61032c600260005414600f610462565b6103468135158061033f57506001548235145b6010610462565b600080805560028054610358906105e4565b80601f0160208091040260200160405190810160405280929190818152602001828054610384906105e4565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b50505050508060200190518101906103e99190610619565b90507f243167b32f8aea149eaf73d74f1dfd9c6956c8dc2b76af9cd7e5d23478acea4f338360405161041c92919061067f565b60405180910390a16104303415600d610462565b8051610448906001600160a01b03163314600e610462565b6000808055600181905561045e9060029061050b565b5050565b8161045e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610493906105e4565b90600052602060002090601f0160209004810192826104b557600085556104fb565b82601f106104ce57805160ff19168380011785556104fb565b828001600101855582156104fb579182015b828111156104fb5782518255916020019190600101906104e0565b50610507929150610548565b5090565b508054610517906105e4565b6000825580601f10610527575050565b601f0160209004906000526020600020908101906105459190610548565b50565b5b808211156105075760008155600101610549565b60006040828403121561056f57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156105a95785810183015185820160600152820161058d565b818111156105bb576000606083870101525b50601f01601f191692909201606001949350505050565b60006080828403121561056f57600080fd5b600181811c908216806105f857607f821691505b6020821081141561056f57634e487b7160e01b600052602260045260246000fd5b60006020828403121561062b57600080fd5b6040516020810181811067ffffffffffffffff8211171561065c57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461067657600080fd5b81529392505050565b6001600160a01b0383168152813560208083019190915260a0820190604083018482016000805b60038110156106d25782358015158082146106bf578384fd5b85525092840192918401916001016106a6565b5050505050939250505056fea2646970667358221220809d6e64b8b2c70c2af3a3f6bf7939b29909c0c23924afb2c86f504e61f3a0e164736f6c634300080c0033`,
  BytecodeLen: 2699,
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
