import { Component } from '@angular/core';
import works from '../../../assets/work.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  workData = works.data;
}
