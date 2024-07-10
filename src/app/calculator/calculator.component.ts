import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentDetails } from '../../types';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  @Output() private investmentDetails = new EventEmitter<investmentDetails>();

  initialInvestment: string = '';
  annualInvestment: string = '';
  expectedReturn: string = '';
  duration: string = '';

  onFormSubmit() {
    this.investmentDetails.emit({
      initialInvestment: parseInt(this.initialInvestment),
      annualInvestment: parseInt(this.annualInvestment),
      expectedReturn: parseInt(this.expectedReturn),
      duration: parseInt(this.duration)
    });
    this.initialInvestment = '';
    this.annualInvestment = '';
    this.expectedReturn = '';
    this.duration = ''
  }
}
