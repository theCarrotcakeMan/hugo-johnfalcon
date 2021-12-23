module.exports = api => {
  const presets = [
    [
      '@babel/preset-env',
      {
        include: ['transform-arrow-functions'],
      },
    ],
  ];

  api.cache(false);
  return {
    presets,
  };
};
