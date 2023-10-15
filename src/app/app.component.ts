import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div #viewChildTest>
      Test
    </div>
  `
})
export class AppComponent {
  @ViewChild('viewChildTest')
  set test(x: ElementRef) {
    console.log(x)
    debugger;
  }
}
