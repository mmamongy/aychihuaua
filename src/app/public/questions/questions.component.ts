import { Component, OnInit } from '@angular/core';
import { DATA } from '../../models/questions';
import { ANSWERES } from '../../models/answers';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions = DATA;
  currentQId = 0;
  currentQuestion: any;
  currentAnswer: any;
  answers = ANSWERES;
  selectedAnswer: Array<any> = [];
  resultOcurrances = {
    mins_20: 0,
    mins_30: 0,
    hour: 0,
  };
  increament = 0 ;

  res: Array<any> = [0,0,0];

  constructor() {}

  ngOnInit(): void {
    this.currentQuestion = this.questions[this.currentQId].q;
    this.currentAnswer = this.questions[this.currentQId].answers;
    selectedAnswer: Array<any>(this.questions.length);
  }

  showNextQuestionAndSaveAnswer(answer: any) {
    this.increament++ ;
    if (this.currentQId +1 !== this.questions.length ){
      this.currentQId += 1;
    }
    this.currentQuestion = this.questions[this.currentQId].q;
    this.currentAnswer = this.questions[this.currentQId].answers;
    if (this.increament === this.questions.length) {
      this.getTheResult();
    }

  }

  onClickGetStarted() {
    this.currentQuestion = this.questions[this.currentQId].q;
  }

  getTheResult() {

    let expected = results2[this.selectedAnswer[0]];
    console.log('Q1 :' , this.selectedAnswer[0]) ;
    console.log('Ans :' , this.selectedAnswer)

    let qs_nums = this.questions.length;
    for (const prop in expected) {
      console.log(prop);
      for (let i = 0; i < qs_nums; i++) {
        let innerChoices: any = expected[prop as keyof typeof expected][i].length;
        console.log(expected[prop as keyof typeof expected][i])
         for (let j = 0; j < innerChoices; j++) {

          if (expected[prop as keyof typeof expected][i][j].indexOf(this.selectedAnswer[i]) > -1 ) {
            if (i < (qs_nums -1)) {
            this.res[i]++;
            this.resultOcurrances[prop as keyof typeof expected]++;
          } else {
            this.res[i]=10*i;
            this.resultOcurrances[prop as keyof typeof expected]+=70*(j+1) ;
          }
          }

            // console.log(this.res) ;
            // console.log(this.resultOcurrances) ;

          }
         }
      }

    console.log('Final') ;
    console.log(this.res) ;
    console.log(this.resultOcurrances) ;
  }
}

const results2 = [
  {
    mins_20: [[],
      [[0, 1, 2, 3], [3]],
      [[0, 1, 2], [3], [1, 3]],
    ],
    mins_30: [[], [[0, 1, 2], [3]], [[1, 3]]],
    hour: [[], [[1, 2]], [[3]]],
  },
  {
    mins_20: [[],[[0, 1, 2, 3], [3], [3], [1, 3]], [[0, 2, 3]]],
    mins_30: [[],[[0, 1, 2], [3]], [[1, 3]]],
    hour: [[],[[1, 2]], [[3]]],
  },
  {
    mins_20: [[],[[0, 1, 2, 3], [3]], [[1]]],
    mins_30: [[],[[0, 1, 3], [0, 3], [3]], [[1, 2, 3]]],
    hour: [[],
      [
        [1, 2],
        [1, 2, 3],
      ],
      [[2, 3]],
    ],
  },
  {
    mins_20: [[],
      [[0, 1, 2, 3], [3]],
      [[0], [2]],
    ],
    mins_30: [[],
      [
        [0, 3],
        [0, 1, 2, 3],
        [0, 1, 2],
      ],
      [[1], [2], [3]],
    ],
    hour: [[],[[1], [2]], [[3]]],
  },
];

const Results = {
  a1: {
    mins_20: {
      q2: [[0, 1, 2, 3], [3]],
      q3: [[0, 1, 2], [3], [1, 3]],
    },
    mins_30: {
      q2: [[0, 1, 2], [3]],
      q3: [[1, 3]],
    },
    hour: {
      q2: [[1, 2]],
      q3: [[3]],
    },
  },
  a2: {
    mins_20: {
      q2: [[0, 1, 2, 3], [3], [3], [1, 3]],
      q3: [[0, 2, 3]],
    },
    mins_30: {
      q2: [[0, 1, 2], [3]],
      q3: [[1, 3]],
    },
    hour: {
      q2: [[1, 2]],
      q3: [[3]],
    },
  },
  a3: {
    mins_20: {
      q2: [[0, 1, 2, 3], [3]],
      q3: [[1]],
    },
    mins_30: {
      q2: [[0, 1, 3], [0, 3], [3]],
      q3: [[1, 2, 3]],
    },
    hour: {
      q2: [
        [1, 2],
        [1, 2, 3],
      ],
      q3: [[2, 3]],
    },
  },
  a4: {
    mins_20: {
      q2: [[0, 1, 2, 3], [3]],
      q3: [[0], [2]],
    },
    mins_30: {
      q2: [
        [0, 3],
        [0, 1, 2, 3],
        [0, 1, 2],
      ],
      q3: [[1], [2], [3]],
    },
    hour: {
      q2: [[1], [2]],
      q3: [[3]],
    },
  },
};
