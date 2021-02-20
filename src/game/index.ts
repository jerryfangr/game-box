function getGameBy (name: string) {
  switch (name) {
    case 'tower':
      return import('./tower/index')
        .then(({ StartScene, GameScene }) => {
          // new StartScene(),
          return new GameScene();
        }, error => {
          throw new Error('An error occurred while loading the tower game')
        })
    default:
      throw new Error('game ' + name + ' is not exist');
  }
}

export default getGameBy;
