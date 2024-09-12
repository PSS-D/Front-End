// src/app/software-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Software {
  id: number;
  image: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SoftwareDataService {
  private softwareData: Software[] = [
    { id: 1, image: 'path/to/image1.jpg', name: 'Software 1', description: 'Description 1' },
    { id: 2, image: 'path/to/image2.jpg', name: 'Software 2', description: 'Description 2' },
    // Add more initial data as needed
  ];

  private softwareSubject = new BehaviorSubject<Software[]>(this.softwareData);
  softwareObservable = this.softwareSubject.asObservable();

  constructor() {}

  addSoftware(software: Software) {
    this.softwareData.push(software);
    this.softwareSubject.next(this.softwareData);
  }

  updateSoftware(updatedSoftware: Software) {
    const index = this.softwareData.findIndex(s => s.id === updatedSoftware.id);
    if (index !== -1) {
      this.softwareData[index] = updatedSoftware;
      this.softwareSubject.next(this.softwareData);
    }
  }

  deleteSoftware(id: number) {
    this.softwareData = this.softwareData.filter(s => s.id !== id);
    this.softwareSubject.next(this.softwareData);
  }
}
