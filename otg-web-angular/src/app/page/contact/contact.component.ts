import { ContactService } from './../../services/contact.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../models/contact-form';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly contactService = inject(ContactService);

  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {
    fullName: '',
    email: '',
    phone: '',
    comment: '',
  };

  submitted = false;
  loading = false;

  submitForm(model: ContactForm) {
    this.submitted = true;
    this.loading = true;

    this.contactService
      .submitContactForm(model)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.contactService.canDeactivate.set(true);
        this.loading = false;
      });
  }

  clearForm() {
    this.contactService.canDeactivate.set(true);
    this.submitted = false;
    this.model = {
      fullName: '',
      email: '',
      phone: '',
      comment: '',
    };
  }

  ngOnInit() {
    this.contactService.canDeactivate.set(false);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
