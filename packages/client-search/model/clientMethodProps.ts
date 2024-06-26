// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { CreateIterablePromise } from '@algolia/client-common';

import type { Action } from './action';
import type { ApiKey } from './apiKey';
import type { ApiKeyOperation } from './apiKeyOperation';
import type { AssignUserIdParams } from './assignUserIdParams';
import type { AttributeToUpdate } from './attributeToUpdate';
import type { BatchAssignUserIdsParams } from './batchAssignUserIdsParams';
import type { BatchDictionaryEntriesParams } from './batchDictionaryEntriesParams';
import type { BatchWriteParams } from './batchWriteParams';
import type { BrowseParams } from './browseParams';
import type { DeleteByParams } from './deleteByParams';
import type { DictionaryType } from './dictionaryType';
import type { IndexSettings } from './indexSettings';
import type { LogType } from './logType';
import type { OperationIndexParams } from './operationIndexParams';
import type { Rule } from './rule';
import type { SearchDictionaryEntriesParams } from './searchDictionaryEntriesParams';
import type { SearchForFacetValuesRequest } from './searchForFacetValuesRequest';
import type { SearchForFacetsOptions } from './searchForFacetsOptions';
import type { SearchForHitsOptions } from './searchForHitsOptions';
import type { SearchParams } from './searchParams';
import type { SearchParamsObject } from './searchParamsObject';
import type { SearchRulesParams } from './searchRulesParams';
import type { SearchSynonymsParams } from './searchSynonymsParams';
import type { SecuredApiKeyRestrictions } from './securedApiKeyRestrictions';
import type { Source } from './source';
import type { SynonymHit } from './synonymHit';

/**
 * Properties for the `addOrUpdateObject` method.
 */
export type AddOrUpdateObjectProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique record identifier.
   */
  objectID: string;
  /**
   * The record, a schemaless object with attributes that are useful in the context of search and discovery.
   */
  body: Record<string, any>;
};

/**
 * Properties for the `assignUserId` method.
 */
export type AssignUserIdProps = {
  /**
   * Unique identifier of the user who makes the search request.
   */
  xAlgoliaUserID: string;
  assignUserIdParams: AssignUserIdParams;
};

/**
 * Properties for the `batch` method.
 */
export type BatchProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  batchWriteParams: BatchWriteParams;
};

/**
 * Properties for the `batchAssignUserIds` method.
 */
export type BatchAssignUserIdsProps = {
  /**
   * Unique identifier of the user who makes the search request.
   */
  xAlgoliaUserID: string;
  batchAssignUserIdsParams: BatchAssignUserIdsParams;
};

/**
 * Properties for the `batchDictionaryEntries` method.
 */
export type BatchDictionaryEntriesProps = {
  /**
   * Dictionary type in which to search.
   */
  dictionaryName: DictionaryType;
  batchDictionaryEntriesParams: BatchDictionaryEntriesParams;
};

/**
 * Properties for the `browse` method.
 */
export type BrowseProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  browseParams?: BrowseParams;
};

/**
 * Properties for the `clearObjects` method.
 */
export type ClearObjectsProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
};

/**
 * Properties for the `clearRules` method.
 */
export type ClearRulesProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Whether changes are applied to replica indices.
   */
  forwardToReplicas?: boolean;
};

/**
 * Properties for the `clearSynonyms` method.
 */
export type ClearSynonymsProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Whether changes are applied to replica indices.
   */
  forwardToReplicas?: boolean;
};

/**
 * Properties for the `customDelete` method.
 */
export type CustomDeleteProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: Record<string, any>;
};

/**
 * Properties for the `customGet` method.
 */
export type CustomGetProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: Record<string, any>;
};

/**
 * Properties for the `customPost` method.
 */
export type CustomPostProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: Record<string, any>;
  /**
   * Parameters to send with the custom request.
   */
  body?: Record<string, any>;
};

/**
 * Properties for the `customPut` method.
 */
