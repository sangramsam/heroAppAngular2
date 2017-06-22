import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public font_size="12px";
  public background_color="grey ";
  randoncolor=this.getRandomColor();
  public getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    setColor() {
    this.randoncolor=this.getRandomColor();
    }
  }

