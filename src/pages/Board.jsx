import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const eventCategories = [
  {
    name: "Front-end",
    events: [
      {
        id: 1,
        name: "Workshop React",
        theme: "Front-end",
        date: "20/05/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 2,
        name: "Conference JS",
        theme: "Front-end",
        date: "15/06/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 3,
        name: "Vue.js Masterclass",
        theme: "Front-end",
        date: "10/07/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 4,
        name: "Angular Workshop",
        theme: "Front-end",
        date: "25/07/2025",
        image: "https://placehold.co/236x282",
      },
    ],
  },
  {
    name: "Design",
    events: [
      {
        id: 5,
        name: "UX/UI Design",
        theme: "Design",
        date: "05/08/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 6,
        name: "Figma Masterclass",
        theme: "Design",
        date: "12/08/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 7,
        name: "Design Thinking",
        theme: "Design",
        date: "20/08/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 8,
        name: "Adobe Creative",
        theme: "Design",
        date: "30/08/2025",
        image: "https://placehold.co/236x282",
      },
    ],
  },
  {
    name: "Marketing",
    events: [
      {
        id: 9,
        name: "Marketing Digital",
        theme: "Marketing",
        date: "05/09/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 10,
        name: "SEO Avançado",
        theme: "Marketing",
        date: "15/09/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 11,
        name: "Social Media",
        theme: "Marketing",
        date: "25/09/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 12,
        name: "Growth Hacking",
        theme: "Marketing",
        date: "05/10/2025",
        image: "https://placehold.co/236x282",
      },
    ],
  },
];

export function Board() {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#06151A" }}>
      // Header
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center" }}></Toolbar>
      </AppBar>

      // Seção de Banner
      <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'center', textAlign: 'center'}}>
        <Box>

        </Box>
        <Typography variant="h3" component='h1'color="#fff">Seu hub de eventos de tecnologia</Typography>
      </Box>

      // Formulário e Listagem de Eventos
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography color="#222">Formulário</Typography>
        <TextField />
        <TextField />
        <TextField />
        <Button variant="contained">Botão</Button>
      </Box>
      </Box>
    </Box>
  );
}
