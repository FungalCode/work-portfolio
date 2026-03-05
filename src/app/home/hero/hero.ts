import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button";

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
