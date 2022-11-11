import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type TestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTest = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTest = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Test = LazyLoading extends LazyLoadingDisabled ? EagerTest : LazyTest

export declare const Test: (new (init: ModelInit<Test, TestMetaData>) => Test) & {
  copyOf(source: Test, mutator: (draft: MutableModel<Test, TestMetaData>) => MutableModel<Test, TestMetaData> | void): Test;
}