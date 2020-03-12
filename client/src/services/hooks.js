import { userReducer, useState, useCallback } from 'react';
import { getFreeCompanyInformations } from '../services/fetchDataSrv';

const DEFAULT_STATE = { freeCompInfos: [], isLoading: false, error: null };

const ACTION_TYPES = {
  LOADING: 'LOADING',
  RECEIVE: 'RECEIVE',
  ERROR: 'ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING:
      return { ...DEFAULT_STATE, isLoading: true };
    case ACTION_TYPES.RECEIVE:
      return { isLoading: false, freeCompInfos: action.payload };
    case ACTION_TYPES.ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};

export const useFreeCompanyInfos = FCName => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const { freeCompInfos, error, isLoading } = state;

  const loadFCInfos = useCallback(async () => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING });

      const {
        data: { results },
      } = await getFreeCompanyInformations(FCName);

      dispatch({ type: ACTION_TYPES.RECEIVE, payload: results });
    } catch (error) {
      dispatch({ type: ACTION_TYPES.ERROR, payload: error });
    }
  }, []);
  return { freeCompInfos, error, isLoading, loadFCInfos };
};
