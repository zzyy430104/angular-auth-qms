import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-internal-exteranl-issues',
  templateUrl: './internal-exteranl-issues.component.html',
  styleUrl: './internal-exteranl-issues.component.scss',
})
export class InternalExteranlIssuesComponent {
  constructor(private formBuilder: FormBuilder) {}

  issuesInputForm = this.formBuilder.group({
    issueSeriaNumber: [''],
    description: [''],
    relevant: [''],
    effectivness: [''],
    isInternal: [''],
    areaFrom: [''],
    createdDate: [''],
    createdByPerson: [''],
    reviewIntervalonMonth: [''],
    approvedBy: [''],
    isClosed: [''],
    closedDate: [''],
  });
  submitIssueForm() {
    console.log(this.issuesInputForm.value);
    console.log(this.issuesInputForm.value.areaFrom);
  }
}
