import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;




@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent {

 

  // feedback = {
  //   name: '',
  //   email: '',
  //   message: ''
  // };

  // onSubmits(): void {
  //   // Handle form submission, e.g., send feedback to a server
  //   console.log('Feedback submitted:', this.feedback);
  //   // Reset the form after submission
  //   this.feedback = { name: '', email: '', message: '' };
  // }





  goToLink(title: string): void {//more button code
    if (title === 'Payroll, Time & Attendance and HRIS Solutions') {
      window.open('http://www.payrollsrilanka.lk/resource/products/brochure/Payroll-Brochure.pdf', '_blank');
    } else {
      // Handle other cases or do nothing
    }
  }
  
  softwares = [
    {
      image: 'assets/imgs/parroll,ta,hr2.jpg',
      title: 'Payroll, Time & Attendance and HRIS Solutions',
      description: 'Comprehensive solutions to manage your payroll, attendance, and HRIS needs.'
    },
    {
      image: 'assets/imgs/job costing,stock2.jpg',
      title: 'Job Costing & Stock Control Solution',
      description: 'Optimize your job costing and stock control processes with our specialized solutions.'
    },
    {
      image: 'assets/imgs/loan management.jpg',
      title: 'Loan Management Solution',
      description: 'Efficiently manage loans with our advanced loan management software.'
    },
    {
      image: 'assets/imgs/workshop-management.jpg',
      title: 'Workshop Management Solution',
      description: 'Streamline your workshop operations with our all-in-one management solution.'
    }
  ];

  onMouseEnter(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    element.style.transform = 'scale(1.05)';
  }

  onMouseLeave(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    element.style.transform = 'scale(1)';
  }


  quoteForm: FormGroup;
  selectedSoftwareTitle: string = '';

  constructor(private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      companyName: [''],
      contactNumber: ['', Validators.required],
      //softwareTitle: [''] 

    });

   
  }

  openQuoteModal(softwareTitle: string): void {
    this.selectedSoftwareTitle = softwareTitle;
    const modalElement = document.getElementById('quoteModal');
    if (modalElement) {
      try {
        const modal = new bootstrap.Modal(modalElement);
        const titleElement = modalElement.querySelector('.modal-title');
        if (titleElement) {
          titleElement.textContent = `Request a Quote for ${softwareTitle}`;
        }
        modal.show(); // Ensure this line is executed properly
      } catch (error) {
        console.error('Error initializing or showing the modal:', error);
      }
    } else {
      console.error('Modal element not found');
    }
  }


  
  onSubmit(): void {
    if (this.quoteForm.valid) {
      const formData = this.quoteForm.value;
      const emailSubject = `Quote Request for ${this.selectedSoftwareTitle}`;
      const emailBody = `
        Name: ${formData.customerName}\n
        Email: ${formData.customerEmail}\n
        Company Name: ${formData.companyName}\n
        Contact Number: ${formData.contactNumber}\n
      `;

      window.location.href = `mailto:info@psssoftwaresolutions.com,ajith@psssoftwaresolutions.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      const modalElement = document.getElementById('quoteModal');
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      }
    }
  }
}


// src/app/software/software.component.ts
// import { Component, OnInit } from '@angular/core';
// import { Software, SoftwareDataService } from '../services/software-data.service';


// @Component({
//   selector: 'app-software',
//   templateUrl: './software.component.html',
//   styleUrls: ['./software.component.scss']
// })
// export class SoftwareComponent implements OnInit {
//   softwareList: Software[] = [];

//   constructor(private softwareDataService: SoftwareDataService) {}

//   ngOnInit() {
//     this.softwareDataService.softwareObservable.subscribe(data => {
//       this.softwareList = data;
//     });
//   }

//   // Define the methods to handle button actions
//   moreInfo(softwareId: number) {
//     alert(`More information about software ID: ${softwareId}`);
//     // Implement additional logic to display more information
//   }

//   getQuote(softwareId: number) {
//     alert(`Request a quote for software ID: ${softwareId}`);
//     // Implement additional logic to handle quote requests
//   }
// }
