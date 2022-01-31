import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss'],
})
export class FormTwoComponent implements OnInit {
  @Output() nextStepEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Output() backStepEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.initializeForm();
  }

  initializeForm(): FormGroup {
    return this.formBuilder.group({
      email: [''],
    });
  }

  get email() {
    return this.form.get('email');
  }

  onClickNext() {
    this.nextStepEventEmitter.emit(this.form.value);
  }

  onClickBack() {
    this.backStepEventEmitter.emit('');
  }
}
