import { ViewInterface } from './view.interface';

type GameContent = {
    header: string,
}

export class GameView implements ViewInterface{
    constructor(private container: HTMLElement) {}

    private getTemplate(content: GameContent) {
        return (`
        <div class="app-block app-window">
            <div class="log-block">
                <ul class="log-list">
                    <li><p class="log-timestamp">00:12</p><p class="log-action">♙E2→E4</p></li>
                    <li><p class="log-timestamp">01:05</p><p class="log-action">♙D7→D5</p></li>
                </ul>
            </div>
            <div class="game-block game">
                <ul class="chessboard">
                    <!-- li elements will generate -->
                    <li class="chessboard-label row-label">8</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                    <li class="chessboard-label row-label">7</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                    <li class="chessboard-label row-label">6</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                    <li class="chessboard-label row-label">5</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                    <li class="chessboard-label row-label">4</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                    <li class="chessboard-label row-label">3</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                    <li class="chessboard-label row-label">2</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                    <li class="chessboard-label row-label">1</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                    <li class="chessboard-label"></li>
                    <li class="chessboard-label column-label">a</li>
                    <li class="chessboard-label column-label">b</li>
                    <li class="chessboard-label column-label">c</li>
                    <li class="chessboard-label column-label">d</li>
                    <li class="chessboard-label column-label">e</li>
                    <li class="chessboard-label column-label">f</li>
                    <li class="chessboard-label column-label">g</li>
                    <li class="chessboard-label column-label">h</li>
                </ul>
            </div>
        <div class="chat-block chat"></div>
    </div>
    `);
    }

    public draw() {
        this.container.insertAdjacentHTML('beforeend', this.getTemplate({header: 'hello!'}));
    }

    public delete() {
        this.container.innerHTML = '';
    }

    public update() {
        this.delete();
        this.draw();
    }
}
