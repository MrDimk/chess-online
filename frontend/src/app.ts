import { GameView } from './view/game-view';

function init() {
    const appContainer = document.getElementById('chess-app');
    const webView = new GameView(appContainer);
    webView.draw();
    // const game = new Game(webView);
    // game.init();
}

init();
