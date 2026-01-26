import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from '../features/components/home/home.component';
import { FeaturesModule } from '../features/features.module';

const components = [HomeComponent];
@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, FeaturesModule],
  exports: [MainLayoutComponent],
})
export class LayoutsModule {}
