import { useState, useRef, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Message } from '../components/Message'

// Preguntas iniciales
const initialQuestions = [
  '¿Qué servicios ofrecen?',
  '¿Cómo se adaptan a las necesidades de cada cliente?',
  '¿Cuál es el proceso de trabajo?',
  '¿Qué resultados puedo esperar?',
  '¿Cómo miden el éxito de una campaña?'
]

// Respuestas predefinidas del bot para cada pregunta
const botResponses = {
  '¿Qué servicios ofrecen?': 'Ofrecemos una variedad de servicios para satisfacer las necesidades de nuestros clientes, incluyendo marketing digital, consultoría y desarrollo de productos.',
  '¿Cómo se adaptan a las necesidades de cada cliente?': 'Nuestro equipo personaliza cada campaña y servicio para alinearse con los objetivos y necesidades específicos de cada cliente.',
  '¿Cuál es el proceso de trabajo?': 'Nuestro proceso comienza con una consulta inicial, seguida de planificación estratégica, implementación y evaluación continua.',
  '¿Qué resultados puedo esperar?': 'Los resultados dependen de los objetivos específicos, pero nuestro objetivo es siempre proporcionar un ROI positivo y mejorar la visibilidad de su marca.',
  '¿Cómo miden el éxito de una campaña?': 'Medimos el éxito a través de métricas clave como el ROI, la participación de los clientes y el alcance de la campaña.'
}

// Componente de chat principal
export const Faqs = () => {
  const [messages, setMessages] = useState([{ text: '¿Cuál es tu pregunta? Estoy aquí para ayudarte.', isUser: false }])
  const messagesEndRef = useRef(null) // Referencia para el área de mensajes

  // Función para manejar cuando el usuario selecciona una pregunta
  const handleQuestionClick = (question) => {
    // Agregar pregunta seleccionada como mensaje del usuario
    setMessages(prevMessages => [...prevMessages, { text: question, isUser: true }])

    // Responder con la respuesta predefinida del bot
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: botResponses[question], isUser: false }
      ])
    }, 1000)
  }

  // Desplazar scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '91vh', // Ocupa toda la altura de la pantalla
        width: '100%',
        marginTop: '64px'
      }}
    >
      {/* Área de mensajes con scroll */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: 'auto',
          backgroundColor: '#F5F5F5',
          maxHeight: 'calc(90vh)' // Espacio reservado para la barra de entrada
        }}
      >
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isUser={message.isUser} />
        ))}
        {/* Referencia para mantener el scroll al fondo */}
        <div ref={messagesEndRef} />
      </Box>

      {/* Opciones de preguntas iniciales */}
      <Box sx={{ p: 2, backgroundColor: 'white', borderTop: '1px solid #ddd' }}>
        <Typography variant="subtitle1" gutterBottom>Selecciona una pregunta:</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {initialQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handleQuestionClick(question)}
              sx={{ textAlign: 'left' }}
            >
              {question}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
