/**
 * если появятся иные типы вопросов,просто обновим типы тут,
 * а так же добавим новый кейс в renderQuestion
 */
export type Question = {
    id: string
    title: string
    type: 'single' | 'multiple'
    options: string[]
  }
  
  export type AnswerValue = string | string[]
  
  export type Answers = Record<string, AnswerValue>
  