import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})

// export interface Item {
//   name: string;
// }
export class DescriptionComponent {
  frontEnd: Array<String> = ['JavaScript', 'TypeScript', 'JQuery', 'Angular', 'Vue.js', 'Rxjs', 'HTML', 'CSS/SCSS/SASS', 'Jest'];
  backEnd: Array<String> = ['Node.js', 'PHP', 'CodeIgneter', 'Java', 'DB2', 'CLoudant', 'SQL'];
  system: Array<String> = ['Linux', 'AIX', 'Shell Script', 'Docker', 'TravisCI', 'Cloud'];
}
