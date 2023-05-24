import { Component } from '@angular/core';
import works from '../../../assets/experiments.json';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent {
  workData = works.data;
}
