import { Box, Container, Grid, Typography } from "@mui/material"

export default function Body() {
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                height: { xs: '100%', sm: "100vh" },
                display: "flex",
                alignItems: "center"
            }}>
            <Container maxWidth="lg">
                <Grid container spacing={1} my='2rem'>
                    <Grid item xs={12} sm={6} p='1rem'>
                        <Box border='1px solid black' borderRadius='10px' height='20rem' >
                            <Box m='1rem' height='15rem' bgcolor='yellow'>
                                imagem
                            </Box>
                            <Typography textAlign='center'>Texto aqui</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} p='1rem'>
                        <Box border='1px solid black' borderRadius='10px' height='20rem' >
                            <Box m='1rem' height='15rem' bgcolor='yellow'>
                                imagem
                            </Box>
                            <Typography textAlign='center'>Texto aqui</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
