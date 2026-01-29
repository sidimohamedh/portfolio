import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FeaturesService } from '../../services/services.service';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  currentLang: string = this.translate.currentLang;

  loading = false;

  constructor(
    private translate: TranslateService,
    private featuresService: FeaturesService,
    public toast: ToastService,
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
    this.loading = true;
    this.featuresService.generatePdf(lang).subscribe({
      next: (response) => {
        const blob = response as Blob;
        const url = window.URL.createObjectURL(blob);

        const fileName = `${lang === 'ar' ? 'سيرة-ذاتية' : `CV-${lang}`}.pdf`;
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        this.loading = false;
        this.toast.open(
          `${lang === 'ar' ? 'تم تحميل السيرة الذاتية بنجاح' : lang === 'fr' ? 'CV téléchargé avec succès' : 'CV downloaded successfully'}`,
        );

        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('PDF error:', err);
      },
    });
  }
}
