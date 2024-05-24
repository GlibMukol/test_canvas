import { TCanvas } from "./types";

export abstract class AClock {
    protected _ctx: TCanvas;
    protected _plot: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this._plot = canvas;
        this._ctx = canvas.getContext("2d");
    }

    abstract draw (): void;

}