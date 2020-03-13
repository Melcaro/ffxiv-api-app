import { useReducer, useEffect } from 'react';
import { getFreeCompanyInformations } from './fetchDataSrv';

const DEFAULT_STATE = {
  freeCompInfos: { FreeCompany: {}, FreeCompanyMembers: [] },
  isLoading: false,
  error: null,
};

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

export const useFreeCompanyInfos = (FCName, serverName) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const { freeCompInfos, error, isLoading } = state;

  useEffect(() => {
    async function loadFCInfos() {
      try {
        dispatch({ type: ACTION_TYPES.LOADING });

        const { data } = await getFreeCompanyInformations(FCName, serverName);

        dispatch({ type: ACTION_TYPES.RECEIVE, payload: data });
      } catch (error) {
        dispatch({ type: ACTION_TYPES.ERROR, payload: error });
      }
    }
    loadFCInfos();
  }, [FCName, serverName]);

  return { freeCompInfos, error, isLoading };
};
