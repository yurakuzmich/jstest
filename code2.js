import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //Update this template
  template: '<p>Total count: {{ countString }}</p>',
  styles: [],
})
export class Summary implements OnInit{
  @Input() count!: number;
  countString: string = '';
  
  constructor() {}

  ngOnInit() {
    this.countString = this.count.toString();
    console.log('countString is ' + this.countString);
  }
}