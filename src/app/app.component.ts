import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, TableComponent, ChartComponent],
  template: `
    <div class="container">
    <app-chart></app-chart>

      <app-card></app-card>
      <app-table></app-table>
</div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A-quiz';
}
