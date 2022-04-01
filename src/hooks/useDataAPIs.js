import { useContext } from 'react';
import { DataFromAPIsCtx } from '../contexts/DataFromAPIs';

const useDataAPIs = () => {
  return useContext(DataFromAPIsCtx);
};

export default useDataAPIs;
