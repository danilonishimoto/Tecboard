import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import bannerImage from "../assets/banner.png";
import tecboardLogo from "../assets/tecboard.svg";
import { eventSchema } from "../../schema";

import { MenuItem, styled } from "@mui/material";
import { useState } from "react";

const Chip = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  backgroundColor: theme.palette.textSecondary,
  padding: "8px",
  borderRadius: "4px",
  marginBottom: "1",
}));

const eventCategories = [
  {
    id: 1,
    name: "Front-end",
    events: [
      {
        id: 1,
        name: "Workshop React",
        theme: "Front-end",
        description: "Aprenda React na prática",
        date: "20/05/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 2,
        name: "Conference JS",
        theme: "Front-end",
        description: "O futuro do JavaScript",
        date: "15/06/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 3,
        name: "Vue.js Masterclass",
        theme: "Front-end",
        description: "Dominando o ecossistema Vue",
        date: "10/07/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 4,
        name: "Angular Workshop",
        theme: "Front-end",
        description: "Aplicações escaláveis com Angular",
        date: "25/07/2025",
        image: "https://placehold.co/236x282",
      },
    ],
  },
  {
    id: 2,
    name: "Design",
    events: [
      {
        id: 5,
        name: "UX/UI Design",
        theme: "Design",
        description: "Interfaces focadas no usuário",
        date: "05/08/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 6,
        name: "Figma Masterclass",
        theme: "Design",

        description: "Prototipagem rápida e avançada",
        date: "12/08/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 7,
        name: "Design Thinking",
        theme: "Design",

        description: "Resolução criativa de problemas",
        date: "20/08/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 8,
        name: "Adobe Creative",
        theme: "Design",

        description: "Ferramentas essenciais de criação",
        date: "30/08/2025",
        image: "https://placehold.co/236x282",
      },
    ],
  },
  {
    id: 3,
    name: "Marketing",
    events: [
      {
        id: 9,
        name: "Marketing Digital",
        theme: "Marketing",
        description: "Estratégias de engajamento online",
        date: "05/09/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 10,
        name: "SEO Avançado",
        theme: "Marketing",
        description: "Posicionamento no topo do Google",
        date: "15/09/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 11,
        name: "Social Media",
        theme: "Marketing",
        description: "Gestão profissional de redes",
        date: "25/09/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 12,
        name: "Growth Hacking",
        theme: "Marketing",
        description: "Técnicas de crescimento acelerado",
        date: "05/10/2025",
        image: "https://placehold.co/236x282",
      },
    ],
  },
];

export function Board() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    theme: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const resultValidation = eventSchema.safeParse(formData)
    if(resultValidation.success) {
      console.log(resultValidation.data)
    } else {
      console.log(resultValidation.error)
    }
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#06151A" }}>
      {/* Header */}
      <AppBar position="static" sx={{ py: 2, backgroundColor: "#06151A" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <img src={tecboardLogo} alt="Logo" style={{ height: "28px" }} />
        </Toolbar>
      </AppBar>

      {/* // Seção de Banner */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          height: "600px",
          background: "linear-gradient(180deg, #17D9B1 0%, #06151A 100%)",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <img src={bannerImage} />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              position: "absolute",
              bottom: "80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "652px",
              textAlign: "center",
            }}
          >
            Seu hub de eventos de tecnologia
          </Typography>
        </Box>
      </Box>

      {/* // Formulário */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#06151A",
          py: 8,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#212121",
            width: "100%",
            maxWidth: "384px",
            py: "32px",
            px: "28px",
            borderRadius: 2,
          }}
        >
          <Typography>Preencha para criar um evento</Typography>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="name"
                sx={{ position: "static", transform: "none", mb: 1 }}
              >
                Nome do evento
              </InputLabel>
              <OutlinedInput
                id="name"
                name="name"
                placeholder="Summer dev hits"
                fullWidth
                onChange={handleChange}
                value={formData.name}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="date"
                sx={{ position: "static", transform: "none", mb: 1 }}
              >
                Data do evento
              </InputLabel>
              <OutlinedInput
                id="date"
                name="date"
                placeholder="XX/XX/XXXX"
                fullWidth
                onChange={handleChange}
                value={formData.date}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="theme"
                sx={{ position: "static", transform: "none", mb: 1 }}
              >
                Tema do evento
              </InputLabel>
              <Select
                id="theme"
                name="theme"
                defaultValue=""
                displayEmpty
                placeholder="Selecione uma opção"
                fullWidth
                value={formData.theme}
              >
                <MenuItem value="" disabled>
                  Selecione uma opção
                </MenuItem>
                <MenuItem value="Front-end">Front end</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" sx={{ alignSelf: "center" }}>
              Criar evento
            </Button>
          </Stack>
        </Box>

        {/* // Listagem de Eventos */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "1200px",
            mt: "60px",
            gap: "64px",
          }}
        >
          {eventCategories.map((category) => (
            <Box key={category.name}>
              <Typography>{category.name}</Typography>

              <Grid
                container
                spacing={2}
                sx={{ maxWidth: "1200px", mx: "auto" }}
              >
                {category.events.map((event) => (
                  <Grid item xs={12} sm={6} md={4} key={event.id}>
                    <Card sx={{ width: "282px" }}>
                      <CardMedia
                        component="img"
                        height="140px"
                        image={event.image}
                        alt={event.name}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Chip>
                          <Typography variant="caption">
                            {event.theme}
                          </Typography>
                        </Chip>
                        <Typography>{event.date}</Typography>
                        <Typography>{event.name}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
