/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L1WethGateway } from '../L1WethGateway'

export class L1WethGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L1WethGateway> {
    return super.deploy(overrides || {}) as Promise<L1WethGateway>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1WethGateway {
    return super.attach(address) as L1WethGateway
  }
  connect(signer: Signer): L1WethGateway__factory {
    return super.connect(signer) as L1WethGateway__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1WethGateway {
    return new Contract(address, _abi, signerOrProvider) as L1WethGateway
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'madeExternalCall',
        type: 'bool',
      },
    ],
    name: 'WithdrawRedirected',
    type: 'event',
  },
  {
    inputs: [],
    name: 'STORAGE_GAP',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
    ],
    name: 'encodeWithdrawal',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_initialData',
        type: 'bytes',
      },
    ],
    name: 'getExternalCall',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Weth',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'parseInboundData',
    outputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_extraData',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'redirectedExits',
    outputs: [
      {
        internalType: 'address',
        name: '_newTo',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferExitAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50612794806100206000396000f3fe6080604052600436106100e15760003560e01c806386ee20501161008557806386ee2050146103e1578063a0c76a96146104db578063a7e28d48146105b4578063bcf2e6eb146105e7578063bd5f3e7d1461065a578063d2ce7d6514610745578063f398744c146107df578063f68a9082146107f4578063fb0e722b146108ba576100e8565b8062aa3a9b146100ed578063020a6058146101c65780630f09eb51146102115780631459457a14610226578063146bf4b11461027b578063247b2768146102ac5780632db09c1c146102c15780632e567b36146102d6576100e8565b366100e857005b600080fd5b3480156100f957600080fd5b506101c4600480360360a081101561011057600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561015057600080fd5b82018360208201111561016257600080fd5b803590602001918460018302840111600160201b8311171561018357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108cf945050505050565b005b3480156101d257600080fd5b506101ff600480360360408110156101e957600080fd5b50803590602001356001600160a01b0316610ac9565b60408051918252519081900360200190f35b34801561021d57600080fd5b506101ff610afe565b34801561023257600080fd5b506101c4600480360360a081101561024957600080fd5b506001600160a01b03813581169160208101358216916040820135811691606081013582169160809091013516610b05565b34801561028757600080fd5b50610290610bd9565b604080516001600160a01b039092168252519081900360200190f35b3480156102b857600080fd5b50610290610be8565b3480156102cd57600080fd5b50610290610bf7565b61036c600480360360a08110156102ec57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561032e57600080fd5b82018360208201111561034057600080fd5b803590602001918460018302840111600160201b8311171561036157600080fd5b509092509050610c06565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103a657818101518382015260200161038e565b50505050905090810190601f1680156103d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103ed57600080fd5b5061045c6004803603602081101561040457600080fd5b810190602081018135600160201b81111561041e57600080fd5b82018360208201111561043057600080fd5b803590602001918460018302840111600160201b8311171561045157600080fd5b509092509050610f4f565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561049f578181015183820152602001610487565b50505050905090810190601f1680156104cc5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b3480156104e757600080fd5b5061036c600480360360a08110156104fe57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561054057600080fd5b82018360208201111561055257600080fd5b803590602001918460018302840111600160201b8311171561057357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610ffc945050505050565b3480156105c057600080fd5b50610290600480360360208110156105d757600080fd5b50356001600160a01b03166111e4565b3480156105f357600080fd5b506106116004803603602081101561060a57600080fd5b50356111f7565b604080516001600160a01b03841681526020808201838152845193830193909352835191929160608401918501908083836000831561049f578181015183820152602001610487565b34801561066657600080fd5b506101c4600480360360a081101561067d57600080fd5b8135916001600160a01b03602082013581169260408301359091169190810190608081016060820135600160201b8111156106b757600080fd5b8201836020820111156106c957600080fd5b803590602001918460018302840111600160201b831117156106ea57600080fd5b919390929091602081019035600160201b81111561070757600080fd5b82018360208201111561071957600080fd5b803590602001918460018302840111600160201b8311171561073a57600080fd5b5090925090506112ab565b61036c600480360360c081101561075b57600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156107a157600080fd5b8201836020820111156107b357600080fd5b803590602001918460018302840111600160201b831117156107d457600080fd5b509092509050611584565b3480156107eb57600080fd5b50610290611714565b34801561080057600080fd5b506106116004803603606081101561081757600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b81111561084657600080fd5b82018360208201111561085857600080fd5b803590602001918460018302840111600160201b8311171561087957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611723945050505050565b3480156108c657600080fd5b5061029061187f565b333014610923576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b610935826001600160a01b031661188e565b610986576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b610991858386611894565b600061099b610afe565b5a039050805a116109dd5760405162461bcd60e51b815260040180806020018281038252602b81526020018061270a602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610a5a578181015183820152602001610a42565b50505050905090810190601f168015610a875780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b158015610aa857600080fd5b5087f1158015610abc573d6000803e3d6000fd5b5050505050505050505050565b604080516020808201949094526001600160a01b03929092168282015280518083038201815260609092019052805191012090565b6175305b90565b610b10858585611903565b6001600160a01b038216610b5c576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9862ae8aa8960931b604482015290519081900360640190fd5b6001600160a01b038116610ba8576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9864ae8aa8960931b604482015290519081900360640190fd5b600480546001600160a01b039384166001600160a01b03199182161790915560058054929093169116179055505050565b6004546001600160a01b031681565b6005546001600160a01b031681565b6000546001600160a01b031681565b600254606090600090610c21906001600160a01b031661190e565b9050610c2c81611aa6565b610c78576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60006060610c868686610f4f565b91509150610c95828983611723565b8051919950915015610e90576000306001600160a01b031662aa3a9b8c8a8d8d876040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d50578181015183820152602001610d38565b50505050905090810190601f168015610d7d5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610da057600080fd5b505af1925050508015610db1575060015b610dc557610dc08b8b8a611894565b610dc9565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b86604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e4e578181015183820152602001610e36565b50505050905090810190601f168015610e7b5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610e9b565b610e9b8a8989611894565b81886001600160a01b03168a6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8d8b8b8b60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a4505060408051602081019091526000815298975050505050505050565b6000606083836040811015610f6357600080fd5b81359190810190604081016020820135600160201b811115610f8457600080fd5b820183602082011115610f9657600080fd5b803590602001918460018302840111600160201b83111715610fb757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b606080604051806020016040528060008152509050632e567b3660e01b878787878588604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561106357818101518382015260200161104b565b50505050905090810190601f1680156110905780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156110c35781810151838201526020016110ab565b50505050905090810190601f1680156110f05780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808c16602484019081528b82166044850152908a1660648401526084830189905260a060a48401908152825160c48501528251929850909650945060e4909101925060208601915080838360005b83811015611170578181015183820152602001611158565b50505050905090810190601f16801561119d5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b60006111ef82611aba565b90505b919050565b6003602090815260009182526040918290208054600180830180548651600261010094831615949094026000190190911692909204601f81018690048602830186019096528582526001600160a01b039092169492939092908301828280156112a15780601f10611276576101008083540402835291602001916112a1565b820191906000526020600020905b81548152906001019060200180831161128457829003601f168201915b5050505050905082565b60006112c7888860405180602001604052806000815250611723565b509050336001600160a01b0382161461131d576040805162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015290519081900360640190fd5b61135f88888888888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611b1f92505050565b81156114c757611377866001600160a01b031661188e565b6113ba576040805162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000866001600160a01b031663592e2070838b87876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050602060405180830381600087803b15801561145057600080fd5b505af1158015611464573d6000803e3d6000fd5b505050506040513d602081101561147a57600080fd5b50519050806114c5576040805162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015290519081900360640190fd5b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051808060200180602001841515151581526020018381038352888882818152602001925080828437600083820152601f01601f191690910184810383528681526020019050868680828437600083820152604051601f909101601f1916909201829003995090975050505050505050a45050505050505050565b6060600080600060606115cc87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611b9292505050565b919550925090506115e56001600160a01b038d1661188e565b611628576040805162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b60006116338d611aba565b90506116408d868d611d58565b6116508d868e8e8e8e8989611dd6565b935050505080896001600160a01b0316836001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88d8c8a8a60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040805160208082019390935281518082039093018352810190529998505050505050505050565b6001546001600160a01b031681565b6000606060006117338686610ac9565b905061173d612633565b6000828152600360209081526040918290208251808401845281546001600160a01b03168152600180830180548651600261010094831615949094026000190190911692909204601f81018690048602830186019096528582529194929385810193919291908301828280156117f45780601f106117c9576101008083540402835291602001916117f4565b820191906000526020600020905b8154815290600101906020018083116117d757829003601f168201915b5050509190925250508151919250506001600160a01b031660011415611852576040805162461bcd60e51b815260206004820152600e60248201526d1053149150511657d1561255115160921b604482015290519081900360640190fd5b80516001600160a01b03161561186957805161186b565b855b602090910151909350915050935093915050565b6002546001600160a01b031681565b3b151590565b826001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156118cf57600080fd5b505af11580156118e3573d6000803e3d6000fd5b506118fe935050506001600160a01b03851690508383611dff565b505050565b6118fe838383611e51565b600080826001600160a01b031663e78cea926040518163ffffffff1660e01b815260040160206040518083038186803b15801561194a57600080fd5b505afa15801561195e573d6000803e3d6000fd5b505050506040513d602081101561197457600080fd5b50516040805163ab5d894360e01b815290516001600160a01b039092169163ab5d894391600480820192602092909190829003018186803b1580156119b857600080fd5b505afa1580156119cc573d6000803e3d6000fd5b505050506040513d60208110156119e257600080fd5b505160408051634032458160e11b815290519192506000916001600160a01b038416916380648b02916004808301926020929190829003018186803b158015611a2a57600080fd5b505afa158015611a3e573d6000803e3d6000fd5b505050506040513d6020811015611a5457600080fd5b505190506001600160a01b038116611a9f576040805162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015290519081900360640190fd5b9392505050565b6000546001600160a01b0390811691161490565b6004546000906001600160a01b03838116911614611b0e576040805162461bcd60e51b815260206004820152600c60248201526b0aea49e9c8ebe9862ae8aa8960a31b604482015290519081900360640190fd5b50506005546001600160a01b031690565b6000611b2b8585610ac9565b6040805180820182526001600160a01b038681168252602080830187815260008681526003835294909420835181546001600160a01b03191693169290921782559251805194955091939092611b8892600185019291019061264b565b5050505050505050565b6000806060611ba033611f0e565b15611c7b57838060200190516040811015611bba57600080fd5b815160208301805160405192949293830192919084600160201b821115611be057600080fd5b908301906020820185811115611bf557600080fd5b8251600160201b811182820188101715611c0e57600080fd5b82525081516020918201929091019080838360005b83811015611c3b578181015183820152602001611c23565b50505050905090810190601f168015611c685780820380516001836020036101000a031916815260200191505b5060405250929550909250611c81915050565b50339150825b808060200190516040811015611c9657600080fd5b815160208301805160405192949293830192919084600160201b821115611cbc57600080fd5b908301906020820185811115611cd157600080fd5b8251600160201b811182820188101715611cea57600080fd5b82525081516020918201929091019080838360005b83811015611d17578181015183820152602001611cff565b50505050905090810190601f168015611d445780820380516001836020036101000a031916815260200191505b506040525095979296509094509092505050565b611d736001600160a01b03841683308463ffffffff61201a16565b826001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611db957600080fd5b505af1158015611dcd573d6000803e3d6000fd5b50505050505050565b6000611df28887858888611ded8f8f8f8f8c610ffc565b61207a565b9998505050505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526118fe9084906120aa565b611e5b838361215b565b6001600160a01b038216611ea3576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b6001600160a01b038116611eea576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b60408051600481526024810182526020810180516001600160e01b03166363851c3160e01b1781529151815160009384936060936001600160a01b03881693919290918291908083835b60208310611f775780518252601f199092019160209182019101611f58565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114611fd7576040519150601f19603f3d011682016040523d82523d6000602084013e611fdc565b606091505b5091509150611ff3846001600160a01b031661188e565b612002576000925050506111f2565b81612012576000925050506111f2565b519392505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526120749085906120aa565b50505050565b60025460008054909161209f916001600160a01b039182169116898989898989612169565b979650505050505050565b60606120ff826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661236b9092919063ffffffff16565b8051909150156118fe5780806020019051602081101561211e57600080fd5b50516118fe5760405162461bcd60e51b815260040180806020018281038252602a815260200180612735602a913960400191505060405180910390fd5b6121658282612382565b5050565b600080896001600160a01b031663679b6ded8834018b8a8a8d8e8c8c8c6040518a63ffffffff1660e01b815260040180896001600160a01b03166001600160a01b03168152602001888152602001878152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561223257818101518382015260200161221a565b50505050905090810190601f16801561225f5780820380516001836020036101000a031916815260200191505b5099505050505050505050506020604051808303818588803b15801561228457600080fd5b505af1158015612298573d6000803e3d6000fd5b50505050506040513d60208110156122af57600080fd5b5051604080516020808252865182820152865193945084936001600160a01b03808f1694908e16937fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b0938a93919283929083019185019080838360005b8381101561232457818101518382015260200161230c565b50505050905090810190601f1680156123515780820380516001836020036101000a031916815260200191505b509250505060405180910390a49998505050505050505050565b606061237a8484600085612443565b949350505050565b6001600160a01b0382166123d3576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615612420576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b50600080546001600160a01b0319166001600160a01b0392909216919091179055565b6060824710156124845760405162461bcd60e51b81526004018080602001828103825260268152602001806126e46026913960400191505060405180910390fd5b61248d8561188e565b6124de576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b6020831061251d5780518252601f1990920191602091820191016124fe565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461257f576040519150601f19603f3d011682016040523d82523d6000602084013e612584565b606091505b509150915061209f8282866060831561259e575081611a9f565b8251156125ae5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156125f85781810151838201526020016125e0565b50505050905090810190601f1680156126255780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60408051808201909152600081526060602082015290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061268c57805160ff19168380011785556126b9565b828001600101855582156126b9579182015b828111156126b957825182559160200191906001019061269e565b506126c59291506126c9565b5090565b610b0291905b808211156126c557600081556001016126cf56fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220527b3f237a57fded39d0aa4b60263c9ebbb4c56c42a875130f3fe599e13da8bd64736f6c634300060b0033'
