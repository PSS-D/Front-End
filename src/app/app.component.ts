// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'pssproject';
// }

// import { Component, HostListener } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   currentSection: string = 'home';

//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll() {
//     const sections = document.querySelectorAll('section');
//     const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

//     sections.forEach(section => {
//       const rect = section.getBoundingClientRect();
//       if (rect.top <= 80 && rect.bottom > 80) {
//         this.currentSection = section.id;
//       }
//     });
//   }
// }

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentSection: string = '';
  

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
      const top = section.offsetTop - 70; // Adjust offset as needed
      const bottom = top + section.clientHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= top && scrollPos <= bottom && sectionId) {
        this.currentSection = sectionId;
      }
    });
  }
}
