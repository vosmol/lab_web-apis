import { lazy } from 'react';
import { LazyLoader } from './components/lazy-loader';

const BackgroundTask = LazyLoader(lazy(() => import('./apis/background-task')));

export const ROUTES = {
  'Background Task': {
    element: <BackgroundTask />,
    path: '/background-task'
  }
};

export const DEFAULT_PATH = ROUTES['Background Task'].path;
