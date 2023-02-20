import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData:string[][]=[
    ['name','Pallavi Aher'],
    ['DOB','15/05/2000'],
    ['Education','BE(IT)'],
    ['Email','aherpalllavi2000@gmail.com'],
    ['Interest','Music'],
  ];

  aboutMe:string[]=[
    'Hi, I am a Software Engineer completed my bachlor of engineering from SNJB college of Engineering.',
    'I have competed full stack java developer certification from stackroute and i also completed C,CPP certification',
    'I am self motivated,quick learner,enthusiastic person'
  ];
  constructor(){}
  ngOnInit(): void {
    
  }

}
