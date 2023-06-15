import { type FromLanguage, type Language } from '../types.d'

// Uso de api mymemory para traducir mientras me devuelven la key :')
export async function translate ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  if (fromLanguage === toLanguage) return text
  if (text === '') return null
  const res = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`)
  const data = await res.json()
  // console.log(data)
  return data.responseData.translatedText
}

// API key chat-gpt lossed by too many calls

// import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai'
// import { SUPPORTED_LANGUAGES } from '../constants'
// import { type Language, type FromLanguage } from '../types'

// const apiKey = import.meta.env.VITE_OPENAI_API_KEY

// const configuration = new Configuration({ apiKey })
// const openai = new OpenAIApi(configuration)

// export async function translate ({
//   fromLanguage,
//   toLanguage,
//   text
// }: {
//   fromLanguage: FromLanguage
//   toLanguage: Language
//   text: string
// }) {
//   if (fromLanguage === toLanguage) return text

//   const messages = [

//     {
//       role: ChatCompletionRequestMessageRoleEnum.System,
//       content: 'You are a AI that translates text. You recive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. you can also recive {{auto}} which means that you have to detect the language. You can translate to any language. The language you translate to is surrounded by `[[`and`]]`.'
//     },
//     {
//       role: ChatCompletionRequestMessageRoleEnum.User,
//       content: 'Hola mundo {{spanish}} [[English]]'
//     },
//     {
//       role: ChatCompletionRequestMessageRoleEnum.Assistant,
//       content: 'Hello World'
//     },
//     {
//       role: ChatCompletionRequestMessageRoleEnum.User,
//       content: 'How are you? {{auto}} [[Deutsh]]'
//     },
//     {
//       role: ChatCompletionRequestMessageRoleEnum.Assistant,
//       content: 'Wie ght es dir?'
//     },
//     {
//       role: ChatCompletionRequestMessageRoleEnum.User,
//       content: 'Bon dia, com estas? {{auto}} [[Español]]'
//     },
//     {
//       role: ChatCompletionRequestMessageRoleEnum.Assistant,
//       content: 'Buenos días, ¿Cómo estás? {{auto}} [[Español]]'
//     }
//   ]

//   const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
//   const toCode = SUPPORTED_LANGUAGES[toLanguage]

//   const completion = await openai.createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: [
//       ...messages,
//       {
//         role: ChatCompletionRequestMessageRoleEnum.User,
//         content: `${text} {{${fromCode}}} [[${toCode}]]`
//       }
//     ]
//   })

//   return completion.data.choices[0]?.message?.content
// }
