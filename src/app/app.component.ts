import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isLoading = false;

  public startLoading(){
    setTimeout(() => {
      console.log('startLoading');
      this.isLoading = true;
    });
  }

  public stopLoading(){
    setTimeout(() => {
      console.log('stopLoading');
      this.isLoading = false;
    }, 2);
  }
}
