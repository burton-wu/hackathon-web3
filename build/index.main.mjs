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
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc0, ctc0],
      5: [ctc0, ctc0],
      6: [ctc0, ctc0, ctc2]
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
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v117 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:36:70:application',
    fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:17:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v117],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v122], secs: v124, time: v123, didSend: v30, from: v121 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v122], secs: v124, time: v123, didSend: v30, from: v121 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v132], secs: v134, time: v133, didSend: v42, from: v131 } = txn2;
  ;
  let v135 = false;
  let v136 = v133;
  
  while (await (async () => {
    const v146 = v135 ? false : true;
    
    return v146;})()) {
    const v149 = stdlib.protect(ctc2, await interact.provideWeek(), {
      at: './index.rsh:57:57:application',
      fs: ['at ./index.rsh:56:15:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
      msg: 'provideWeek',
      who: 'Alice'
      });
    const v150 = stdlib.lt(v149, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '3'));
    stdlib.assert(v150, {
      at: './index.rsh:58:12:application',
      fs: ['at ./index.rsh:56:15:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
      msg: 'Invalid week has been selected.',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v121, v131, v149],
      evt_cnt: 1,
      funcNum: 3,
      lct: v136,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:61:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v152], secs: v154, time: v153, didSend: v59, from: v151 } = txn3;
        
        ;
        const v155 = stdlib.addressEq(v121, v151);
        ;
        const v156 = stdlib.lt(v152, stdlib.checkedBigNumberify('./index.rsh:62:22:decimal', stdlib.UInt_max, '3'));
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v152], secs: v154, time: v153, didSend: v59, from: v151 } = txn3;
    ;
    const v155 = stdlib.addressEq(v121, v151);
    stdlib.assert(v155, {
      at: './index.rsh:61:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v156 = stdlib.lt(v152, stdlib.checkedBigNumberify('./index.rsh:62:22:decimal', stdlib.UInt_max, '3'));
    stdlib.assert(v156, {
      at: './index.rsh:62:10:application',
      fs: [],
      msg: 'Invalid week has been selected.',
      who: 'Alice'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v164], secs: v166, time: v165, didSend: v73, from: v163 } = txn4;
    ;
    const v167 = stdlib.addressEq(v131, v163);
    stdlib.assert(v167, {
      at: './index.rsh:74:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    stdlib.protect(ctc3, await interact.updateWeekOutcomeArray(v152, true), {
      at: './index.rsh:79:38:application',
      fs: ['at ./index.rsh:78:15:application call to [unknown function] (defined at: ./index.rsh:78:19:function exp)'],
      msg: 'updateWeekOutcomeArray',
      who: 'Alice'
      });
    const v170 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
      at: './index.rsh:80:72:application',
      fs: ['at ./index.rsh:78:15:application call to [unknown function] (defined at: ./index.rsh:78:19:function exp)'],
      msg: 'seeWeekOutcomeArray',
      who: 'Alice'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v121, v131, v164, v170],
      evt_cnt: 1,
      funcNum: 5,
      lct: v165,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:83:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v175], secs: v177, time: v176, didSend: v86, from: v174 } = txn5;
        
        ;
        const v178 = stdlib.addressEq(v121, v174);
        ;
        const v179 = v164[stdlib.checkedBigNumberify('./index.rsh:86:47:array ref', stdlib.UInt_max, '0')];
        const v181 = v164[stdlib.checkedBigNumberify('./index.rsh:87:24:array ref', stdlib.UInt_max, '1')];
        const v183 = v179 ? v181 : false;
        const v184 = v164[stdlib.checkedBigNumberify('./index.rsh:87:56:array ref', stdlib.UInt_max, '2')];
        const v186 = v183 ? v184 : false;
        const cv135 = v186;
        const cv136 = v176;
        
        await (async () => {
          const v135 = cv135;
          const v136 = cv136;
          
          if (await (async () => {
            const v146 = v135 ? false : true;
            
            return v146;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v175], secs: v177, time: v176, didSend: v86, from: v174 } = txn5;
    ;
    const v178 = stdlib.addressEq(v121, v174);
    stdlib.assert(v178, {
      at: './index.rsh:83:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v179 = v164[stdlib.checkedBigNumberify('./index.rsh:86:47:array ref', stdlib.UInt_max, '0')];
    const v181 = v164[stdlib.checkedBigNumberify('./index.rsh:87:24:array ref', stdlib.UInt_max, '1')];
    const v183 = v179 ? v181 : false;
    const v184 = v164[stdlib.checkedBigNumberify('./index.rsh:87:56:array ref', stdlib.UInt_max, '2')];
    const v186 = v183 ? v184 : false;
    const cv135 = v186;
    const cv136 = v176;
    
    v135 = cv135;
    v136 = cv136;
    
    continue;
    
    
    
    
    
    }
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
  const {data: [v122], secs: v124, time: v123, didSend: v30, from: v121 } = txn1;
  ;
  const v127 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:44:70:application',
    fs: ['at ./index.rsh:43:15:application call to [unknown function] (defined at: ./index.rsh:43:19:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v121, v127],
    evt_cnt: 1,
    funcNum: 1,
    lct: v123,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v132], secs: v134, time: v133, didSend: v42, from: v131 } = txn2;
      
      ;
      const v135 = false;
      const v136 = v133;
      
      if (await (async () => {
        const v146 = v135 ? false : true;
        
        return v146;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v132], secs: v134, time: v133, didSend: v42, from: v131 } = txn2;
  ;
  let v135 = false;
  let v136 = v133;
  
  while (await (async () => {
    const v146 = v135 ? false : true;
    
    return v146;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v152], secs: v154, time: v153, didSend: v59, from: v151 } = txn3;
    ;
    const v155 = stdlib.addressEq(v121, v151);
    stdlib.assert(v155, {
      at: './index.rsh:61:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v156 = stdlib.lt(v152, stdlib.checkedBigNumberify('./index.rsh:62:22:decimal', stdlib.UInt_max, '3'));
    stdlib.assert(v156, {
      at: './index.rsh:62:10:application',
      fs: [],
      msg: 'Invalid week has been selected.',
      who: 'Creator'
      });
    stdlib.protect(ctc3, await interact.updateWeekOutcomeArray(v152, true), {
      at: './index.rsh:70:38:application',
      fs: ['at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:21:function exp)'],
      msg: 'updateWeekOutcomeArray',
      who: 'Creator'
      });
    const v159 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
      at: './index.rsh:71:72:application',
      fs: ['at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:21:function exp)'],
      msg: 'seeWeekOutcomeArray',
      who: 'Creator'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v121, v131, v159],
      evt_cnt: 1,
      funcNum: 4,
      lct: v153,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:74:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v164], secs: v166, time: v165, didSend: v73, from: v163 } = txn4;
        
        ;
        const v167 = stdlib.addressEq(v131, v163);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v164], secs: v166, time: v165, didSend: v73, from: v163 } = txn4;
    ;
    const v167 = stdlib.addressEq(v131, v163);
    stdlib.assert(v167, {
      at: './index.rsh:74:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v175], secs: v177, time: v176, didSend: v86, from: v174 } = txn5;
    ;
    const v178 = stdlib.addressEq(v121, v174);
    stdlib.assert(v178, {
      at: './index.rsh:83:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v179 = v164[stdlib.checkedBigNumberify('./index.rsh:86:47:array ref', stdlib.UInt_max, '0')];
    const v181 = v164[stdlib.checkedBigNumberify('./index.rsh:87:24:array ref', stdlib.UInt_max, '1')];
    const v183 = v179 ? v181 : false;
    const v184 = v164[stdlib.checkedBigNumberify('./index.rsh:87:56:array ref', stdlib.UInt_max, '2')];
    const v186 = v183 ? v184 : false;
    const cv135 = v186;
    const cv136 = v176;
    
    v135 = cv135;
    v136 = cv136;
    
    continue;
    
    
    
    
    
    }
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAGAAEFBAMGJgIBAAAiNQAxGEECHClkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAEGSSUMQACrSSQMQABUJBJEIQU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/1dAAzX+STUFNf2ABNso0Kc0/VCwNP8xABJENP80A1cgIDT+IlU0/iNVEDT+gQJVEDIGQgEXSCQ0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/1cgIDX+STUFNf2ABO6DmI40/VCwNP4xABJENP80/lA0/VAoSwFXAENnSCEFNQEyBjUCQgEISCU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/1cgIDX+STUFFzX9gATUDGzWNP0WULA0/zEAEkQ0/SEEDEQ0/zT+UChLAVcAQGdIJDUBMgY1AkIAs0kjDEAAMCMSRCM0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABFULCvg0/1CwNAMxACIyBkIAO0giNAESRDQESSISTDQCEhFESTUFNf+ABHNPeGo0/1CwgaCNBogAkzEAKEsBVwAgZ0gjNQEyBjUCQgBCNf81/jX9Nfw0/kEAA0IAFzT8NP1QKEsBVwBAZ0glNQEyBjUCQgAbMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 67,
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
                "name": "v122",
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
                "name": "v122",
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
                "internalType": "bool[3]",
                "name": "v132",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
                "internalType": "uint256",
                "name": "v152",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v164",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v175",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "internalType": "bool[3]",
                "name": "v132",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
                "internalType": "uint256",
                "name": "v152",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
                "name": "v164",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
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
                "name": "v175",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200110d3803806200110d833981016040819052620000269162000224565b60008055436003556040517fd9fe77929a57a435d88ce369dbd837cb668f91aa71ce26c08b9411d101557bdc90620000629033908490620002d3565b60405180910390a16200007834156007620000c9565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c0929190620000f3565b50505062000367565b81620000ef5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000101906200032a565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620001d457620001d462000199565b60405290565b604051602081016001600160401b0381118282101715620001d457620001d462000199565b604051606081016001600160401b0381118282101715620001d457620001d462000199565b600081830360808112156200023857600080fd5b62000242620001af565b8351815260206060601f19840112156200025b57600080fd5b62000265620001da565b925085603f8601126200027757600080fd5b62000281620001ff565b8060808701888111156200029457600080fd5b8388015b81811015620002c15780518015158114620002b35760008081fd5b845292840192840162000298565b50508452508101919091529392505050565b6001600160a01b03831681528151602080830191909152828101515160a0830191906000604085015b60038210156200031f5782511515815291830191600191909101908301620002fc565b505050509392505050565b600181811c908216806200033f57607f821691505b602082108114156200036157634e487b7160e01b600052602260045260246000fd5b50919050565b610d9680620003776000396000f3fe60806040526004361061006e5760003560e01c8063ab53f2c61161004b578063ab53f2c6146100c3578063b94b5679146100e6578063f4cedab0146100f9578063fd8c74a71461010c57005b80631e93b0f11461007757806326f7faf31461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610a43565b61011f565b3480156100ba57600080fd5b50600154610088565b3480156100cf57600080fd5b506100d861029e565b604051610092929190610a66565b6100756100f4366004610a43565b61033b565b610075610107366004610ac3565b6104ff565b61007561011a366004610a43565b6106c7565b61012f600160005414600961085f565b6101498135158061014257506001548235145b600a61085f565b60008080556002805461015b90610ad5565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610ad5565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610b65565b90507fa3a6b7a3be27d9a5f5d9a59f09ef50e8283f713bca623fe5b7379804a20f5a85338360405161021f929190610bfc565b60405180910390a16102333415600861085f565b6040805160808101825260008183018181526060830182905282528251808401909352808352602080840191909152810191909152815181516001600160a01b039091169052805133602091820152808201805160009052514391015261029981610888565b505050565b6000606060005460028080546102b390610ad5565b80601f01602080910402602001604051908101604052809291908181526020018280546102df90610ad5565b801561032c5780601f106103015761010080835404028352916020019161032c565b820191906000526020600020905b81548152906001019060200180831161030f57829003601f168201915b50505050509050915091509091565b61034b600660005414601661085f565b6103658135158061035e57506001548235145b601761085f565b60008080556002805461037790610ad5565b80601f01602080910402602001604051908101604052809291908181526020018280546103a390610ad5565b80156103f05780601f106103c5576101008083540402835291602001916103f0565b820191906000526020600020905b8154815290600101906020018083116103d357829003601f168201915b50505050508060200190518101906104089190610c19565b90507fc654b797653201df8e0aeb05e4652c0868015c916032bf45831aef6d486aca8e338360405161043b929190610bfc565b60405180910390a161044f3415601461085f565b8051610467906001600160a01b03163314601561085f565b6040805160808101825260008183018181526060830182905282528251808401845281815260208082019290925281830152835182516001600160a01b039182169052848201518351911691015290820151516104c55760006104cf565b6040820151602001515b6104da5760006104e3565b60408281015101515b6020808301805192151590925290514391015261029981610888565b61050f600460005414600e61085f565b6105298135158061052257506001548235145b600f61085f565b60008080556002805461053b90610ad5565b80601f016020809104026020016040519081016040528092919081815260200182805461056790610ad5565b80156105b45780601f10610589576101008083540402835291602001916105b4565b820191906000526020600020905b81548152906001019060200180831161059757829003601f168201915b50505050508060200190518101906105cc9190610cae565b6040805133815284356020808301919091528501358183015290519192507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1919081900360600190a16106213415600b61085f565b8051610639906001600160a01b03163314600c61085f565b61064b6003602084013510600d61085f565b604080518082019091526000808252602082015281516001600160a01b039081168083526020808501518316818501908152600560005543600155604080519283019390935251909216908201526060015b604051602081830303815290604052600290805190602001906106c192919061091f565b50505050565b6106d7600560005414601261085f565b6106f1813515806106ea57506001548235145b601361085f565b60008080556002805461070390610ad5565b80601f016020809104026020016040519081016040528092919081815260200182805461072f90610ad5565b801561077c5780601f106107515761010080835404028352916020019161077c565b820191906000526020600020905b81548152906001019060200180831161075f57829003601f168201915b50505050508060200190518101906107949190610cae565b90507fc61f44a040194a4752e2a73f0847db5b8f266689e51c8346c69af433ef4b1c6e33836040516107c7929190610bfc565b60405180910390a16107db3415601061085f565b60208101516107f6906001600160a01b03163314601161085f565b6107fe6109a3565b81516001600160a01b039081168252602080840151909116818301526040805160608181019092529185019060039083908390808284376000920182905250604080860194909452600690555050436001555161069d908290602001610d09565b816108845760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151156108ac57600080805560018190556108a9906002906109c2565b50565b604080518082018252600080825260208083018281528551516001600160a01b0390811680865287518401518216835260049094554360015585518084019490945290511682850152835180830385018152606090920190935280519192610299926002929091019061091f565b905290565b82805461092b90610ad5565b90600052602060002090601f01602090048101928261094d5760008555610993565b82601f1061096657805160ff1916838001178555610993565b82800160010185558215610993579182015b82811115610993578251825591602001919060010190610978565b5061099f9291506109f8565b5090565b604080516060810182526000808252602082015290810161091a610a0d565b5080546109ce90610ad5565b6000825580601f106109de575050565b601f0160209004906000526020600020908101906108a991905b5b8082111561099f57600081556001016109f9565b60405180606001604052806003906020820280368337509192915050565b600060808284031215610a3d57600080fd5b50919050565b600060808284031215610a5557600080fd5b610a5f8383610a2b565b9392505050565b82815260006020604081840152835180604085015260005b81811015610a9a57858101830151858201606001528201610a7e565b81811115610aac576000606083870101525b50601f01601f191692909201606001949350505050565b600060408284031215610a3d57600080fd5b600181811c90821680610ae957607f821691505b60208210811415610a3d57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610b4357610b43610b0a565b60405290565b80516001600160a01b0381168114610b6057600080fd5b919050565b600060208284031215610b7757600080fd5b6040516020810181811067ffffffffffffffff82111715610b9a57610b9a610b0a565b604052610ba683610b49565b81529392505050565b80151581146108a957600080fd5b80358252602080830181830160005b6003811015610bf4578135610be081610baf565b151583529183019190830190600101610bcc565b505050505050565b6001600160a01b038316815260a08101610a5f6020830184610bbd565b600060a08284031215610c2b57600080fd5b610c33610b20565b610c3c83610b49565b81526020610c4b818501610b49565b8183015284605f850112610c5e57600080fd5b610c66610b20565b8060a0860187811115610c7857600080fd5b604087015b81811015610c9d578051610c9081610baf565b8452928401928401610c7d565b505060408401525090949350505050565b600060408284031215610cc057600080fd5b6040516040810181811067ffffffffffffffff82111715610ce357610ce3610b0a565b604052610cef83610b49565b8152610cfd60208401610b49565b60208201529392505050565b81516001600160a01b0390811682526020808401519091168183015260408084015160a08401929091840160005b6003811015610d56578351151582529282019290820190600101610d37565b505050509291505056fea2646970667358221220562f53fbdd17d90cc79cc0ab0ab4ff893fcd5895c84959631f1173af24f8eeae64736f6c634300080c0033`,
  BytecodeLen: 4365,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:93:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:53:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:63:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:75:13:after expr stmt semicolon',
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