export type CustomPutProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: Record<string, any>;
  /**
   * Parameters to send with the custom request.
   */
  body?: Record<string, any>;
};

/**
 * Properties for the `deleteApiKey` method.
 */
export type DeleteApiKeyProps = {
  /**
   * API key.
   */
  key: string;
};

/**
 * Properties for the `deleteBy` method.
 */
export type DeleteByProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  deleteByParams: DeleteByParams;
};

/**
 * Properties for the `deleteIndex` method.
 */
export type DeleteIndexProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
};

/**
 * Properties for the `deleteObject` method.
 */
export type DeleteObjectProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique record identifier.
   */
  objectID: string;
};

/**
 * Properties for the `deleteRule` method.
 */
export type DeleteRuleProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique identifier of a rule object.
   */
  objectID: string;
  /**
   * Whether changes are applied to replica indices.
   */
  forwardToReplicas?: boolean;
};

/**
 * Properties for the `deleteSource` method.
 */
export type DeleteSourceProps = {
  /**
   * IP address range of the source.
   */
  source: string;
};

/**
 * Properties for the `deleteSynonym` method.
 */
export type DeleteSynonymProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique identifier of a synonym object.
   */
  objectID: string;
  /**
   * Whether changes are applied to replica indices.
   */
  forwardToReplicas?: boolean;
};

/**
 * Properties for the `getApiKey` method.
 */
export type GetApiKeyProps = {
  /**
   * API key.
   */
  key: string;
};

/**
 * Properties for the `getAppTask` method.
 */
export type GetAppTaskProps = {
  /**
   * Unique task identifier.
   */
  taskID: number;
};

/**
 * Properties for the `getLogs` method.
 */
export type GetLogsProps = {
  /**
   * First log entry to retrieve. The most recent entries are listed first.
   */
  offset?: number;
  /**
   * Maximum number of entries to retrieve.
   */
  length?: number;
  /**
   * Index for which to retrieve log entries. By default, log entries are retrieved for all indices.
   */
  indexName?: string;
  /**
   * Type of log entries to retrieve. By default, all log entries are retrieved.
   */
  type?: LogType;
};

/**
 * Properties for the `getObject` method.
 */
export type GetObjectProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique record identifier.
   */
  objectID: string;
  /**
   * Attributes to include with the records in the response. This is useful to reduce the size of the API response. By default, all retrievable attributes are returned.  `objectID` is always retrieved.  Attributes included in `unretrievableAttributes` won\'t be retrieved unless the request is authenticated with the admin API key.
   */
  attributesToRetrieve?: string[];
};

/**
 * Properties for the `getRule` method.
 */
export type GetRuleProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique identifier of a rule object.
   */
  objectID: string;
};

/**
 * Properties for the `getSettings` method.
 */
export type GetSettingsProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
};

/**
 * Properties for the `getSynonym` method.
 */
export type GetSynonymProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique identifier of a synonym object.
   */
  objectID: string;
};

/**
 * Properties for the `getTask` method.
 */
export type GetTaskProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique task identifier.
   */
  taskID: number;
};

/**
 * Properties for the `getUserId` method.
 */
export type GetUserIdProps = {
  /**
   * Unique identifier of the user who makes the search request.
   */
  userID: string;
};

/**
 * Properties for the `hasPendingMappings` method.
 */
export type HasPendingMappingsProps = {
  /**
   * Whether to include the cluster\'s pending mapping state in the response.
   */
  getClusters?: boolean;
};

/**
 * Properties for the `listIndices` method.
 */
export type ListIndicesProps = {
  /**
   * Requested page of the API response. If `null`, the API response is not paginated.
   */
  page?: number;
  /**
   * Number of hits per page.
   */
  hitsPerPage?: number;
};

/**
 * Properties for the `listUserIds` method.
 */
export type ListUserIdsProps = {
  /**
   * Requested page of the API response. If `null`, the API response is not paginated.
   */
  page?: number;
  /**
   * Number of hits per page.
   */
  hitsPerPage?: number;
};

