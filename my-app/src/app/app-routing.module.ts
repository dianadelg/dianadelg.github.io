import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {path: 'experience', component: ExperienceComponent},
    {path: 'home', component: HomeComponent},
    // {path: 'about', component: ExperienceComponent},
    { path: '', component: HomeComponent, pathMatch: 'full' }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }