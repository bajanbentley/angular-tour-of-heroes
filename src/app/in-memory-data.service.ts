import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Bussa" },
      { id: 12, name: "Sarah Ann Gill" },
      { id: 13, name: "Samuel Jackman Prescod" },
      { id: 14, name: "Charles Duncan O'Neal" },
      { id: 15, name: "Sir Grantley Herbert Adams" },
      { id: 16, name: "Clement Osbourne Payne" },
      { id: 17, name: "Sir Hugh Worrell Springer" },
      { id: 18, name: "Sir Frank Leslie Walcott" },
      { id: 19, name: "Errol Barrow" },
      { id: 20, name: "Sir Garfield St. Aubrun Sobers" }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}