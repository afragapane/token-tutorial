/* @hash 6bdeda59c61da27fdc605fa8f6847a1f */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { TokenSmartContract } from './types';
import { tokenABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AewTzFTSSQwUjuVbspgH9hdy367q2WQZhY',
    },
  },
  abi: tokenABI,
  sourceMaps,
};

export const createTokenSmartContract = <TClient extends Client>(client: TClient): TokenSmartContract<TClient> =>
  client.smartContract(definition);
