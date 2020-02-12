import {Component, Input, OnInit} from '@angular/core';
import {Feature} from '../../models/Feature';
import {ThemePalette} from '@angular/material';
import {Backer} from '../../models/Backer';

const mode = 'determinate';

@Component({
  selector: 'app-card',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})

export class FeatureComponent implements OnInit {

  @Input() feature: Feature;
  color: ThemePalette = 'primary';
  mode = mode;
  value = 0;
  bufferValue = 0;
  backers: Backer[] =  [];
  amount = 0;
  expirationDate: string;


  constructor() { }

  ngOnInit() {
    this.backers = this.feature.backers;
    this.bufferValue = Number(this.feature.target);
    this.value = this.calcPercentageGoal();
    this.expirationDate  = this.calcDaysExpiration();
  }

  calcPercentageGoal() {

    if (this.backers.length > 0) {
      this.backers.forEach((backer) => {
        this.amount += Number(backer.amount);
      });
      return (this.amount / this.bufferValue) * 100;
    }
  }

  calcDaysExpiration() {
    const now = new Date();
    const createdAt = new Date(this.feature.created_at);
    const expirationDate = new Date (createdAt.setFullYear(createdAt.getFullYear() + 1));
    const differenceInTime = expirationDate.getTime() - now.getTime();
    return (differenceInTime / (1000 * 3600 * 24)).toFixed(0);
  }

}
