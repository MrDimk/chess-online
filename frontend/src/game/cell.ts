import { ColorsEnum } from './colors.enum';
import { Figure } from './figure';


export class Cell {
    private figure: Figure | null;

    constructor(
        private readonly x: number,
        private readonly y: number,
        private readonly color: ColorsEnum
    ) {}

    public getCoordinate() {
        return {
            x: this. x,
            y: this.y
        };
    }

    public getFigure() {
        return this.figure;
    }

    public getColor() {
        return this.color;
    }

    public setFigure(figure: Figure | null) {
        this.figure = figure;
    }
}
