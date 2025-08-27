import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Stack from '@mui/material/Stack'

const eventCategories = [
  {
    name: 'Tecnologia',
    events: [
      { id: 1, title: 'Workshop React', description: 'Aprenda React do zero', image: 'https://placehold.co/300x200' },
      { id: 2, title: 'Conference JS', description: 'JavaScript moderno', image: 'https://placehold.co/300x200' },
      { id: 3, title: 'DevOps Summit', description: 'Práticas DevOps', image: 'https://placehold.co/300x200' },
      { id: 4, title: 'AI Workshop', description: 'Inteligência Artificial', image: 'https://placehold.co/300x200' },
    ]
  },
  {
    name: 'Design',
    events: [
      { id: 5, title: 'UX/UI Design', description: 'Design de interfaces', image: 'https://placehold.co/300x200' },
      { id: 6, title: 'Figma Masterclass', description: 'Domine o Figma', image: 'https://placehold.co/300x200' },
      { id: 7, title: 'Design Thinking', description: 'Metodologias de design', image: 'https://placehold.co/300x200' },
      { id: 8, title: 'Adobe Creative', description: 'Pacote Adobe completo', image: 'https://placehold.co/300x200' },
    ]
  },
  {
    name: 'Marketing',
    events: [
      { id: 9, title: 'Marketing Digital', description: 'Estratégias digitais', image: 'https://placehold.co/300x200' },
      { id: 10, title: 'SEO Avançado', description: 'Otimização para buscadores', image: 'https://placehold.co/300x200' },
      { id: 11, title: 'Social Media', description: 'Gestão de redes sociais', image: 'https://placehold.co/300x200' },
      { id: 12, title: 'Growth Hacking', description: 'Crescimento acelerado', image: 'https://placehold.co/300x200' },
    ]
  }
]

export function Board() {
  return (
    <Box sx={{ height: '100vh', backgroundColor: '#06151A' }}>
      {/* Header */}
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <img
            src="https://placehold.co/150x50/ffffff/1976d2?text=LOGO"
            alt="Logo"
            style={{ height: '50px' }}
          />
        </Toolbar>
      </AppBar>

      {/* Seção de Banner */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Box>
          <img src="https://placehold.co/400x200/e3f2fd/1976d2?text=BANNER" />
        </Box>
        <Typography variant='h3' component='h1' color='#fff'>Seu hub de eventos de tecnologia</Typography>
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>

        {/* Formulário */}
        <Box sx={{ backgroundColor: '#ccc', width: '100%', maxWidth: '384px' }}>
          <Typography>Preencha para criar um evento:</Typography>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor='name' sx={{ position: 'static', transform: 'none', mb: 1 }}>Qual o nome do evento?</InputLabel>
              <OutlinedInput id='name' placeholder='Summer dev hits' fullWidth />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel shrink htmlFor='date' sx={{ position: 'static', transform: 'none', mb: 1 }}>Data do evento</InputLabel>
              <OutlinedInput id='date' placeholder='XX/XX/XXXX' fullWidth />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel shrink htmlFor='name' sx={{ position: 'static', transform: 'none', mb: 1 }}>Tema do evento</InputLabel>
              <OutlinedInput id='name' placeholder='Selecione uma opção' fullWidth />
            </FormControl>
          </Stack>
        </Box>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '1200px' }}>
        {eventCategories.map((category) => (
          <Box key={category.name}>
            <Typography>{category.name}</Typography>

            <Grid container spacing={2} sx={{ maxWidth: '1200px', mx: 'auto' }}>
              {category.events.map((event) => (
                <Grid item xs={12} sm={6} md={4} key={event.id}>
                  <Card>
                    <CardMedia component='img' height='140px' image={event.image} alt={event.title} />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography>{event.title}</Typography>
                      <Typography>{event.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  )
}