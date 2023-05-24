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
  frontEnd: Array<String> = ['JavaScript', 'TypeScript', 'Angular', 'Vue.js', 'Rxjs', 'JQuery'];
  backEnd: Array<String> = ['Node.js', 'PHP (CodeIgneter)', 'DB2', 'Cloudant/CouchDB', 'SQL'];
  system: Array<String> = ['Linux', 'Shell Script', 'Docker', 'TravisCI', 'Cloud'];
}
