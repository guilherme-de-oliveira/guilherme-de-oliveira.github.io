import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './components/description/description.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: DescriptionComponent },
  { path: 'work', component: ExperienceComponent },
  { path: 'experiment', component: ExperimentComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