/**
 * Properties for the `operationIndex` method.
 */
export type OperationIndexProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  operationIndexParams: OperationIndexParams;
};

/**
 * Properties for the `partialUpdateObject` method.
 */
export type PartialUpdateObjectProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique record identifier.
   */
  objectID: string;
  /**
   * Attributes with their values.
   */
  attributesToUpdate: Record<string, AttributeToUpdate>;
  /**
   * Whether to create a new record if it doesn\'t exist.
   */
  createIfNotExists?: boolean;
};

/**
 * Properties for the `removeUserId` method.
 */
export type RemoveUserIdProps = {
  /**
   * Unique identifier of the user who makes the search request.
   */
  userID: string;
};

/**
 * Properties for the `replaceSources` method.
 */
export type ReplaceSourcesProps = {
  /**
   * Allowed sources.
   */
  source: Source[];
};

/**
 * Properties for the `restoreApiKey` method.
 */
export type RestoreApiKeyProps = {
  /**
   * API key.
   */
  key: string;
};

/**
 * Properties for the `saveObject` method.
 */
export type SaveObjectProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * The record, a schemaless object with attributes that are useful in the context of search and discovery.
   */
  body: Record<string, any>;
};

/**
 * Properties for the `saveRule` method.
 */
export type SaveRuleProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique identifier of a rule object.
   */
  objectID: string;
  rule: Rule;
  /**
   * Whether changes are applied to replica indices.
   */
  forwardToReplicas?: boolean;
};

/**
 * Properties for the `saveRules` method.
 */
export type SaveRulesProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  rules: Rule[];
  /**
   * Whether changes are applied to replica indices.
   */
  forwardToReplicas?: boolean;
  /**
   * Whether existing rules should be deleted before adding this batch.
   */
  clearExistingRules?: boolean;
};

/**
 * Properties for the `saveSynonym` method.
 */
export type SaveSynonymProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Unique identifier of a synonym object.
   */
  objectID: string;
  synonymHit: SynonymHit;
  /**
   * Whether changes are applied to replica indices.
   */
  forwardToReplicas?: boolean;
};

/**
 * Properties for the `saveSynonyms` method.
 */
export type SaveSynonymsProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  synonymHit: SynonymHit[];
  /**
   * Whether changes are applied to replica indices.
   */
  forwardToReplicas?: boolean;
  /**
   * Whether to replace all synonyms in the index with the ones sent with this request.
   */
  replaceExistingSynonyms?: boolean;
};

/**
 * In v4, the search parameters are wrapped in a `params` parameter.
 *
 * @deprecated The `search` method now accepts flat `searchParams` at the root of the method.
 */
type LegacySearchParams = {
  params?: SearchParamsObject;
};

/**
 * In v4, the search parameters are wrapped in a `params` parameter.
 *
 * @deprecated The `search` method now accepts flat `searchParams` at the root of the method.
 */
type LegacySearchForFacets = LegacySearchParams & SearchForFacetsOptions;

/**
 * In v4, the search parameters are wrapped in a `params` parameter.
 *
 * @deprecated The `search` method now accepts flat `searchParams` at the root of the method.
 */
type LegacySearchForHits = LegacySearchParams & SearchForHitsOptions;

type LegacySearchQuery = LegacySearchForFacets | LegacySearchForHits;

/**
 * Search method signature compatible with the `algoliasearch` v4 package. When using this signature, extra computation will be required to make it match the new signature.
 *
 * @deprecated This signature will be removed from the next major version, we recommend using the `SearchMethodParams` type for performances and future proof reasons.
 */
export type LegacySearchMethodProps = LegacySearchQuery[];

/**
 * Properties for the `searchDictionaryEntries` method.
 */
export type SearchDictionaryEntriesProps = {
  /**
   * Dictionary type in which to search.
   */
  dictionaryName: DictionaryType;
  searchDictionaryEntriesParams: SearchDictionaryEntriesParams;
};

/**
 * Properties for the `searchForFacetValues` method.
 */
