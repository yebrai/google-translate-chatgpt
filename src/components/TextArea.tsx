import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}
const commonStyles = { border: 0, height: '200px' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando ...'
  return 'Traduccion'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  return (
        <Form.Control
            autoFocus={type === SectionType.From}
            as='textarea'
            placeholder={getPlaceholder({ type, loading })}
            style={styles}
            value={value}
        />
  )
}
