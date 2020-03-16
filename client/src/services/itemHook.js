import { useReducer, useEffect } from 'react';
import { getItemInformations } from '../services/fetchDataSrv';

const DEFAULT_STATE = {
  itemInfos: {},
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
      return { isLoading: false, itemInfos: action.payload };
    case ACTION_TYPES.ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};

export const useItemInfos = itemID => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const { itemInfos, isLoading, error } = state;
  useEffect(() => {
    async function loadItemInfos() {
      try {
        dispatch({ type: ACTION_TYPES.LOADING });

        const { data } = await getItemInformations(itemID);
        dispatch({ type: ACTION_TYPES.RECEIVE, payload: data });
      } catch (error) {
        dispatch({ type: ACTION_TYPES.ERROR, payload: error });
      }
    }
    loadItemInfos();
  }, [itemID]);
  return { itemInfos, error, isLoading };
};