export type SearchForFacetValuesProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Facet attribute in which to search for values.  This attribute must be included in the `attributesForFaceting` index setting with the `searchable()` modifier.
   */
  facetName: string;
  searchForFacetValuesRequest?: SearchForFacetValuesRequest;
};

/**
 * Properties for the `searchRules` method.
 */
export type SearchRulesProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  searchRulesParams?: SearchRulesParams;
};

/**
 * Properties for the `searchSingleIndex` method.
 */
export type SearchSingleIndexProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  searchParams?: SearchParams;
};

/**
 * Properties for the `searchSynonyms` method.
 */
export type SearchSynonymsProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  /**
   * Body of the `searchSynonyms` operation.
   */
  searchSynonymsParams?: SearchSynonymsParams;
};

/**
 * Properties for the `setSettings` method.
 */
export type SetSettingsProps = {
  /**
   * Name of the index on which to perform the operation.
   */
  indexName: string;
  indexSettings: IndexSettings;
  /**
   * Whether changes are applied to replica indices.
   */
  forwardToReplicas?: boolean;
};

/**
 * Properties for the `updateApiKey` method.
 */
export type UpdateApiKeyProps = {
  /**
   * API key.
   */
  key: string;
  apiKey: ApiKey;
};

/**
 * The `browseObjects`, `browseRules`, `browseSynonyms` options.
 */
export type BrowseOptions<T> = Partial<
  Pick<CreateIterablePromise<T>, 'validate'>
> &
  Required<Pick<CreateIterablePromise<T>, 'aggregator'>>;

type WaitForOptions = Partial<{
  /**
   * The maximum number of retries. 50 by default.
   */
  maxRetries: number;

  /**
   * The function to decide how long to wait between retries.
   */
  timeout: (retryCount: number) => number;
}>;

export type WaitForAppTaskOptions = WaitForOptions & {
  /**
   * The `taskID` returned by the method response.
   */
  taskID: number;
};

export type WaitForTaskOptions = WaitForAppTaskOptions & {
  /**
   * The `indexName` where the operation was performed.
   */
  indexName: string;
};

export type WaitForApiKeyOptions = WaitForOptions & {
  /**
   * The API Key.
   */
  key: string;
} & (
    | {
        /**
         * The operation that has been performed, used to compute the stop condition.
         */
        operation: Extract<ApiKeyOperation, 'add' | 'delete'>;
        apiKey?: never;
      }
    | {
        /**
         * The operation that has been performed, used to compute the stop condition.
         */
        operation: Extract<ApiKeyOperation, 'update'>;
        /**
         * The updated fields, used to compute the stop condition.
         */
        apiKey: Partial<ApiKey>;
      }
  );

export type GenerateSecuredApiKeyOptions = {
  /**
   * The base API key from which to generate the new secured one.
   */
  parentApiKey: string;

  /**
   * A set of properties defining the restrictions of the secured API key.
   */
  restrictions?: SecuredApiKeyRestrictions;
};

export type GetSecuredApiKeyRemainingValidityOptions = {
  /**
   * The secured API key generated with the `generateSecuredApiKey` method.
   */
  securedApiKey: string;
};

export type ChunkedBatchOptions = ReplaceAllObjectsOptions & {
  /**
   * The `batch` `action` to perform on the given array of `objects`, defaults to `addObject`.
   */
  action?: Action;

  /**
   * Whether or not we should wait until every `batch` tasks has been processed, this operation may slow the total execution time of this method but is more reliable.
   */
  waitForTasks?: boolean;
};

export type ReplaceAllObjectsOptions = {
  /**
   * The `indexName` to replace `objects` in.
   */
  indexName: string;

  /**
   * The array of `objects` to store in the given Algolia `indexName`.
   */
  objects: Array<Record<string, any>>;

  /**
   * The size of the chunk of `objects`. The number of `batch` calls will be equal to `length(objects) / batchSize`. Defaults to 1000.
   */
  batchSize?: number;
};
