import * as H from 'history';
import { IApiClient, LogError, TrackMethod, OnAction } from '@shore/types';
import { ISettings } from '../api/types';

export interface IAppProps {
  apiClient: IApiClient;
  history: H.History;
  logError: LogError;
  trackMethod: TrackMethod;
  onAction: OnAction;
  settings: ISettings;
}
