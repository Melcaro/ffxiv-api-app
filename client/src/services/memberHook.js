import { useReducer, useEffect } from 'react';
import { getMemberInformations } from '../services/fetchDataSrv';

const DEFAULT_STATE = {
  memberInfos: {
    characterInfos: {},
    freeCompanyName: '',
  },
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
      return { isLoading: false, memberInfos: action.payload };
    case ACTION_TYPES.ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};

export const useMemberInfos = (memberID) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const { memberInfos, error, isLoading } = state;

  useEffect(() => {
    async function loadMemberInfos() {
      try {
        dispatch({ type: ACTION_TYPES.LOADING });
        const { data } = await getMemberInformations(memberID);
        dispatch({ type: ACTION_TYPES.RECEIVE, payload: data });
      } catch (error) {
        dispatch({ type: ACTION_TYPES.ERROR, payload: error });
      }
    }
    loadMemberInfos();
  }, [memberID]);
  return { memberInfos, error, isLoading };
};
