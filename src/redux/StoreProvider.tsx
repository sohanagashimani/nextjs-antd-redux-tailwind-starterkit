'use client';

import { Provider } from 'react-redux';

import { setupStore } from './store';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = setupStore();
  return <Provider store={store}>{children}</Provider>;
};
