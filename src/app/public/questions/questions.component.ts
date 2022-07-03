import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions = DATA;
  currentQId = 0; 
  currentQuestion: any ;
  currentAnswer: any ;
  answers = ANSWERES ;


  constructor() { }

  ngOnInit(): void {
    this.currentQuestion = this.questions[this.currentQId].q ;
    this.currentAnswer = this.answers[0].answers;

  }

  showNextQuestionAndSaveAnswer( answer: any){
    this.currentQuestion = this.questions[this.currentQId].q ;
    this.currentQId += 1;
  }

  onClickGetStarted  () {
    this.currentQuestion = this.questions[this.currentQId].q ;

  }

}


const  DATA : any = [
  {
      id: 1,
      q : 'What is this '
  },
  {
      id: 2,
      q : 'What is this 22'
  },
  {
      id: 3,
      q : 'What is this 33'
  },
  {
      id: 4,
      q : 'What is this 44'
  }
];

const ANSWERES : any = [
  {
    qid: 1, 
    answers : [
      {
        id: 1 ,
        answer : 'asnswer 1',
        checked: false
      },
      {
        id: 2 ,
        answer : 'asnswer 2',
        checked: false
      },
      {
        id: 3 ,
        answer : 'asnswer 3',
        checked: false
      },
      {
        id: 4 ,
        answer : 'asnswer 4',
        checked: false
      },
      {
        id: 4 ,
        answer : 'asnswer 4',
        checked: false
      },
      {
        id: 5 ,
        answer : 'asnswer 5',
        checked: false
      },
      {
        id: 5 ,
        answer : 'asnswer 5',
        checked: false
      }
    ]
  }
]