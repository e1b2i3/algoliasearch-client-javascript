// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

export type ClickPosition = {
  /**
   * Range of positions with the following pattern: - For positions 1 to 10, the number of click events are shown for each position - For positions 11 to 20, all click events are grouped - For positions 21 and up, all click events are grouped.
   */
  position: number[];

  /**
   * Number of click events.
   */
  clickCount: number;
};
