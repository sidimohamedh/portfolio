import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ar', 'fr']);
    translate.setDefaultLang('ar');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|ar/) ? browserLang : 'ar');
    document.documentElement.dir = browserLang === 'ar' ? 'rtl' : 'ltr';
  }
}
