import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() locations: string[];

  // Used for rendering
  getClasses(ctx, index) {
    let classes = `material-icons ${ctx}`;
    if (ctx === 'dots') {
      if (this.isLast(index)) {
        classes += ' hidden';
      }
    } else {
      classes += this.isLast(index) ? ' small' : ' x-small';
      if (index === 0) {
        classes += ' first';
      }
    }
    return classes;
  }

  moveUp(loc) {
    const index = this.locations.indexOf(loc);
    this.destructuringSwap(this.locations, index, index-1)
  }

  moveDown(loc) {
    const index = this.locations.indexOf(loc);
    this.destructuringSwap(this.locations, index, index+1)
  }

  destructuringSwap(list, idx1, idx2){
    [list[idx1], list[idx2]] = [list[idx2], list[idx1]];
    return list;
  }

  // Used for rendering
  isLast(index) {
    return index === this.locations.length - 1;
  }
}
