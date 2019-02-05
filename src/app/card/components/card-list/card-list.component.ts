import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() items: any[];
  @Input() listName: string;
  @Input() navigateTo: any;

  constructor() { }

  ngOnInit() {
  }

}
