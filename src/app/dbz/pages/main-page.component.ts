import { Component } from '@angular/core';
import { DbzService } from '../services/service.service';
import { Character } from '../interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {
  }
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }
  onDeleteCharacterById(idElement: string): void {
    this.dbzService.onDeleteCharacterById(idElement);
  }

  handleAddCharacter(character: Character): void {
    this.dbzService.addCharacter(character);

  }
}
