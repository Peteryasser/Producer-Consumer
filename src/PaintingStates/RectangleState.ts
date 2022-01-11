import Konva from "konva";
import { PaintState } from "./PaintState";
import {AppComponent} from "../app/app.component";

export class RectangleState implements PaintState {
    i = 0
    seti(n:number){
      this.i=n
    }
    draw() {
      let id:string="Q" + this.i.toString()
        let rec = new Konva.Rect({
            x: 100,
            y: 100,
            fill: 'blue',
            width: 100,
            height: 100,
            id:id,
        })
      console.log(rec)
      return rec
    }

}
