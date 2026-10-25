// types/react-query.d.ts or just react-query.d.ts at the root of your types folder

import '@tanstack/react-query';
import type { AxiosError } from 'axios';

declare module '@tanstack/react-query' {
  interface Register {
    // Set default error type globally for useQuery and useMutation
    defaultError: AxiosError;

    // Allow flexible query keys like ['vendor', id], ['product', 'category'], etc.
    queryKey: [string, ...ReadonlyArray<unknown>];

    // Same flexibility for mutations
    mutationKey: [string, ...ReadonlyArray<unknown>];
  }
}
