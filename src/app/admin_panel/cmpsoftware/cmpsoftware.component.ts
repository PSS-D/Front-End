import { Component } from '@angular/core';
import { Software, SoftwareDataService } from 'src/app/services/software-data.service';

@Component({
  selector: 'app-cmpsoftware',
  templateUrl: './cmpsoftware.component.html',
  styleUrls: ['./cmpsoftware.component.scss']
})
export class CmpsoftwareComponent {
  softwareList: Software[] = [];
  newSoftware: Software = { id: 0, image: '', name: '', description: '' };

  constructor(private softwareDataService: SoftwareDataService) {
    this.softwareDataService.softwareObservable.subscribe(data => {
      this.softwareList = data;
    });
  }

  addSoftware() {
    this.newSoftware.id = this.softwareList.length + 1; // auto-increment id
    this.softwareDataService.addSoftware({ ...this.newSoftware });
    this.newSoftware = { id: 0, image: '', name: '', description: '' }; // Reset form
  }

  updateSoftware(software: Software) {
    this.softwareDataService.updateSoftware(software);
  }

  deleteSoftware(id: number) {
    this.softwareDataService.deleteSoftware(id);
  }

}
