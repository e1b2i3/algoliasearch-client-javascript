// This file is generated, manual changes will be lost - read more on https://github.com/algolia/api-clients-automation.

import type { InitClientOptions } from '@algolia/client-common';
import {
  DEFAULT_CONNECT_TIMEOUT_BROWSER,
  DEFAULT_READ_TIMEOUT_BROWSER,
  DEFAULT_WRITE_TIMEOUT_BROWSER,
  createMemoryCache,
  createFallbackableCache,
  createBrowserLocalStorageCache,
} from '@algolia/client-common';
import { createXhrRequester } from '@algolia/requester-browser-xhr';

import {
  createRecommendClient,
  apiClientVersion,
} from '../src/recommendClient';
import type { RecommendClient } from '../src/recommendClient';

export { apiClientVersion, RecommendClient } from '../src/recommendClient';
export * from '../model';

export function recommendClient(
  appId: string,
  apiKey: string,
  options?: InitClientOptions
): RecommendClient {
  if (!appId || typeof appId !== 'string') {
    throw new Error('`appId` is missing.');
  }

  if (!apiKey || typeof apiKey !== 'string') {
    throw new Error('`apiKey` is missing.');
  }

  return createRecommendClient({
    appId,
    apiKey,
    timeouts: {
      connect: DEFAULT_CONNECT_TIMEOUT_BROWSER,
      read: DEFAULT_READ_TIMEOUT_BROWSER,
      write: DEFAULT_WRITE_TIMEOUT_BROWSER,
    },
    requester: createXhrRequester(),
    algoliaAgents: [{ segment: 'Browser' }],
    authMode: 'WithinQueryParameters',
    responsesCache: createMemoryCache(),
    requestsCache: createMemoryCache({ serializable: false }),
    hostsCache: createFallbackableCache({
      caches: [
        createBrowserLocalStorageCache({ key: `${apiClientVersion}-${appId}` }),
        createMemoryCache(),
      ],
    }),
    ...options,
  });
}
