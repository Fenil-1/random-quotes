import { Typography,Button, createTheme, ThemeProvider, Box ,Grid, Container,Paper,Stack} from '@mui/material'

import { useState } from 'react'
import XIcon from '@mui/icons-material/X';

function App() {
   const arr = [
    {
      quote : 'yo1' , 
      author : 'aut 1'
    },
    {
      quote : 'yo2' , 
      author : 'aut 2'
    },
    {
      quote : 'yo3' , 
      author : 'aut 3'
    }
  ]

  const [currentIndex , setCurrentIndex] = useState(0);
  const handleChange = () => {
    setCurrentIndex((prevIndex)=>(prevIndex+1) % arr.length)
    console.log(currentIndex);
  }

  const {author , quote} = arr[currentIndex];
  

  return (
    <>
   <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f1f1f1',
      }}
    >
      <Box textAlign="center">
        {/* Heading */}
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          Quote Machine
        </Typography>

        {/* Quote Box */}
        <Paper
        id='quote-box'
          elevation={4}
          sx={{
            p: 4,
            minWidth: { xs: 300, sm: 400 },
            maxWidth: 600,
            bgcolor: 'background.paper',
            textAlign: 'center',
          }}
        >
          <Typography id='text' variant="h6" sx={{ mb: 2 }}>
            "{quote}"
          </Typography>
          <Typography id='author' variant="subtitle1" sx={{ fontStyle: 'italic', mb: 3 }}>
            — {author}
          </Typography>
          <Button id="tweet-quote" href="twitter.com/intent/tweet" >
            <XIcon />
          </Button>
          {/* <Button href='https://x.com/'>
            <XIcon />
          </Button> */}
          

          <Button id="new-quote" variant="contained" onClick={handleChange} >
            New Quote
          </Button>
        </Paper>
      </Box>
    </Container>


   
    </>
  )
}

export default App
