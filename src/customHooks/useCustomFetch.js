/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function useCustomFetch(customFetch, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    customFetch(setLoading, setData, setError);
  }, dependencies);

  return { loading, data, error };
}

export default useCustomFetch;
