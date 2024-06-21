
import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/img/eu.jpg"
import DownloadIcon from '@mui/icons-material/Download';

import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`

  }))
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        height: { xs: '100%', sm: "100vh" },
        display: "flex",
        alignItems: "center"
      }}>
      <Container maxWidth="lg" >
        <Grid container spacing={2} mb='2rem'>
          <Grid item xs={12} md={5} display='flex' justifyContent='center'>
            <StyledImg src={Avatar} />
          </Grid >
          <Grid item xs={12} md={7} >
            <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Julio Sousa</Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>I'm a Software Enginner </Typography>
            <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
              <Grid item xs={12} md={4} >
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV </Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} >
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Contact</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero