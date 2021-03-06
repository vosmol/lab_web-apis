import { lazy } from 'react';
import { LazyLoader } from './components/lazy-loader';

const BackgroundTask = LazyLoader(lazy(() => import('./apis/background-task')));

export const ROUTES = {
  'Background Tasks': {
    element: <BackgroundTask />,
    path: '/background-task'
  }
};

export const DEFAULT_PATH = ROUTES['Background Tasks'].path;
