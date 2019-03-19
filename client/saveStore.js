const refreshStore = (store) => {
  const port = process.env.PORT || 3000;
  fetch(`http://localhost:${port}/user`,
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
