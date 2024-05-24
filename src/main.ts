import './style.css'
import Clock from './clock';
import Dial from './dial';
import Minute from './minutes';
import Checked from './checked';
import { genereteMinetsRange } from './utils';
import { TAllPOintPOsition } from './types';


window.onload = () => {
  let dY: number = 0;
  const range = genereteMinetsRange(60);
  const canvasElement = document.getElementById("clock") as HTMLCanvasElement;
  const showSeleced  = document.getElementById("selected");
  const clock = new Clock(canvasElement, '#000');
  const dial = new Dial(canvasElement, 1000, 200);
  const minutes: Minute[] = range.map((i) => new Minute(canvasElement, '00', {x: 200, y: dY}, i));
  const checked: Checked = new Checked(canvasElement, 200, 50);

  const setSelected = (min: Minute) => {
    const selectedMin: TAllPOintPOsition = checked.getAllPositions();
    const value: string | boolean =  min.checkIfSelected(selectedMin)
    if(typeof value === 'string') { 
      showSeleced!.innerHTML = `${value}`;
    }
  }

  (() => {
    clock.draw();
    checked.draw();
    dial.draw();
    minutes.forEach(i => (i.draw()));
  })();

  const refreshMinutes = () => {
    minutes.forEach(i => (i.update(), setSelected(i)));
  }

  const update = (y: number) => {
    dY += y;
    minutes.forEach(i => i.setY(dY));
 
    clock.clearClock();
    checked.draw();

    clock.draw();
    dial.move(y);
    refreshMinutes();
  };

  document.addEventListener("keydown", (e) => {
    e.stopImmediatePropagation();
    e.key === "ArrowDown" && update(-5);
    e.key === "ArrowUp" && update(5)
  });
}



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
  <div>
    <canvas width="400" height="800" id="clock"></canvas>
  </div>
   <div id="selected">10:00</div>
  </div>
`

