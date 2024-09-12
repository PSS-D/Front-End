import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  ngOnInit() {
    // Initialize the Bootstrap carousel
    const myCarousel = document.querySelector('#carouselExampleIndicators');
    if (myCarousel) { 
      new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        ride: 'carousel'
      });
    }
  }

  ngAfterViewInit(): void {
    // Trigger the animation for the centered text
    const animatedText = document.getElementById('animatedText');
    if (animatedText) {
      animatedText.style.opacity = '1';  // Start the fade-in and slide-up animation
    }
  }
}




// import { Component, OnInit } from '@angular/core';

// declare var bootstrap: any;

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
//   ngOnInit() {
//     const myCarousel = document.querySelector('#carouselExampleIndicators');
//     const carousel = new bootstrap.Carousel(myCarousel, {
//       interval: 3000,
//       ride: 'carousel'
//     });
//   }

// }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   ngOnInit() {
//     const myCarousel = document.querySelector('#carouselExampleIndicators');
//     const carousel = new bootstrap.Carousel(myCarousel, {
//       interval: 3000,
//       ride: 'carousel'
//     });
//   }
// }
