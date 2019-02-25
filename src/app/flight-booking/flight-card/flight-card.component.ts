import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Flight } from '../../entities/flight';

const itemFieldName = 'item';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug('ctor', this.selected, this.item);
  }

  ngOnInit() {
    console.debug('ngOnInit', this.selected, this.item);
    // this.selectedChange.next(true);
  }

  ngOnDestroy(): void {
    console.debug('ngOnDestroy', this.selected, this.item);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.selected, this.item);
    if (changes['item']) {
      console.debug('\t item changed');
    }
    if (changes['selected']) {
      console.debug('\t selected changed');
    }
  }

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

}
