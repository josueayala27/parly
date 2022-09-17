import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

const useAxios = ({ method, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios[method](url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [method, url]);

  return { data, loading, error };
};

export default useAxios;
