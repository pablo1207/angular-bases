import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces';
import { v4 as uuidV4 } from 'uuid'

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListDbzComponent {

  @Input()
  public characterList: Character[] = [
    { id: uuidV4(), name: 'Trunk', power: 4000 }
  ]
  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  handleDelete(idElement: string): void {
    console.log(idElement);
    // Emitir el indice de los cambios
    this.onDeleteCharacterById.emit(idElement);
  }
}
