import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [],
})
export class DinamicsComponent {
  newGame: string = '';

  person: Person = {
    name: 'Rubén',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'DeathStranding' },
    ],
  };

  save() {
    console.log('form posted');
  }

  removeFavorite(index: number) {
    this.person.favorites.splice(index, 1);
  }

  add() {
    const id = this.person.favorites.reduce((a, b) => (a > b ? a : b)).id + 1;
    const newFavorite: Favorite = {
      id,
      name: this.newGame,
    };
    this.person.favorites.push({ ...newFavorite });
    this.newGame = '';
  }
}
