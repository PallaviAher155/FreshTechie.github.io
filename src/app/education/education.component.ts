import { Component, OnInit } from '@angular/core';
import {Education} from '../models/models'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList:Education[]=[
    {
      institute:'Janata Vidhyalaya Wadali Bhoi',
      course: 'SSC',
      duration: '2015-2016',
      score: '86%',
    },

    {
      institute:'K.K.Wagh College Pimpagaon',
      course: 'HSC',
      duration: '2017-2018',
      score: '68%',
    },

    {
      institute:'SNJB College of Engineering',
      course: 'BE in Information Technology',
      duration: '2018-2022',
      score: '86%',
    },
  ];
  constructor(){}
  ngOnInit(): void {
    
  }

}
