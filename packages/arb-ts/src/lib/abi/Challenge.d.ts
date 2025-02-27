/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface ChallengeInterface extends ethers.utils.Interface {
  functions: {
    'asserter()': FunctionFragment
    'asserterTimeLeft()': FunctionFragment
    'bisectExecution(bytes32[],uint256,uint256,uint256,bytes32,uint256,bytes32,bytes32[])': FunctionFragment
    'bridges(uint256)': FunctionFragment
    'challengeState()': FunctionFragment
    'challenger()': FunctionFragment
    'challengerTimeLeft()': FunctionFragment
    'clearChallenge()': FunctionFragment
    'currentResponder()': FunctionFragment
    'currentResponderTimeLeft()': FunctionFragment
    'executors(uint256)': FunctionFragment
    'initializeChallenge(address[],address,bytes32,uint256,address,address,uint256,uint256,address,address)': FunctionFragment
    'isMaster()': FunctionFragment
    'lastMoveBlock()': FunctionFragment
    'oneStepProveExecution(bytes32[],uint256,uint256,uint256,bytes32,uint256,bytes32[2],uint256[3],bytes,bytes,uint8)': FunctionFragment
    'proveContinuedExecution(bytes32[],uint256,uint256,uint256,bytes32,uint256,bytes32)': FunctionFragment
    'timeout()': FunctionFragment
    'turn()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'asserter', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'asserterTimeLeft',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'bisectExecution',
    values: [
      BytesLike[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BytesLike,
      BytesLike[]
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'bridges',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'challengeState',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'challenger', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'challengerTimeLeft',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'clearChallenge',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'currentResponder',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'currentResponderTimeLeft',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'executors',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'initializeChallenge',
    values: [
      string[],
      string,
      BytesLike,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string
  encodeFunctionData(functionFragment: 'isMaster', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'lastMoveBlock',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'oneStepProveExecution',
    values: [
      BytesLike[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish,
      [BytesLike, BytesLike],
      [BigNumberish, BigNumberish, BigNumberish],
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'proveContinuedExecution',
    values: [
      BytesLike[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(functionFragment: 'timeout', values?: undefined): string
  encodeFunctionData(functionFragment: 'turn', values?: undefined): string

  decodeFunctionResult(functionFragment: 'asserter', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'asserterTimeLeft',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'bisectExecution',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'bridges', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'challengeState',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'challenger', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'challengerTimeLeft',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'clearChallenge',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'currentResponder',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'currentResponderTimeLeft',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'executors', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'initializeChallenge',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'isMaster', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'lastMoveBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'oneStepProveExecution',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'proveContinuedExecution',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'timeout', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'turn', data: BytesLike): Result

  events: {
    'AsserterTimedOut()': EventFragment
    'Bisected(bytes32,uint256,uint256,bytes32[])': EventFragment
    'ChallengerTimedOut()': EventFragment
    'ContinuedExecutionProven()': EventFragment
    'InitiatedChallenge()': EventFragment
    'OneStepProofCompleted()': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'AsserterTimedOut'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Bisected'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ChallengerTimedOut'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ContinuedExecutionProven'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'InitiatedChallenge'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OneStepProofCompleted'): EventFragment
}

export class Challenge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: ChallengeInterface

  functions: {
    asserter(overrides?: CallOverrides): Promise<[string]>

    asserterTimeLeft(overrides?: CallOverrides): Promise<[BigNumber]>

    bisectExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _gasUsedBefore: BigNumberish,
      _assertionRest: BytesLike,
      _chainHashes: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    bridges(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    challengeState(overrides?: CallOverrides): Promise<[string]>

    challenger(overrides?: CallOverrides): Promise<[string]>

    challengerTimeLeft(overrides?: CallOverrides): Promise<[BigNumber]>

    clearChallenge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    currentResponder(overrides?: CallOverrides): Promise<[string]>

    currentResponderTimeLeft(overrides?: CallOverrides): Promise<[BigNumber]>

    executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    initializeChallenge(
      _executors: string[],
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    isMaster(overrides?: CallOverrides): Promise<[boolean]>

    lastMoveBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    oneStepProveExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _initialMessagesRead: BigNumberish,
      _initialAccs: [BytesLike, BytesLike],
      _initialState: [BigNumberish, BigNumberish, BigNumberish],
      _executionProof: BytesLike,
      _bufferProof: BytesLike,
      prover: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    proveContinuedExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _gasUsedBefore: BigNumberish,
      _assertionRest: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    timeout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    turn(overrides?: CallOverrides): Promise<[number]>
  }

  asserter(overrides?: CallOverrides): Promise<string>

  asserterTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

  bisectExecution(
    _merkleNodes: BytesLike[],
    _merkleRoute: BigNumberish,
    _challengedSegmentStart: BigNumberish,
    _challengedSegmentLength: BigNumberish,
    _oldEndHash: BytesLike,
    _gasUsedBefore: BigNumberish,
    _assertionRest: BytesLike,
    _chainHashes: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  bridges(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  challengeState(overrides?: CallOverrides): Promise<string>

  challenger(overrides?: CallOverrides): Promise<string>

  challengerTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

  clearChallenge(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  currentResponder(overrides?: CallOverrides): Promise<string>

  currentResponderTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

  executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  initializeChallenge(
    _executors: string[],
    _resultReceiver: string,
    _executionHash: BytesLike,
    _maxMessageCount: BigNumberish,
    _asserter: string,
    _challenger: string,
    _asserterTimeLeft: BigNumberish,
    _challengerTimeLeft: BigNumberish,
    _sequencerBridge: string,
    _delayedBridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  isMaster(overrides?: CallOverrides): Promise<boolean>

  lastMoveBlock(overrides?: CallOverrides): Promise<BigNumber>

  oneStepProveExecution(
    _merkleNodes: BytesLike[],
    _merkleRoute: BigNumberish,
    _challengedSegmentStart: BigNumberish,
    _challengedSegmentLength: BigNumberish,
    _oldEndHash: BytesLike,
    _initialMessagesRead: BigNumberish,
    _initialAccs: [BytesLike, BytesLike],
    _initialState: [BigNumberish, BigNumberish, BigNumberish],
    _executionProof: BytesLike,
    _bufferProof: BytesLike,
    prover: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  proveContinuedExecution(
    _merkleNodes: BytesLike[],
    _merkleRoute: BigNumberish,
    _challengedSegmentStart: BigNumberish,
    _challengedSegmentLength: BigNumberish,
    _oldEndHash: BytesLike,
    _gasUsedBefore: BigNumberish,
    _assertionRest: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  timeout(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  turn(overrides?: CallOverrides): Promise<number>

  callStatic: {
    asserter(overrides?: CallOverrides): Promise<string>

    asserterTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

    bisectExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _gasUsedBefore: BigNumberish,
      _assertionRest: BytesLike,
      _chainHashes: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>

    bridges(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    challengeState(overrides?: CallOverrides): Promise<string>

    challenger(overrides?: CallOverrides): Promise<string>

    challengerTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

    clearChallenge(overrides?: CallOverrides): Promise<void>

    currentResponder(overrides?: CallOverrides): Promise<string>

    currentResponderTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

    executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    initializeChallenge(
      _executors: string[],
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: CallOverrides
    ): Promise<void>

    isMaster(overrides?: CallOverrides): Promise<boolean>

    lastMoveBlock(overrides?: CallOverrides): Promise<BigNumber>

    oneStepProveExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _initialMessagesRead: BigNumberish,
      _initialAccs: [BytesLike, BytesLike],
      _initialState: [BigNumberish, BigNumberish, BigNumberish],
      _executionProof: BytesLike,
      _bufferProof: BytesLike,
      prover: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    proveContinuedExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _gasUsedBefore: BigNumberish,
      _assertionRest: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    timeout(overrides?: CallOverrides): Promise<void>

    turn(overrides?: CallOverrides): Promise<number>
  }

  filters: {
    AsserterTimedOut(): TypedEventFilter<[], {}>

    Bisected(
      challengeRoot?: BytesLike | null,
      challengedSegmentStart?: null,
      challengedSegmentLength?: null,
      chainHashes?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string[]],
      {
        challengeRoot: string
        challengedSegmentStart: BigNumber
        challengedSegmentLength: BigNumber
        chainHashes: string[]
      }
    >

    ChallengerTimedOut(): TypedEventFilter<[], {}>

    ContinuedExecutionProven(): TypedEventFilter<[], {}>

    InitiatedChallenge(): TypedEventFilter<[], {}>

    OneStepProofCompleted(): TypedEventFilter<[], {}>
  }

  estimateGas: {
    asserter(overrides?: CallOverrides): Promise<BigNumber>

    asserterTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

    bisectExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _gasUsedBefore: BigNumberish,
      _assertionRest: BytesLike,
      _chainHashes: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    bridges(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    challengeState(overrides?: CallOverrides): Promise<BigNumber>

    challenger(overrides?: CallOverrides): Promise<BigNumber>

    challengerTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

    clearChallenge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    currentResponder(overrides?: CallOverrides): Promise<BigNumber>

    currentResponderTimeLeft(overrides?: CallOverrides): Promise<BigNumber>

    executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    initializeChallenge(
      _executors: string[],
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    isMaster(overrides?: CallOverrides): Promise<BigNumber>

    lastMoveBlock(overrides?: CallOverrides): Promise<BigNumber>

    oneStepProveExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _initialMessagesRead: BigNumberish,
      _initialAccs: [BytesLike, BytesLike],
      _initialState: [BigNumberish, BigNumberish, BigNumberish],
      _executionProof: BytesLike,
      _bufferProof: BytesLike,
      prover: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    proveContinuedExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _gasUsedBefore: BigNumberish,
      _assertionRest: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    timeout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    turn(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    asserter(overrides?: CallOverrides): Promise<PopulatedTransaction>

    asserterTimeLeft(overrides?: CallOverrides): Promise<PopulatedTransaction>

    bisectExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _gasUsedBefore: BigNumberish,
      _assertionRest: BytesLike,
      _chainHashes: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    bridges(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    challengeState(overrides?: CallOverrides): Promise<PopulatedTransaction>

    challenger(overrides?: CallOverrides): Promise<PopulatedTransaction>

    challengerTimeLeft(overrides?: CallOverrides): Promise<PopulatedTransaction>

    clearChallenge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    currentResponder(overrides?: CallOverrides): Promise<PopulatedTransaction>

    currentResponderTimeLeft(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    executors(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    initializeChallenge(
      _executors: string[],
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    isMaster(overrides?: CallOverrides): Promise<PopulatedTransaction>

    lastMoveBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    oneStepProveExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _initialMessagesRead: BigNumberish,
      _initialAccs: [BytesLike, BytesLike],
      _initialState: [BigNumberish, BigNumberish, BigNumberish],
      _executionProof: BytesLike,
      _bufferProof: BytesLike,
      prover: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    proveContinuedExecution(
      _merkleNodes: BytesLike[],
      _merkleRoute: BigNumberish,
      _challengedSegmentStart: BigNumberish,
      _challengedSegmentLength: BigNumberish,
      _oldEndHash: BytesLike,
      _gasUsedBefore: BigNumberish,
      _assertionRest: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    timeout(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    turn(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
