import { Component, Input } from '@angular/core';
import { SkillsDescription } from 'src/app/interfaces/menu-titles';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() skills: Array<SkillsDescription> = [];
  @Input() workDescription: string = '';
  @Input() workItems: Array<String> = [];
}
