import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  currentLang: string = this.translate.currentLang;
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.currentLang = lang;
  }
}
