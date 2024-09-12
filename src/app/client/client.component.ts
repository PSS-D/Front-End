import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  

  images = [
    {
      src: 'assets/image/Sri Lanka State Plantations Corporation.jpg',
      alt: 'Logo 1',
      companyName: 'Sri Lanka State Plantations Corporation',
    },
    {
      src: 'assets/image/Diamond Best Foods.jpg',
      alt: 'Logo 2',
      companyName: 'Diamond Best Foods',
    },
    {
      src: 'assets/image/WOH HUP (Pvt) Ltd.jpg',
      alt: 'Logo 3',
      companyName: 'WOH HUP (Pvt) Ltd',
    },
    {
      src: 'assets/image/Ministry of Fisheries and Aquatic Resources Development.jpg',
      alt: 'Logo 4',
      companyName: 'Ministry of Fisheries and Aquatic Resources Development',
    },
    {
      src: 'assets/image/National Human Resources Development.png',
      alt: 'Logo 5',
      companyName: 'National Human Resources Development',
    },
    {
      src: 'assets/image/Rubber Research Institute of Srilanka.jpg',
      alt: 'Logo 6',
      companyName: 'Rubber Research Institute of Srilanka',
    },
    {
      src: 'assets/image/Rohan Rubber Industries.png',
      alt: 'Logo 7',
      companyName: 'Rohan Rubber Industries',
    },
    {
      src: 'assets/image/Pubudu Engineering (Pvt) Ltd.jpg',
      alt: 'Logo 8',
      companyName: 'Pubudu Engineering (Pvt) Ltd',
    },

    {
      src: 'assets/image/Sathosa Security and General (PVT) Ltd.jpg',
      alt: 'Logo 9',
      companyName: 'Sathosa Security and General (PVT) Ltd',
    },
    {
      src: 'assets/image/KIA MOTOR(LANKA) LIMITED.jpg',
      alt: 'Logo 10',
      companyName: 'KIA MOTOR(LANKA) LIMITED',
    },

    {
      src: 'assets/image/Neptune Papers (Pvt) Ltd.jpg',
      alt: 'Logo 11',
      companyName: 'Neptune Papers (Pvt) Ltd',
    },
    {
      src: 'assets/image/Sri Lanka Institute Of Architects.jpg',
      alt: 'Logo 12',
      companyName: 'Sri Lanka Institute Of Architects',
    },
    {
      src: 'assets/image/Sri Lanka Sustainable Energy Authority.jpg',
      alt: 'Logo 13',
      companyName: 'Sri Lanka Sustainable Energy Authority',
    },
    {
      src: 'assets/image/TNS Lanka.jpg',
      alt: 'Logo 14',
      companyName: 'TNS Lanka',
    },
    {
      src: 'assets/image/Wespro Security Services.jpg',
      alt: 'Logo 15',
      companyName: 'Wespro Security Services',
    },
    {
      src: 'assets/image/Crown Royal Security Services (Pvt) Ltd.png',
      alt: 'Logo 16',
      companyName: 'Crown Royal Security Services (Pvt) Ltd',
    },
    {
      src: 'assets/image/Access International Projects (Pvt) Ltd.jpg',
      alt: 'Logo 17',
      companyName: 'Access International Projects (Pvt) Ltd',
    },
    {
      src: 'assets/image/Manjari Trade Center.jpg',
      alt: 'Logo 18',
      companyName: 'Manjari Trade Center',
    },
    {
      src: 'assets/image/Mercantile Shipping Group.jpg',
      alt: 'Logo 19',
      companyName: 'Mercantile Shipping Group',
    },
    {
      src: 'assets/image/Access Elevate Restaurant.png',
      alt: 'Logo 20',
      companyName: 'Access Elevate Restaurant',
    },
    {
      src: 'assets/image/Alerics Dairy Products.png',
      alt: 'Logo 21',
      companyName: 'Alerics Dairy Products',
    },
    {
      src: 'assets/image/Areca.png',
      alt: 'Logo 22',
      companyName: 'Areca',
    },
    {
      src: 'assets/image/Calcey Technologies.jpg',
      alt: 'Logo 23',
      companyName: 'Calcey Technologies',
    },
    {
      src: 'assets/image/Celogen Lanka Private Limited.png',
      alt: 'Logo 24',
      companyName: 'Celogen Lanka Private Limited',
    },
    {
      src: 'assets/image/Cey-Nor Foundation Limited.jpg',
      alt: 'Logo 25',
      companyName: 'Cey-Nor Foundation Limited',
    },
    {
      src: 'assets/image/Crystal Martin.png',
      alt: 'Logo 26',
      companyName: 'Crystal Martin',
    },
    {
      src: 'assets/image/Disaster Management Centre.gif',
      alt: 'Logo 27',
      companyName: 'Disaster Management Centre',
    },
    {
      src: 'assets/image/Eco Transfer Prints (Pvt) Ltd.png',
      alt: 'Logo 28',
      companyName: 'Eco Transfer Prints (Pvt) Ltd',
    },
    {
      src: 'assets/image/Emirates Shipping Line.jpg',
      alt: 'Logo 29',
      companyName: 'Emirates Shipping Line',
    },
    {
      src: 'assets/image/Green Lanka Pharmaceuticals.jpg',
      alt: 'Logo 30',
      companyName: 'Green Lanka Pharmaceuticals',
    },
    {
      src: 'assets/image/Hansteel Fabrico.jpg',
      alt: 'Logo 31',
      companyName: 'Hansteel Fabrico',
    },
    {
      src: 'assets/image/IROAD.png',
      alt: 'Logo 32',
      companyName: 'IROAD',
    },
    {
      src: 'assets/image/MIKRO Industries (Pvt) Ltd.png',
      alt: 'Logo 33',
      companyName: 'MIKRO Industries (Pvt) Ltd',
    },
    {
      src: 'assets/image/Spring & Summer.png',
      alt: 'Logo 34',
      companyName: 'Spring & Summer',
    },
    {
      src: 'assets/image/TMI Solutions.jpg',
      alt: 'Logo 35',
      companyName: 'TMI Solutions',
    },
    {
      src: 'assets/image/Trinty Apparel Private Limited.png',
      alt: 'Logo 36',
      companyName: 'Trinty Apparel Private Limited',
    },
    {
      src: 'assets/image/Union Colombo Industrial Washing (Pvt) Ltd.png',
      alt: 'Logo 37',
      companyName: 'Union Colombo Industrial Washing (Pvt) Ltd',
    },
    {
      src: 'assets/image/Vidul Lanka PLC.png',
      alt: 'Logo 38',
      companyName: 'Vidul Lanka PLC',
    },
    {
      src: 'assets/image/Wheels Lanka Trading (pvt) ltd.png',
      alt: 'Logo 39',
      companyName: 'Wheels Lanka Trading (pvt) ltd',
    },
    {
      src: 'assets/image/Women in Need.jpg',
      alt: 'Logo 40',
      companyName: 'Women in Need',
    },
    {
      src: 'assets/image/LPG Engineering Services (Pvt) Ltd.png',
      alt: 'Logo 41',
      companyName: 'LPG Engineering Services (Pvt) Ltd',
    },

    {
      src: 'assets/image/New Royal Electricals (Pvt) Ltd.jpg',
      alt: 'Logo 42',
      companyName: 'New Royal Electricals (Pvt) Ltd',
    },
    {
      src: 'assets/image/Golden Bake (Pvt) Ltd.jpg',
      alt: 'Logo 43',
      companyName: 'Golden Bake (Pvt) Ltd',
    },
    {
      src: 'assets/image/Skynet Worldwide Express (Pvt) Ltd.jpg',
      alt: 'Logo 44',
      companyName: 'Skynet Worldwide Express (Pvt) Ltd',
    },
    {
      src: 'assets/image/Lavanga Resort & Spa.jpg',
      alt: 'Logo 45',
      companyName: 'Lavanga Resort & Spa',
    },
    {
      src: 'assets/image/Ezzy Sails Lanka (Pvt) Ltd.jpg',
      alt: 'Logo 46',
      companyName: 'Ezzy Sails Lanka (Pvt) Ltd',
    },
    {
      src: 'assets/image/Alloy Fabrications International (Pvt) Ltd.jpg',
      alt: 'Logo 47',
      companyName: 'Alloy Fabrications International (Pvt) Ltd',
    },
    {
      src: 'assets/image/K.D. Ebert And Sons Holdings (Pvt) Ltd.jpg',
      alt: 'Logo 48',
      companyName: 'K.D. Ebert And Sons Holdings (Pvt) Ltd',
    },
    {
      src: 'assets/image/Dart Global.jpg',
      alt: 'Logo 49',
      companyName: 'Dart Global',
    },
    {
      src: 'assets/image/Lanka Spice (Pvt) Ltd.jpg',
      alt: 'Logo 50',
      companyName: 'Lanka Spice (Pvt) Ltd',
    },
    {
      src: 'assets/image/Ace Protect Systems & Services (Pvt) Ltd.jpg',
      alt: 'Logo 51',
      companyName: 'Ace Protect Systems & Services (Pvt) Ltd',
    },
    {
      src: 'assets/image/Gunathilake Constructions (Pvt) Ltd.jpg',
      alt: 'Logo 52',
      companyName: 'Gunathilake Constructions (Pvt) Ltd',
    },
    {
      src: 'assets/image/Gamini Engineering Works (Pvt) Ltd.jpg',
      alt: 'Logo 53',
      companyName: 'Gamini Engineering Works (Pvt) Ltd',
    },
    {
      src: 'assets/image/Janasri Mills (Pvt) Ltd.jpg',
      alt: 'Logo 54',
      companyName: 'Janasri Mills (Pvt) Ltd',
    },
    {
      src: 'assets/image/Designs Clothing International (Pvt) Ltd.jpg',
      alt: 'Logo 55',
      companyName: 'Designs Clothing International (Pvt) Ltd',
    },
    {
      src: 'assets/image/Hansteel Fabrico.jpg',
      alt: 'Logo 56',
      companyName: 'Hansteel Fabrico',
    },
    {
      src: 'assets/image/Calcey Technologies.jpg',
      alt: 'Logo 57',
      companyName: 'Calcey Technologies',
    },
    {
      src: 'assets/image/Rasawimana Holdings.jpg',
      alt: 'Logo 58',
      companyName: 'Rasawimana Holdings',
    },
    {
      src: 'assets/image/Sharp Print Holdings.jpg',
      alt: 'Logo 59',
      companyName: 'Sharp Print Holdings',
    },
    {
      src: 'assets/image/Kamson Hardware (Pvt)Ltd.jpg',
      alt: 'Logo 60',
      companyName: 'Kamson Hardware (Pvt)Ltd',
    },
    {
      src: 'assets/image/Josephs College.jpg',
      alt: 'Logo 61',
      companyName: 'St.Josephs College',
    },
    {
      src: 'assets/image/Loyola College Negombo.jpg',
      alt: 'Logo 62',
      companyName: 'Loyola College Negombo',
    },
    {
      src: 'assets/image/Thomas catholic college.jpg',
      alt: 'Logo 63',
      companyName: 'St.Thomas catholic college',
    },
    {
      src: 'assets/image/Holy Cross College - Kaluthara.png',
      alt: 'Logo 64',
      companyName: 'Loyola College Negombo',
    },
    {
      src: 'assets/image/St Peters College - Gampha.png',
      alt: 'Logo 65',
      companyName: 'St.Thomas catholic college',
    },
    
  ];

  

  repeatedImages: any[] = [];
  hoveredImage: any = null;
  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Repeat the images array 4 times
    this.repeatedImages = Array(4).fill([...this.images]).flat();

    // Initialize the feedback form
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onHover(image: any): void {
    this.hoveredImage = image;
  }

  onLeave(): void {
    this.hoveredImage = null;
  }

  submitFeedback(): void {
    if (this.feedbackForm.valid) {
      console.log('Feedback submitted:', this.feedbackForm.value);
      // Handle feedback form submission, e.g., send the data to a server
    } else {
      console.log('Form is invalid');
    }
  }
}
