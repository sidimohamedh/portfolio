import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';

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
  imports: [CommonModule],
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
