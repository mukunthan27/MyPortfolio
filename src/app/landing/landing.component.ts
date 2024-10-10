import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  copy(event: string){
    if(event == 'mail'){
      navigator.clipboard.writeText("mukunthan.m001@gmail.com")
    }
    else{
      navigator.clipboard.writeText("+91 9498859450")
    }

    alert('copied!!!')
    
  }
}
