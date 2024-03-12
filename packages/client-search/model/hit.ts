// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { HighlightResult } from './highlightResult';
import type { RankingInfo } from './rankingInfo';
import type { SnippetResult } from './snippetResult';

/**
 * Search result.  A hit is a record from your index, augmented with special attributes for highlighting, snippeting, and ranking.
 */
export type Hit<T = Record<string, any>> = T & {
  /**
   * Unique record identifier.
   */
  objectID: string;

  /**
   * Surround words that match the query with HTML tags for highlighting.
   */
  _highlightResult?: Record<string, HighlightResult>;

  /**
   * Snippets that show the context around a matching search query.
   */
  _snippetResult?: Record<string, SnippetResult>;

  _rankingInfo?: RankingInfo;

  _distinctSeqID?: number;
};
