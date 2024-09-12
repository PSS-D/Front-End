// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.scss']
// })
// export class AboutComponent {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  currentHoveredSection: string | null = null;
  

  onHover(section: string): void {
    this.currentHoveredSection = section;
  }

  onLeave(): void {
    this.currentHoveredSection = null;
  }

  isHovered(section: string): boolean {
    return this.currentHoveredSection === section;
  }
}

