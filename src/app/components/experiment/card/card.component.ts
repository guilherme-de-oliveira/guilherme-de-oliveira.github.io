import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experiment-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ExperimentCardComponent {
  @Input() title: string = '';
  @Input() skills: Array<String> = [];
  @Input() workDescription: string = '';
  @Input() code?: string  = '';
  @Input() image?: string  = '';
}
