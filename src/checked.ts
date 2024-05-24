import { AClock } from "./AClock"
import { TAllPOintPOsition, TLeftTopPoint } from "./types";

export default class Checked extends AClock {
    private _position:  TLeftTopPoint = {x: 0, y: 0};
    private _width: number = 0;
    private _height: number = 0;
    
    constructor(canvas: HTMLCanvasElement, width: number, height: number) {
        super(canvas);
        this._width = width;
        this._height = height;
    }

    private alignCenter() {
       this._position = {
         x: (this._plot.width / 2) - (this._width / 2),
         y: (this._plot.height / 2) -(this._height / 2)
       } 
    }

    public getAllPositions():TAllPOintPOsition {
        if(!this._position) {
          return  { 
            tx:0,
            ty:0,
            bx:0,
            by:0
            }
        }
        return {
            tx: this._position.x,
            ty: this._position.y,
            bx: this._height,
            by: this._width
        }
    }

    public draw() {
       this.alignCenter();
       this._position &&
       this._ctx && (
            this._ctx.fillStyle = "#696969",
            this._ctx.fillRect(
                this._position.x,
                this._position.y,
                this._width,
                this._height
            )
        )
    }
}