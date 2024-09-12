

import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  services = [
    {
      name: 'Web Design And Web Application Development',
      description: 'Designing Web sites and Developing Web applications are the duties of our Web development department. Our creative, powerful yet simple designs will offer you the most appropriate solution.',
      imageUrl: 'assets/imgs/web-design.png'
    },
    {
      name: 'Customized Software Solutions',
      description: 'Our Software development team is ready to provide customized, reliable and affordable Software Solutions for various types of businesses. Best valued solution will be backed up by our quality, energetic and co-operative Service.',

      imageUrl: 'assets/imgs/customized software solution.jpg'
    },
    {
      name: 'Software Consultation',

      description: 'We can see that there are many good software applications in the market without considerably good enough training and supports. We provide consultation for the clients, who need assistance to use those applications with comfort. Our Experienced, quality service will never let down our clients.',
      imageUrl: 'assets/imgs/software cunsultation.jpg'
    },
    {
      name: 'Salary Outsourcing',

      description: 'We are ready to take the headache of preparing salaries from our clients, so they will be able to achieve the best results by offering the most comprehensive, fast and accurate Outsourcing solutions.',
      imageUrl: 'assets/imgs/salary outsourcing.jpg'
    },
    {
      name: 'Data Entry Service',

      description: 'Some companies are tired of entering data because of the inaccuracy or because of the back-log. We provide accurate and speedy Data Entry services to improve efficiency of our clients',
      imageUrl: 'assets/imgs/data entry service.jpg'
    }
  ];
  constructor(){}

  onMouseEnter(service: any): void {
    service.isHovered = true;
  }

  onMouseLeave(service: any): void {
    service.isHovered = false;
  }
}

