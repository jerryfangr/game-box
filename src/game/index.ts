function getGameBy (name: string) {
  switch (name) {
    case 'tower':
      return resoveGame(import('./tower/index'));
    case 'flappyBird':
      return resoveGame(import('./flappy-bird/index'));
    default:
      throw new Error('game ' + name + ' is not exist');
  }
}

function resoveGame(ImportPromise: Promise<any>) {
  return ImportPromise.then(({ default: GameScene }) => {
    return new GameScene();
  }, error => {
    throw new Error('An error occurred while loading the tower game')
  });
}

export default getGameBy;
