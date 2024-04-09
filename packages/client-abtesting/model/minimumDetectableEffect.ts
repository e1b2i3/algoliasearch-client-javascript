// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { Effect } from './effect';

/**
 * Configuration for the smallest difference between test variants you want to detect.
 */
export type MinimumDetectableEffect = {
  /**
   * Smallest difference in an observable metric between variants. For example, to detect a 10% difference between variants, set this value to 0.1.
   */
  size?: number;

  effect?: Effect;
};
