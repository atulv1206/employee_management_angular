import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  stepList:any []=[
    { stepName:'Basic Details', isCompleted:false},
    { stepName:'Skills', isCompleted:false},
    { stepName:'Experiance', isCompleted:false}
    ]
    activeStep: any=this.stepList[1];
    setActiveStep(activeStep:any){
      this.activeStep=activeStep;
    }
}
