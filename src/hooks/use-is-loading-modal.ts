import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoadingModal } from '../slices/loading-modal-slice';

/**
 * @desc Hook used for showing the LoadingModal in the pages whose layout has the LoadingModal component
 * @param {isLoading, description}
 *@return {Component JSX}
 */
export const useIsLoadingModal = (
  isLoading: boolean,
  description: string
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingModal({ isLoading, description }));
  }, [isLoading]);
};
