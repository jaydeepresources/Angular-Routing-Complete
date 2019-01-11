import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: string[]

  constructor() {
    this.items = ['a', 'b', 'c']
  }

  ngOnInit() {
  }

}
