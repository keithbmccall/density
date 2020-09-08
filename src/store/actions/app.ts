import { Action } from "../types";

export const BEGIN_REFRESHING = "BEGIN_REFRESHING";
export const END_REFRESHING = "END_REFRESHING";

export const beginRefreshing = (): Action => ({ type: BEGIN_REFRESHING });

export const endRefreshing = (): Action => ({ type: END_REFRESHING });
