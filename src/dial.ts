import { AClock } from "./AClock";
import { TLeftTopPoint } from "./types";

class Dial extends AClock {
    private _heightCanvas: number;
    private _widthCanvas: number;
    private _height: number;
    private _width: number;
    private _position: TLeftTopPoint;
    

    constructor(canvas: HTMLCanvasElement, height: number = 0, width: number = 0) {
        super(canvas);
        this._heightCanvas = canvas.height;
        this._widthCanvas = canvas.width;
        this._height = height;
        this._width = width;
        this._position = 0;
    }

    private _calculaeLeftTopPoint(height: number = 0) {
       this._heightCanvas && 
            this._widthCanvas && 
            ( this._position = {
                x: (this._widthCanvas / 2) - (this._width / 2),
                y: height
            });
    }

    private _createGradient () {
        const gradient: CanvasGradient | null | 0 = this._ctx &&
        this._position &&
            this._ctx.createLinearGradient(
                this._position.x,
                this._position.y,
                this._width,
                this._height,
            );
        gradient && 
        (
            gradient.addColorStop(0, '#000'),
            gradient.addColorStop(0.5, '#696969'),
            gradient.addColorStop(1, '#000')
        )

        return gradient;
        
    }

    public draw() {
        let x = 0, y = 0;
        this._position || this._calculaeLeftTopPoint();
        this._position && ({x, y} = this._position);
        this._ctx && (
             this._ctx.fillStyle = this._createGradient() || '#000',
             this._ctx.fillRect(x, y, this._width, this._height)
        );
    };

    public move(y: number) {
        this._calculaeLeftTopPoint(y);
        this.draw();
    }
}

export default Dial;