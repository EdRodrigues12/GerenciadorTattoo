import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  src: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  tiles: Tile[] = [
    {cols: 1, rows: 3, src: 'https://source.unsplash.com/random/500x500'},
    {cols: 1, rows: 3, src: 'https://source.unsplash.com/random/500x500'},
    {cols: 1, rows: 3, src: 'https://source.unsplash.com/random/500x500'},
    {cols: 1, rows: 3, src: 'https://source.unsplash.com/random/500x500'},
    {cols: 2, rows: 3, src: 'https://source.unsplash.com/random/800x800'},
    {cols: 1, rows: 3, src: 'https://source.unsplash.com/random/500x500'},
    {cols: 1, rows: 3, src: 'https://source.unsplash.com/random/500x500'}
  ];

  ngOnInit() {
  }

}
