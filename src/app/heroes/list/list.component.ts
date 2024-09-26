import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Capitan America'];
  public deleteHero: string | undefined = '';
  removeLastHero ():void {
    this.deleteHero = this.heroesNames.pop();
  };

}
