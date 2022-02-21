import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Esemsar';
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    let loader = this.renderer.selectRootElement('#preloader');
    timer(2000)
      .toPromise()
      .then(() => {
        this.renderer.setStyle(loader, 'display', 'none');
      });


  }
}
