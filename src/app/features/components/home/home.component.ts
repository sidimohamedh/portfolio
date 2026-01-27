import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FeaturesService } from '../../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  currentLang: string = this.translate.currentLang;

  constructor(
    private translate: TranslateService,
    private featuresService: FeaturesService,
  ) {
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

  generatePdf(lang: string) {
    // Generate the PDF file from lang
    this.featuresService.generatePdf(lang).subscribe((res) => {
      // console.log('res: ', res);
    });
  }
}
