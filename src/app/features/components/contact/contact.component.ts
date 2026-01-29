import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FeaturesService } from '../../services/services.service';
import { ToastService } from '../../../shared/toast.service';
import { ApiSuccessResponse } from '../../interfaces/api-success.response';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  feedbackForm: FormGroup = new FormGroup({});

  loading = false;

  constructor(
    private fb: FormBuilder,
    private FeaturesService: FeaturesService,
    public toast: ToastService,
  ) {
    this.initForm();
  }

  initForm() {
    this.feedbackForm = this.fb.group({
      name: new FormControl(null),
      number: new FormControl(null),
      message: new FormControl(null),
    });
  }

  onSubmit() {
    this.loading = true;
    this.FeaturesService.feedback(this.feedbackForm.value).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.message_status) {
          this.initForm();
          this.toast.open(response.message_status);
        }
      },
      error: (err) => {
        console.error('Feedback error:', err);
        this.loading = false;
      },
    });
  }
}
