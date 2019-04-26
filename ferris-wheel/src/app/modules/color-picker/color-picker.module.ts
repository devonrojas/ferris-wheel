import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { ColorPickerComponent } from './color-picker.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';

@NgModule({
  declarations: [ColorSliderComponent, ColorPickerComponent, ColorPaletteComponent],
  imports: [
    CommonModule
  ]
})
export class ColorPickerModule { }
