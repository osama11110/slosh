import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  fader
],
})
export class AppComponent {
  title = 'sloshapp';
  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  options = {
    fpsLimit: 60,
    particles: {
      color: {
        value: "#fff"
      },
      links: {
        enable: true,
        color: "#fff"
      },
      move: {
        enable: true
      }
    }
  };
}
