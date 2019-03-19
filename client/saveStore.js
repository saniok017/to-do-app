const refreshStore = (store, baseUrl) => {
  fetch(`${baseUrl}/user`,
    {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        store,
      }),
    })
    // eslint-disable-next-line consistent-return
    .then((res) => {
      if (res.ok) return res.json();
    });
};

export default refreshStore;
