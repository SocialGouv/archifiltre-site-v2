/**
 * Force expand a type for debug purpose. Don't work on every type.
 * @deprecated
 */
// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/ban-types
export type __DEBUG_TYPE__<T> = { [P in keyof T]: T[P] } & {};

/**
 * @deprecated
 */
export type Any = any;

export type SimpleObject = Record<string, Any>;
