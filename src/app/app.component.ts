import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Esemsar';

  deferredPrompt: any;

  constructor(
    private renderer: Renderer2,
    public translate: TranslateService
    ) {
      // Register translation languages
      translate.addLangs(['ar', 'fr'])
      // Set default language
      translate.setDefaultLang('ar');
      document.dir = "rtl";
    }


    ngAfterViewInit(): void {
      window.addEventListener('beforeinstallprompt', (e) => {
        this.deferredPrompt = e;
      });

      let loader = this.renderer.selectRootElement('#preloader');
      timer(2000)
      .toPromise()
      .then(() => {
        this.renderer.setStyle(loader, 'display', 'none');
      });
    }

    //Switch language
    translateLanguageTo(lang: string) {
      this.translate.use(lang);
      if(lang === "fr") {
        document.dir = "ltr";
      }
      if(lang === "ar") {
        document.dir = "rtl";
      }
    }

    installPwa() {
      async () => {
        if (this.deferredPrompt !== null) {
          this.deferredPrompt.prompt();
          const { outcome } = await this.deferredPrompt.userChoice;
          if (outcome === 'accepted') {
              this.deferredPrompt = null;
          }
        }
      }
    }
  }
