import { Injectable } from '@angular/core';
import { Character } from '../interfaces';
import { v4 as uuidV4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { id: uuidV4(), name: 'Krillin', power: 1000 },
    { id: uuidV4(), name: 'Goku', power: 9000 },
    { id: uuidV4(), name: 'Vegeta', power: 8500 }
  ];

  addCharacter(value: Character): void {
    const newCharacter: Character = { ...value, id: uuidV4() }
    this.characters.push(newCharacter);
  }

  onDeleteCharacterById(idElement: string): void {
    console.log('service', idElement)
    this.characters = this.characters.filter(e => e.id !== idElement);
  }

}
