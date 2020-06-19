import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit {
  selectedWheel:string 
  lastSpin:number
  isRed:boolean
  imgToken:string
  

  constructor() { 
    this.selectedWheel = "assets/img/wheel0.jpg";
    this.imgToken="assets/img/token.png"
    this.lastSpin = 0;
  }

  ngOnInit(): void {
  }

spinWheel(){
  console.log("Wheel Spinning!");
  //get rnd
  let rnd=Math.floor(Math.random()*37);
  console.log(rnd);
  //display winning number
  if (rnd==0){
    document.getElementById("test").style.color='green';
  }else {
    if (rnd%2===0){
      document.getElementById("test").style.color='red';
      } else {
        document.getElementById("test").style.color='black';
      }
  }
  this.lastSpin=rnd;

  

  //display marker on table

  //calculate winnings

  //update user winnings


}


}
