/* @hash 5b620e7884729546ca7a6fdd7e3510ea */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';

import { TokenSmartContract, TokenMigrationSmartContract } from './Token/types';

import { createTokenSmartContract } from './Token/contract';

export interface Contracts<TClient extends Client = Client> {
  readonly token: TokenSmartContract<TClient>;
}

export interface MigrationContracts {
  readonly token: TokenMigrationSmartContract;
}

export const createContracts = <TClient extends Client>(client: TClient): Contracts<TClient> => ({
  token: createTokenSmartContract(client),
});
