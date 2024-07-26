import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';

const About: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', py: 4 }}>
            <Container>
                <Grid container spacing={3} my="2rem" justifyContent={'center'}>
                    <Grid item xs={12} sm={8}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" component="h2" gutterBottom>
                                        Sobre mim
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        Olá! Sou desenvolvedor web, tenho 30 anos e estou na faculdade de ADS. Estou à procura de
                                        projetos que possam me ajudar a fazer uma renda extra. Posso desenvolver uma landing page ou uma API simples para você.
                                        Tenho sólida experiência em desenvolvimento com python, node-js e react
                                    </Typography>
                                </Grid>
                                {['HTML | CSS', 'JavaScript', 'React'].map((skill, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Typography variant="h6" component="h3" gutterBottom>
                                            {skill}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ flexGrow: 1, height: 10, bgcolor: 'grey.300', mr: 1 }}>
                                                <Box sx={{ width: '80%', height: '100%', bgcolor: 'primary.main' }} />
                                            </Box>
                                            <Typography variant="body2">80%</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default About;
