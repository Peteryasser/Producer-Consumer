import { PaintState } from "./PaintState";
import { Circle } from "konva/lib/shapes/Circle";
import {AppComponent} from "../app/app.component";

export class CircleState implements PaintState{
  i:number=1
  seti(n:number){
    this.i=n
  }
  draw() {
    //let stage = new AppComponent().stage
    let id:string="M" + this.i.toString()
    let circle = new Circle({
      x: 100,
      y: 100,
      fill: 'green',
      radius: 60,
      id:id,
    })
    console.log(circle)
    return circle
  }

}
