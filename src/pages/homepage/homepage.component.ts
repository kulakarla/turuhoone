import { Component } from '@angular/core';
import { SnowComponent } from '../../utilcomp/snow/snow.component';
import { FallingsandComponent } from '../../components/fallingsand/fallingsand.component';
import { BitretardComponent } from '../../components/bitretard/bitretard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ SnowComponent, FallingsandComponent, BitretardComponent, CommonModule ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  selectedComponent: string = '';

  showComponent(component: string): void{
    this.selectedComponent = component;
  }

}
