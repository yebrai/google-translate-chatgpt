import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'

function App () {
  const { fromLanguage, setFromLanguage, toLanguage, interchangeLanguages, setToLanguage } = useStore()

  return (
    <Container fluid>
      <h1>
        Google Translate
      </h1>
      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage} />
          <Form.Control
          as='textarea'
          placeholder='Introducir texto'
          autoFocus
          style={{ height: '150px' }}
          />
        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}><ArrowsIcon /></Button>
        </Col>
        <Col>
          <LanguageSelector
            onChange={setToLanguage}
            type={SectionType.To}
            value={toLanguage}
          />
          <Form.Control
          as='textarea'
          placeholder='Traducción'
          style={{ height: '150px' }}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App
