import('./bootstrap').then(
  ({ mount }) => {
    const localRoot = document.getElementById('dashboard');

    mount({
      mountPoint: localRoot!,
      routingStrategy: 'browser',
      navigateToSignInPage: () => {}
    });
  }
);

export {};
