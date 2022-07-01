import { LoadingOverlay } from '@mantine/core';
import {
  ComponentProps,
  ComponentType,
  LazyExoticComponent,
  Suspense
} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LazyLoader<T extends LazyExoticComponent<any>>(
  Component: T
): ComponentType<ComponentProps<typeof Component>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LazyComponent = (...props: any) => {
    return (
      <Suspense fallback={<LoadingOverlay visible />}>
        <Component {...props} />
      </Suspense>
    );
  };

  LazyComponent.displayName = 'LazyComponent';

  return LazyComponent;
}
