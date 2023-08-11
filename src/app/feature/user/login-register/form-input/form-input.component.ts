import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit{
  @Input() name?: string;
  @Input() type?: string;
  @Input() placeholder?: string;
  @Input() validator?: ValidationErrors | null;
  
  ngOnInit(): void {
    
  }
}
