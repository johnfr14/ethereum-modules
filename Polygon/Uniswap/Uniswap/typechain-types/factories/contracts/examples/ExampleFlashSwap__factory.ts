/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ExampleFlashSwap,
  ExampleFlashSwapInterface,
} from "../../../contracts/examples/ExampleFlashSwap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factoryV1",
        type: "address",
      },
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV2Call",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b506040516119243803806119248339818101604052606081101561003357600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b15801561010c57600080fd5b505afa158015610120573d6000803e3d6000fd5b505050506040513d602081101561013657600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050505060805160601c60a05160601c60c05160601c6117426101e26000398061036552806103c25280610421528061048a52806104f6528061086a52806108eb5280610b0e52508061024652806108235280610c5952508061059152506117426000f3fe6080604052600436106100225760003560e01c806310d1e85c1461002e57610029565b3661002957005b600080fd5b34801561003a57600080fd5b506100e66004803603608081101561005157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156100a257600080fd5b8201836020820111156100b457600080fd5b803590602001918460018302840111640100000000831117156100d657600080fd5b90919293919293905050506100e8565b005b6060600267ffffffffffffffff8111801561010257600080fd5b506040519080825280602002602001820160405280156101315781602001602082028036833780820191505090505b50905060008060003373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561017f57600080fd5b505afa158015610193573d6000803e3d6000fd5b505050506040513d60208110156101a957600080fd5b8101908080519060200190929190505050905060003373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561020457600080fd5b505afa158015610218573d6000803e3d6000fd5b505050506040513d602081101561022e57600080fd5b8101908080519060200190929190505050905061026c7f00000000000000000000000000000000000000000000000000000000000000008383610e40565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102a057fe5b60008914806102af5750600088145b6102b557fe5b600089146102c357806102c5565b815b856000815181106102d257fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506000891461031a578161031c565b805b8560018151811061032957fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146103bc57886103be565b875b93507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610419578761041b565b885b925050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168360008151811061046357fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614806104ec57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16836001815181106104cc57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16145b6104f257fe5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168460008151811061053857fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614610575578360008151811061056857fe5b602002602001015161058b565b8360018151811061058257fe5b60200260200101515b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166306f2bf62836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561062c57600080fd5b505afa158015610640573d6000803e3d6000fd5b505050506040513d602081101561065657600080fd5b810190808051906020019092919050505090506000841115610ae75760008787602081101561068457600080fd5b810190808035906020019092919050505090508273ffffffffffffffffffffffffffffffffffffffff1663095ea7b383876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561071e57600080fd5b505af1158015610732573d6000803e3d6000fd5b505050506040513d602081101561074857600080fd5b81019080805190602001909291905050505060008273ffffffffffffffffffffffffffffffffffffffff166395e3c50b87847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518463ffffffff1660e01b8152600401808481526020018381526020018281526020019350505050602060405180830381600087803b1580156107df57600080fd5b505af11580156107f3573d6000803e3d6000fd5b505050506040513d602081101561080957600080fd5b8101908080519060200190929190505050905060006108497f0000000000000000000000000000000000000000000000000000000000000000888a610f9b565b60008151811061085557fe5b6020026020010151905080821161086857fe5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156108d057600080fd5b505af11580156108e4573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561099057600080fd5b505af11580156109a4573d6000803e3d6000fd5b505050506040513d60208110156109ba57600080fd5b81019080805190602001909291905050506109d157fe5b60008d73ffffffffffffffffffffffffffffffffffffffff16828403600067ffffffffffffffff81118015610a0557600080fd5b506040519080825280601f01601f191660200182016040528015610a385781602001600182028036833780820191505090505b506040518082805190602001908083835b60208310610a6c5780518252602082019150602081019050602083039250610a49565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610ace576040519150601f19603f3d011682016040523d82523d6000602084013e610ad3565b606091505b5050905080610ade57fe5b50505050610e34565b600087876020811015610af957600080fd5b810190808035906020019092919050505090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d856040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610b7f57600080fd5b505af1158015610b93573d6000803e3d6000fd5b5050505060008273ffffffffffffffffffffffffffffffffffffffff1663f39b5b9b86847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518463ffffffff1660e01b815260040180838152602001828152602001925050506020604051808303818588803b158015610c1457600080fd5b505af1158015610c28573d6000803e3d6000fd5b50505050506040513d6020811015610c3f57600080fd5b810190808051906020019092919050505090506000610c7f7f0000000000000000000000000000000000000000000000000000000000000000878a610f9b565b600081518110610c8b57fe5b60200260200101519050808211610c9e57fe5b8473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610d2557600080fd5b505af1158015610d39573d6000803e3d6000fd5b505050506040513d6020811015610d4f57600080fd5b8101908080519060200190929190505050610d6657fe5b8473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8e8385036040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610def57600080fd5b505af1158015610e03573d6000803e3d6000fd5b505050506040513d6020811015610e1957600080fd5b8101908080519060200190929190505050610e3057fe5b5050505b50505050505050505050565b6000806000610e4f858561111b565b91509150858282604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401828152602001807f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f815250602001925050506040516020818303038152906040528051906020012060001c925050509392505050565b6060600282511015611015576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a20494e56414c49445f50415448000081525060200191505060405180910390fd5b815167ffffffffffffffff8111801561102d57600080fd5b5060405190808252806020026020018201604052801561105c5781602001602082028036833780820191505090505b509050828160018351038151811061107057fe5b6020026020010181815250506000600183510390505b6000811115611113576000806110c6878660018603815181106110a557fe5b60200260200101518786815181106110b957fe5b6020026020010151611292565b915091506110e88484815181106110d957fe5b602002602001015183836113bb565b8460018503815181106110f757fe5b6020026020010181815250505050808060019003915050611086565b509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156111a3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806116c06025913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16106111dd5782846111e0565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561128b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a205a45524f5f41444452455353000081525060200191505060405180910390fd5b9250929050565b60008060006112a1858561111b565b5090506000806112b2888888610e40565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156112f757600080fd5b505afa15801561130b573d6000803e3d6000fd5b505050506040513d606081101561132157600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16146113a55780826113a8565b81815b8095508196505050505050935093915050565b6000808411611415576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611694602c913960400191505060405180910390fd5b6000831180156114255750600082115b61147a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806116e56028913960400191505060405180910390fd5b60006114a36103e861149587876114f890919063ffffffff16565b6114f890919063ffffffff16565b905060006114ce6103e56114c0888761158d90919063ffffffff16565b6114f890919063ffffffff16565b90506114ed60018284816114de57fe5b0461161090919063ffffffff16565b925050509392505050565b600080821480611515575082828385029250828161151257fe5b04145b611587576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6d756c2d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b600082828403915081111561160a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f64732d6d6174682d7375622d756e646572666c6f77000000000000000000000081525060200191505060405180910390fd5b92915050565b600082828401915081101561168d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6164642d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b9291505056fe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459a2646970667358221220cf0b32c36f587f85096246f5bf61fcb3e71d59571e08356f9d55b76f701c5d2d64736f6c63430006060033";

type ExampleFlashSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleFlashSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleFlashSwap__factory extends ContractFactory {
  constructor(...args: ExampleFlashSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _factory: AddressLike,
    _factoryV1: AddressLike,
    router: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _factory,
      _factoryV1,
      router,
      overrides || {}
    );
  }
  override deploy(
    _factory: AddressLike,
    _factoryV1: AddressLike,
    router: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _factory,
      _factoryV1,
      router,
      overrides || {}
    ) as Promise<
      ExampleFlashSwap & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ExampleFlashSwap__factory {
    return super.connect(runner) as ExampleFlashSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleFlashSwapInterface {
    return new Interface(_abi) as ExampleFlashSwapInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ExampleFlashSwap {
    return new Contract(address, _abi, runner) as unknown as ExampleFlashSwap;
  }
}
