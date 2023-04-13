import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useDebounce } from './hooks/useDebounce'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'

function App () {
  const { fromLanguage, setFromLanguage, toLanguage, fromText, setFromText, result, setResult, interchangeLanguages, setToLanguage, loading } = useStore()

  const debouncedFromText = useDebounce(fromText, 300)

  useEffect(() => {
    if (fromText === '') return

    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then((result) => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClipboard = () => { navigator.clipboard.writeText(result).catch(() => {}) }
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLanguage
    speechSynthesis.speak(utterance)
  }

  return (
    <Container fluid>
      <h1>
        Google Translate
      </h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage} />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}><ArrowsIcon /></Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              onChange={setToLanguage}
              type={SectionType.To}
              value={toLanguage}
            />
            <div style={{ position: 'relative' }}>
                          <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
            <div style={{ position: 'absolute', left: 0, bottom: 0, display: 'flex' }}>
            <Button
            variant='link'
            onClick={handleClipboard}
            >
              <ClipboardIcon />
            </Button>
            <Button
            variant='link'
            onClick={handleSpeak}
            >
              <SpeakerIcon />
            </Button>
            </div>

            </div>

          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
