import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { wait, getFans } from './functions';

const useListRegistered = () => {
  const [dataFans, setDataFans] = useState({
    loading: false,
    error: '',
    data: [],
  });
  const [refreshing, setRefreshing] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getFans(setDataFans);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshing]),
  );
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return { ...dataFans, refreshing, onRefresh };
};
export default useListRegistered;
