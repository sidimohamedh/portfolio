import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  message = '';
  show = false;

  open(msg: string, duration = 3000) {
    this.message = msg;
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, duration);
  }
}
