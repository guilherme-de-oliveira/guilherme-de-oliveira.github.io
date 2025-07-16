import { Component } from '@angular/core';
import { SkillsDescription } from 'src/app/interfaces/menu-titles';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})

export class DescriptionComponent {
  frontEnd: Array<SkillsDescription> = [
    {name: "JavaScript", icon: "javascript"},
    {name: "TypeScript", icon: "typescript"},
    {name: "Angular", icon: "angular"},
    {name: "React", icon: "react"},
    {name: "Vue.js", icon: "vue"},
    {name: "RxJS", icon: "rxjs"},
    {name: "NgRx (Redux)", icon: "ngrx"},
    {name: "JQuery", icon: "jquery"},
    {name: "Tailwind", icon: "tailwind"},
    {name: "Ant Design", icon: "ant"},
  ];
  backEnd: Array<SkillsDescription> = [
    {name: "Node.js", icon: "nodejs"},
    {name: "PHP (CodeIgneter)", icon: "php"},
    {name: "SQL", icon: "sql"}, 
    {name: "CouchDB/Cloudant", icon: "couchdb"},
    {name: "Shell", icon: "bash"},
  ];
  system: Array<SkillsDescription> = [
    {name: "Linux", icon: "linux"},
    {name: "Docker", icon: "docker"}, 
    {name: "Travis CI", icon: "travis-ci"},
    {name: "Jenkins", icon: "jenkins"},
    {name: "Cloud", icon: "cloud"},
  ];
}
