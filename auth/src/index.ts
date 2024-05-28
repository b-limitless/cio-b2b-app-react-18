import('./bootstrap').then(
  ({ mount }) => {
    const localRoot = document.getElementById('auth');
    console.log('app in isolation model')
    mount({
      mountPoint: localRoot!,
      routingStrategy: 'browser',
      setAuth: () => {},
      navigateFromCell: () => {}
    });
  }
);

export {};
