import { Box, Button, Container, Grid, Typography, Link } from "@mui/material";
import './Body.css';
import Logo from '/assets/logo-no-b.gif';
import { Link as RouterLink } from 'react-router-dom';
import { AnimatedBackground } from "../../../components/Animation/Animation";

export default function Body() {
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                height: '100%',
                display: "flex",
                alignItems: "center",
                marginTop: '50px',
            }}>
            <Container maxWidth="lg">
                <Grid container spacing={2} my='2rem'>
                    {/* Card 1 */}
                    <Grid item xs={12} sm={6} p='1rem'>
                        <Box border='1px solid black' borderRadius='10px' height='20rem' bgcolor={'beige'}>
                            <Box className="card-container" m='1rem' height='15rem' display={'flex'} alignContent={'center'} justifyContent={'center'}>
                                <Box className="card-btn" display={'flex'} alignContent={'center'} justifyContent={'center'}>
                                    <Link component={RouterLink} to="https://lar-doce-ar.netlify.app" color="inherit" underline="none">
                                        <Box className="btn-site">
                                            <Button>Ver site</Button>
                                        </Box>
                                    </Link>
                                    <Link component={RouterLink} to="https://github.com/JulioCSSousa/front-ecommerce" color="inherit" underline="none">
                                        <Box className="btn-site">
                                            <Button>Ver Código</Button>
                                        </Box>
                                    </Link>
                                </Box>
                                <Box className="img-container">
                                    <img src={Logo} alt="" />
                                </Box>
                            </Box>
                            <Typography textAlign='center'>Lar Doce Ar Web client</Typography>
                        </Box>
                    </Grid>

                    {/* Card 2 */}
                    <Grid item xs={12} sm={6} p='1rem'>
                        <Box border='1px solid black' borderRadius='10px' height='20rem' bgcolor={'lightgrey'}>
                            <Box className="card-container" m='1rem' height='15rem' display={'flex'} alignContent={'center'} justifyContent={'center'}>
                                <Box className="card-btn" display={'flex'} alignContent={'center'} justifyContent={'center'}>
                                    <Box className="btn-site">
                                        <Link component={RouterLink} to="https://back-ecommerce-wl58.onrender.com/" color="inherit" underline="none">
                                            <Button>Ver site</Button>
                                        </Link>
                                    </Box>
                                    <Link component={RouterLink} to="https://github.com/JulioCSSousa/back-ecommerce" color="inherit" underline="none">
                                        <Box className="btn-site">
                                            <Button>Ver Código</Button>
                                        </Box>
                                    </Link>
                                </Box>
                                <Box className="img-container">
                                    <img src={Logo} />
                                </Box>
                            </Box>
                            <Typography textAlign='center'>Lar Doce Ar Server</Typography>
                        </Box>
                    </Grid>

                    {/* Card 3 */}
                    <Grid item xs={12} sm={6} p='1rem'>
                        <Box border='1px solid black' borderRadius='10px' height='20rem' bgcolor={'#232323'}>
                            <Box className="card-container" m='1rem' height='15rem' display={'flex'} alignContent={'center'} justifyContent={'center'}>
                                <Box className="card-btn" display={'flex'} alignContent={'center'} justifyContent={'center'}>
                                    <Link component={RouterLink} to="https://github.com/JulioCSSousa/MyPortfolio" color="inherit" underline="none">
                                        <Box className="btn-site" position={'relative'} top={'200px'} justifyContent={'center'}>
                                            <Button><Typography color={'white'}>Ver Código</Typography></Button>
                                        </Box>
                                    </Link>
                                </Box>
                                <AnimatedBackground />
                            </Box>
                            <Box bottom={'20px'} position={'relative'}>
                                <Typography textAlign='center' color={'white'}>Julio Sousa</Typography>
                                <Typography textAlign='center' color={'white'}>Portfolio</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {/* Card 4 */}
                    <Grid item xs={12} sm={6} p='1rem'>
                        <Box border='1px solid black' borderRadius='10px' height='20rem' bgcolor={'#4e73df'}>
                            <Box className="card-container" m='1rem' height='15rem' display={'flex'} alignContent={'center'} justifyContent={'center'}>
                                <Box className="card-btn" display={'flex'} alignContent={'center'} justifyContent={'center'}>
                                    <Link component={RouterLink} to="https://appointmentapp-n24v.onrender.com/" color="inherit" underline="none">
                                        <Box className="btn-site">
                                            <Button>Ver site</Button>
                                        </Box>
                                    </Link>
                                    <Link component={RouterLink} to="https://github.com/JulioCSSousa/appointmentApp" color="inherit" underline="none">
                                        <Box className="btn-site">
                                            <Button>Ver Código</Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </Box>
                            <Typography textAlign='center'>AppMVC de Agendamento Salão</Typography>
                        </Box>
                    </Grid>
                    
                </Grid>
            </Container>
        </Box>
    );
}
