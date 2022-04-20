import { PropsWithChildren } from 'react';

/**
 * Force expand a type for debug purpose. Don't work on every type.
 * @deprecated
 */
export type __DEBUG_TYPE__<T> = { [P in keyof T]: T[P] } & {};

/**
 * @deprecated
 */
export type Any = any;

export type SimpleObject = Record<string, Any>;

export type FCWithChildren<P = {}> = React.FC<PropsWithChildren<P>>;
