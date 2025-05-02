import { useSurvey } from '@/features/survey/model'
import { renderQuestion } from '@/entities/question/renderQuestion'
import { AnswerValue } from '@/features/survey/types'
import { survey } from '@/shared/config/demoSurvey'
import './index.css'

export const SurveyPage = () => {
  const { currentQuestion, answers, goNext, isLast, isFinished, progress, handleAnswerChange } = useSurvey()

  if (isFinished) {
    return (
      <div className="survey-container">
        <h2>Результаты</h2>
        {Object.entries(answers).map(([questionId, answer]) => {
          const question = survey.find(q => q.id === questionId)
          return (
            <div key={questionId}>
              <strong>{question?.title}</strong>: {Array.isArray(answer) ? answer.join(', ') : answer}
            </div>
          )
        })}
      </div>
    )
  }

  const selectedAnswer = answers[currentQuestion.id]
  const disableNext = !selectedAnswer || (Array.isArray(selectedAnswer) && selectedAnswer.length === 0)

  const handleAnswerChangeWrapper = (value: AnswerValue) => {
    handleAnswerChange(currentQuestion.id, value)
  }

  

  return (
    <div className="survey-container">
      <h2>{currentQuestion.title}</h2>
      {renderQuestion(currentQuestion, selectedAnswer, handleAnswerChangeWrapper)}
      <div className="survey-progress-bar">
        <div className="survey-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <button className="survey-button" onClick={goNext} disabled={disableNext}>
        {isLast ? 'Завершить' : 'Далее'}
      </button>
    </div>
  )
}
