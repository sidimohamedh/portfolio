import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ServicesComponent,
    SkillsComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  exports: [
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ServicesComponent,
    SkillsComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
})
export class FeaturesModule {}
