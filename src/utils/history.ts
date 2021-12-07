import {
  createBrowserHistory,
  createHashHistory,
  History,
  LocationState,
} from 'history';

export const createHistory = <S = LocationState>(
  basename: string,
  useHashHistory = false
): History<S> => {
  const historyConfig = { basename, queryKey: false };
  return useHashHistory
    ? createHashHistory(historyConfig)
    : createBrowserHistory(historyConfig);
};
