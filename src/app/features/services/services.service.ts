import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {
  ApiSuccessResponse,
  Message,
} from '../interfaces/api-success.response';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  generatePdf(lang: string) {
    return this.http.post(
      `${this.baseUrl}/generate-pdf`,
      { lang },
      {
        responseType: 'blob',
      },
    );
  }

  feedback(data: any) {
    return this.http.post<ApiSuccessResponse<Message>>(
      `${this.baseUrl}/feedback`,
      data,
    );
  }
}
