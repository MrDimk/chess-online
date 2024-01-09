import { Board } from './board';
import { Figure } from './figure';


export class Game {
    private board: Board;
    private whitePlayer: Player;
    private blackPlayer: Player;
    private logger: Logger;
    private timer: Timer;
    private status: Status;
    private figures: Figure[];

}
