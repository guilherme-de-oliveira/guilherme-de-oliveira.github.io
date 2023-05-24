import { Component } from '@angular/core';
import works from '../../../assets/experiments.json';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html'
})
export class ExperimentComponent {
  workData = works.data;
}
