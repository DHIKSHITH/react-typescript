import { ActionType } from "../action-types";

interface searchRepositoryAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface searchRepositorySuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface searchRepositoryErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | searchRepositoryAction
  | searchRepositorySuccessAction
  | searchRepositoryErrorAction;
