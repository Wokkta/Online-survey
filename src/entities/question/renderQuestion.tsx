import { Question, AnswerValue } from '@/features/survey/types'

export const renderQuestion = (
  { id, type, options }: Question,
  value: AnswerValue,
  onChange: (value: AnswerValue) => void
) => {
  switch (type) {
    case 'single':
      return (
        <div>
          {options.map(option => (
            <label key={option}>
              <input
                type="radio"
                name={id}
                value={option}
                checked={value === option}
                onChange={() => onChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )

    case 'multiple': {
      const selected = Array.isArray(value) ? value : []
      return (
        <div>
          {options.map(option => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selected.includes(option)}
                onChange={() =>
                  onChange(
                    selected.includes(option)
                      ? selected.filter(o => o !== option)
                      : [...selected, option]
                  )
                }
              />
              {option}
            </label>
          ))}
        </div>
      )
    }

    default:
      return null
  }
}
