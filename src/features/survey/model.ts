import { useState } from 'react'
import { survey } from '@/shared/config/demoSurvey' /*
 мог сымитировать запрос на бэк,но в тз было не усложнять, а я уже условный fsd привлек)
*/
/**
 * так же тут отвечу на вопрос 
 * "Можно ли отделить логику работы фронтенда приложения от
    отображения? Например, если у нас запланированы темы или отдельный
    фронтенд под мобильные устройства."
    это тоже решается работой с апи или отправкой запроса с данными о типе устройства и тп
 */
 import { Answers, AnswerValue } from './types'


export const useSurvey = () => {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  /* 
  для поддержания нескольких вопросов на странице одним из решений
  будет сделать обработку выборки survey.slice(step, step + n) ниже,
  а так же на SurveyPage вызов renderQuestion для массива выборки
*/
  const currentQuestion = survey[step]
  const isLast = step === survey.length - 1
  const isFinished = step >= survey.length
  const progress = (step / survey.length) * 100

  const goNext = () => {
    if (!isFinished) {
      setStep((prev) => prev + 1)
    }
  }

  const handleAnswerChange = (questionId: string, value: AnswerValue) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value,
    }))
  }

  return { currentQuestion, answers, goNext, isLast, isFinished, progress, handleAnswerChange }
}
