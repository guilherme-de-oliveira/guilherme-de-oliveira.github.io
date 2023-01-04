import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // ibmInternSkills = 
  // ibmDevSkills = ['TypeScript', 'Angular', 'Vue.js'];
  // eisDevSkills = ['React'];

  @Input() title: string = ''
  @Input() skills: Array<String> = []
  @Input() workDescription: string = ''
  @Input() workItems: Array<String> = []
}
