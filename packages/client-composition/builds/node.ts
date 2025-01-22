// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

export type CompositionClient = ReturnType<typeof createCompositionClient>;

import { createHttpRequester } from '@algolia/requester-node-http';

import { createMemoryCache, createNullCache, createNullLogger } from '@algolia/client-common';

import type { ClientOptions } from '@algolia/client-common';

import { createCompositionClient } from '../src/compositionFullClient';

export { apiClientVersion } from '../src/compositionFullClient';

export * from '../model';

export function compositionClient(appId: string, apiKey: string, options?: ClientOptions): CompositionClient {
  if (!appId || typeof appId !== 'string') {
    throw new Error('`appId` is missing.');
  }

  if (!apiKey || typeof apiKey !== 'string') {
    throw new Error('`apiKey` is missing.');
  }

  return {
    ...createCompositionClient({
      appId,
      apiKey,
      timeouts: {
        connect: 2000,
        read: 5000,
        write: 30000,
      },
      logger: createNullLogger(),
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: 'Node.js', version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options,
    }),
  };
}
