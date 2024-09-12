import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.highlightNavLink();
  }

  highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      const navLink = document.getElementById(sectionId + '-link');
      
      if (section.offsetTop <= scrollPos + 100 && section.offsetTop + section.clientHeight > scrollPos + 100) {
        navLink!.classList.add('active');
      } else {
        navLink!.classList.remove('active');
      }
    });
  }
}
