import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss'],
})
export class FormThreeComponent implements OnInit {
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
    this.nextStepEventEmitter.emit('');
  }

  onClickBack() {
    this.backStepEventEmitter.emit('');
  }
}
