export const DATA: any = [
  {
    id: 1,
    q: 'How much does your dog weight?',
    required: true,
    description: 'what does your dog weight',
    muti_ans: false,
    answers: [
      { id: 0, text: '1 - 15 lbs', checked: false },
      { id: 1, text: '16 - 40 lbs', checked: false },
      { id: 2, text: '41 - 70 lbs', checked: false },
      { id: 3, text: ' bigger than 70', checked: false },
    ],
  },
  {
    id: 2,
    q: ' How old is your dog?',
    required: true,
    description: 'what does your dog weight',
    muti_ans: false,
    answers: [
      { id: 0, text: 'Less than 1 year', checked: false },
      { id: 1, text: '1 - 3 years', checked: false },
      { id: 2, text: '4-7 years', checked: false },
      { id: 3, text: ' older than 7', checked: false },
    ],
  },
  {
    id: 3,
    q: 'How active is your dog?',
    required: true,
    description: 'what does your dog weight',
    muti_ans: false,
    answers: [
      {
        id: 0,
        text: 'Very Inactive',
        checked: false,
        description: '(I want to get my dog moving)',
      },
      {
        id: 1,
        text: 'Slightly Inactive',
        checked: false,
        description: '(doesn’t beg for a walk but will enjoy it)',
      },
      {
        id: 2,
        text: 'Normally Active',
        checked: false,
        description: '(enjoys a good walk and is ready to lay down after)',
      },
      {
        id: 3,
        text: ' older than 7',
        checked: false,
        description: '(Could run for days and still have energy)',
      },
    ],
  },
];
