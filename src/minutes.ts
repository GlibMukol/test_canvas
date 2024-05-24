import { AClock } from "./AClock";
import { TAllPOintPOsition, TLeftTopPoint } from "./types";

export default class Minute  extends AClock {
 
    private _text: string ='';
    private _font: string = '30px Arial';
    private _color: string = '#fff';
    private _position: TLeftTopPoint = {x:0, y:0};
    private _idx: number = 0;
    private _dY: number = 0;

    constructor(
        canvas: HTMLCanvasElement,
        text: string, position: TLeftTopPoint,
        idx: number,
    ) {
        super(canvas);
        this._text = text;
        this._idx = idx;
        position && (this._position = position);
        this._text = this._idx < 10 ? `00:0${idx}` : `00:${idx}`;
     

    }

    private alignCenter() {
       this._plot && (this._position = {
          x: (this._plot.width / 2) ,
          y: (this._idx*40 + this._dY)
        })
    }

    public setY(y: number) {
        this._dY = y
    }

    public checkIfSelected (checked: TAllPOintPOsition): string | boolean {
 
        if(
            this._position && 
            checked.ty + 25 > this._position.y &&
            checked.ty < this._position.y
        ) {
            return this._text
        }
        return false;
    }   

    public update() {
        this.draw()
    }

    public draw() {
        this.alignCenter();
        this._ctx && this._position && (
            this._ctx.fillStyle = this._color,
            this._ctx.font = this._font,
            this._ctx.textAlign = "center",
            this._ctx.fillText(this._text, this._position.x, this._position.y)
    );
    }


}

