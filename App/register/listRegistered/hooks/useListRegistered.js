import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const useRegisterEvent = () => {
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    useCallback(() => {
      fetch('/api/waiting-list', {
        method: 'get',
      })
        .then(res => res.json())
        .then(json => {
          console.log('json>>>>>>', json);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return { loading };
};
export default useRegisterEvent;
