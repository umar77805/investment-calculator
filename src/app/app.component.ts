import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { ResultsComponent } from "./results/results.component";

import calculateInvestmentResults from '../investment-results'
import { annualData, investmentDetails } from '../types';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, CalculatorComponent, ResultsComponent]
})
export class AppComponent {
  calculatedResults: annualData[] = []

    onInvestmentDetails({initialInvestment, annualInvestment, expectedReturn, duration}: investmentDetails) {
        this.calculatedResults = calculateInvestmentResults(initialInvestment, annualInvestment, duration, expectedReturn);
    }
}
