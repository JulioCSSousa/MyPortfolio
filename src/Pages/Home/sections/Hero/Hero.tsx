
import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "/assets/eu2.jpeg"

import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/Animation/Animation";
import { Email, WhatsApp } from "@mui/icons-material";


const Hero = () => {

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`

  }))
  const whatsShow = () => {
    const phoneNumber = "+5519987102078";
    const message = "Olá, gostaria de saber mais sobre os seus serviços!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");}

  const emailShow = () => {
    const emailAddress = "juliosousa.dev@gmail.com";
    const subject = "Informações sobre serviços";
    const body = "Olá, gostaria de saber mais sobre os seus serviços!";
    const url = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");}
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "100vh",
          display: "flex",
          alignItems: "center"
        }}>
        <Container >
          <Grid container spacing={2} mb='2rem'>
            <Grid item xs={12} md={5} display='flex' justifyContent='center'>
              <Box position="relative" >
                <Box position="absolute" width={"100%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid >
            <Grid item xs={12} md={7} >
              <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Julio Sousa</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>Desenvolvedor Web </Typography>
              <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                <Grid item xs={12} md={4} >
                  <StyledButton onClick={whatsShow}>
                    <WhatsApp />
                    <Typography>whatsapp</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} >
                  <StyledButton onClick={emailShow}>
                    <Email />
                    <Typography>Email</Typography>
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