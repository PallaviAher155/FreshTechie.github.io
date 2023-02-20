import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:Skill[]=[
    {
      name:'Angular',
      level:'Expert',
      rating:85,
    },

    {
      name:'Spring Boot',
      level:'Intermediate',
      rating:70,
    },

    {
      name:'Java',
      level:'Expert',
      rating:80,
    },

    {
      name:'HTML,CSS',
      level:'Expert',
      rating: 85,
    },

    {
      name:'C++',
      level:'Intermediate',
      rating:70,
    },

    {
      name:'Mysql',
      level:'Expert',
      rating:80,
    },
  ];
  constructor(){}
  ngOnInit(): void {
    
  }

}
