import { Board } from './board';
import { Figure } from './figure';
import { Player } from './player';
import { LoggerInterface } from './logger-interface';
import { Timer } from './timer';

export enum GameStatus {
    Ready = 'ready',
    White = 'white',
    Black = 'black',
    Paused = 'paused'
}

export class Game {
    private id: number;
    private board: Board;
    private whitePlayer: Player;
    private blackPlayer: Player;
    private logger: LoggerInterface;
    private timer: Timer;
    private status: GameStatus;
    private figures: Figure[];
    private isCheck: boolean;
    private isMAte: boolean;

    constructor() {
        this.id = new Date().getMilliseconds();
    }
}
