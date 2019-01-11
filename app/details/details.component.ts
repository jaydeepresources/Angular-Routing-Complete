import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  item:string

  constructor(public route:ActivatedRoute) { 
    this.item = route.snapshot.paramMap.get('item')
  }

  ngOnInit() {
  }

}
