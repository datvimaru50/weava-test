import {
  createReducer,
  on,
  Action,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";
import { Job } from "../../shared/models/jobs";

import * as jobsActions from "./jobs.actions";

export interface State {
  jobs: Job[];
  loading: boolean;
  formAddStatus: boolean; // status off form input info, show/not show
  confirmDeleteDialog: boolean;
  error: string | null;
}

const initialState: State = {
  jobs: [],
  loading: false,
  formAddStatus: false,
  confirmDeleteDialog: false,
  error: null,
};

const jobsReducer = createReducer<State>(
  initialState,
  on(jobsActions.getJobs, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(jobsActions.getJobsSuccess, (state, { jobs }) => ({
    ...state,
    loading: false,
    error: null,
    jobs,
  })),
  on(jobsActions.getJobsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(jobsActions.showFormAdd, (state) => ({
    ...state,
    formAddStatus: true
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return jobsReducer(state, action);
}

export const selectJobsState = createFeatureSelector<State>("jobsFeature");
export const selectJobs = createSelector(
  selectJobsState,
  (state) => state.jobs
);
export const selectFormAddStatus = createSelector(
  selectJobsState,
  (state) => state.formAddStatus
);
export const selectConfirmDeleteDialog = createSelector(
  selectJobsState,
  (state) => state.confirmDeleteDialog
);
