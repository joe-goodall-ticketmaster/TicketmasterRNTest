export const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const getFans = setDataFans => {
  setDataFans(prev => ({ ...prev, loading: true }));
  fetch('/api/waiting-list', {
    method: 'get',
  })
    .then(res => res.json())
    .then(json => {
      setDataFans(prev => ({ ...prev, loading: false, data: json.fans }));
    });
};
