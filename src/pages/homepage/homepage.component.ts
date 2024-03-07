import { Component } from '@angular/core';
import { SnowComponent } from '../../app/snow/snow.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ SnowComponent ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}