import { Question } from '@/features/survey/types'

export const survey: Question[] = [
  {
    id: 'q1',
    title: 'Вы любите пиццу?',
    type: 'single',
    options: ['Да', 'Нет'],
  },
  {
    id: 'q2',
    title: 'Какие десерты предпочитаете?',
    type: 'multiple',
    options: ['Мороженное', 'Торт', 'Пуддинг','Ни одно из представленных'],
  },
]
