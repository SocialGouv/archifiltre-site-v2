import { useEffect, useLayoutEffect } from 'react';
import { HAS_WINDOW } from '../utils';

export const useIsomorphicLayoutEffect = HAS_WINDOW
    ? useLayoutEffect
    : useEffect;
