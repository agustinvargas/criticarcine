import React, { createContext, useState } from 'react';
export const DataFromAPIsCtx = createContext(null);

const DataFromAPIs = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <DataFromAPIsCtx.Provider value={{ data, setData, loading, setLoading }}>
      {children}
    </DataFromAPIsCtx.Provider>
  );
};

export default DataFromAPIs;
