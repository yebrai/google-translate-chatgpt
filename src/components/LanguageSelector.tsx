import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'
import { type FC } from 'react'
import { type SectionType, type FromLanguage, type Language } from '../types'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language)
  }

  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}

    </Form.Select>
  )
}
