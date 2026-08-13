import Box from '@mui/material/Box'
import { useForm } from 'react-hook-form'

export function Form() {
  const { register, handleSubmit, watch } = useForm()

  const nameWatch = watch('name')

  const handleOnSubmit = (data) => {
    console.log(data)
  }

  return (
    <Box sx={{ height: '100vh', backgroundColor:'white' }}>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <input {...register('name')} type='text' placeholder="Nome"/>
        <input {...register('lastName')} type='text' placeholder="Sobrenome"/>
        <input {...register('age')} type='text' placeholder="Idade"/>
        <button type='submit'>Enviar</button>
        <span>{nameWatch}</span>
      </form>
    </Box>
  )
}