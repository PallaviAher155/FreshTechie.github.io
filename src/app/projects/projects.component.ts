import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[]=[
    {
      title:'Weather App',
      technologies:'Angular,Spring Boot,Mysql',
      description:[ ' Build a system to view weather forecast of particular city.', 
      'User can search for city to know its weather  and based on forecast he should plan his journey'

      ],
    },

    {
      title:'Virtual RTO',
      technologies:'Java,Mysql,IOT Sensor',
      description:[ 'An application for RTO services which reduce the work load of RTO police make It digitalized.',
      'Online documentation and fine collection through the application'
      
      ],
    },

    {
      title:'E-Commerce Website',
      technologies:'HTML,CSS,Javascript,Mysql',
      description:[ 'Website to buy and sell Product'

      ],
    },
    
  ]
  constructor(){}
  ngOnInit(): void {
    
  }

}
