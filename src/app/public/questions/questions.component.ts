import { Component, OnInit } from '@angular/core';
import { DATA } from '../../models/questions';
import { ANSWERES } from '../../models/answers';
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
  selectedAnswer: Array<any> =[] ;
  resultOcurrances = {
    mins_20 : 0,
    mins_30 : 0,
    hour : 0 
  }

  constructor() { }

  ngOnInit(): void {
    this.currentQuestion = this.questions[this.currentQId].q ;
    this.currentAnswer = this.questions[this.currentQId].answers;
    selectedAnswer : Array<any>(this.questions.length) ;


  }

  showNextQuestionAndSaveAnswer( answer: any){
    this.currentQId += 1;
    this.currentQuestion = this.questions[this.currentQId].q ;
    this.currentAnswer = this.questions[this.currentQId].answers;
  }

  onClickGetStarted  () {
    this.currentQuestion = this.questions[this.currentQId].q ;
  }

}



const Results = {
  a1: {
    mins_20: {
      q2:[[0,1,2,3],[3]],
      q3:[[0,1,2],[3],[1,3]]
    },
    mins_30:{
      q2:[[0,1,2],[3]],
      q3:[[1,3]]
    },
    hour: {
      q2:[[1,2]],
      q3:[[3]]
    }
  },
  a2: {
    mins_20: {
      q2: [[0,1,2,3],[3],[3],[1,3]],
      q3: [[0,2,3]]
    },
    mins_30:{
      q2:[[0,1,2],[3]],
      q3: [[1,3]]
    },
    hour: {
      q2:[[1,2]],
      q3:[[3]]
    }
  },
  a3: {
    mins_20: {
      q2:[[0,1,2,3],[3]],
      q3:[[1]]
    },
    mins_30:{
      q2:[[0,1,3],[0,3],[3]],
      q3:[[1,2,3]]
    },
    hour: {
      q2:[[1,2],[1,2,3]],
      q3:[[2,3]]
    }
  },
  a4: {
    mins_20: {
      q2:[[0,1,2,3],[3]],
      q3:[[0],[2]]
    },
    mins_30:{
      q2:[[0,3],[0,1,2,3],[0,1,2]],
      q3:[[1],[2],[3]]
    },
    hour: {
      q2:[[1],[2]],
      q3:[[3]]
    }
  },
  
}