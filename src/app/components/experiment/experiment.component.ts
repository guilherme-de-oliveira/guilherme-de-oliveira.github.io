import { Component } from '@angular/core';
import works from '../../../assets/experiments.json';
import contacts from '../../../assets/contacts.json';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html'
})
export class ExperimentComponent {
  workData = works.data;
  githubUrl = contacts.data[0].url;
}
