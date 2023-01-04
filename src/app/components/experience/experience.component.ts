import { Component } from '@angular/core';
import works from '../../../assets/work.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  ibmInternSkills = ['JavaScript', 'JQuery'];
  ibmDevSkills = ['TypeScript', 'Angular', 'Vue.js'];
  eisDevSkills = ['React'];
  
  workData = works.data
}
