import { AClock } from "./AClock";
import { TCanvas } from "./types";

class Clock extends AClock {


    private _bg: string;


    constructor(canvas: HTMLCanvasElement, bg: string = "#fff") {
        super(canvas);
        this._bg = bg;
    }

    private setBackground() {
        this._ctx && (
            this._ctx.globalCompositeOperation = "lighter",
            this._ctx.fillStyle = this._bg,
            this._ctx.fillRect(0, 0, this._plot.width, this._plot.height)
        );
    }


    public draw(): void {
        this.setBackground()
    }


    public clearClock() {
        this._ctx && this._ctx.clearRect(0, 0, this._plot.width, this._plot.height);
    }


    get ctx(): TCanvas {
        return this._ctx;
    }
}


export default Clock;