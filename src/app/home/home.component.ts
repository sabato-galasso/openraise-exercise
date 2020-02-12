import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Feature} from '../models/Feature';
import data from '../../data/software.json';
import * as _ from 'lodash';
import {Maintenance} from '../models/Maintenance ';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  errMessFeed: string;
  showSpinner = false;

  features: Feature[] = [];
  softwareData: any;
  idSoftware = 'cf016d721e1b2b6b93a665e821f6e6b1a06420b2';
  shortDescription: string;
  nameSoftware: string;
  maintenance: Maintenance;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.getSoftware(this.idSoftware);
    this.softwareData = this.getSoftwareDataPublic();
    //console.log(this.softwareData);

    if (this.softwareData) {
      this.getFeatures();
      this.nameSoftware = this.getName();
      this.shortDescription = this.getShortDescription();
      this.maintenance = this.getMaintenance();
    }
  }

  getSoftwareDataPublic() {
    return _.get(data, ['hits', 'hits', 0, '_source', 'publiccode'], '');
  }

  getName() {
    return this.softwareData.name || '';
  }

  getShortDescription() {
    return _.get(this.softwareData, ['description', 'it', 'shortDescription'], '');
  }

  // Get first maintenance
  getMaintenance() {
    return _.get(this.softwareData, ['maintenance', 'contacts', 0], '');
  }

  getFeatures() {
    this.dataService
      .getFeatures().subscribe(feature => {
        this.features = feature;
      },
      errMess => { this.features = null; this.errMessFeed = errMess as any; },
      () => {console.log('Observable finished', this.features);
             this.showSpinner = false;
      }
    );
  }

  getSoftware(id: string) {
    // tslint:disable-next-line:no-shadowed-variable
    this.dataService.getSoftwareById(id).subscribe(data => {
        this.softwareData = data;
      },
      errMess => { this.features = null; this.errMessFeed = errMess as any; },
      () => {console.log('Observable finished', this.softwareData);
             this.showSpinner = false;
      }
    );
  }


}
