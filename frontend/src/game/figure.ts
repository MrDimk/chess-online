import { ColorsEnum } from './colors.enum';
import { FiguresEnum } from './figures.enum';

export class Figure {
    private isAlive: boolean;

    constructor(
        private readonly color: ColorsEnum,
        private readonly type: FiguresEnum,
        private x: number,
        private y: number
    ) {
        this.isAlive = true;
    }

    public move(x: number, y: number) {
        this.x = x;
        this. y = y;
    }

    public kill() {
        this.isAlive = false;
    }

    public getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }
}
