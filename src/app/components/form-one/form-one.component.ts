import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss'],
})
export class FormOneComponent implements OnInit {
  @Output() nextStepEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.initializeForm();
  }

  initializeForm(): FormGroup {
    return this.formBuilder.group({
      name: [''],
    });
  }

  get name() {
    return this.form.get('name');
  }

  onClickNext() {
    this.nextStepEventEmitter.emit(this.form.value);
  }
}
