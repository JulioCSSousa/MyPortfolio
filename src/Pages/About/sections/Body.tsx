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
                                        Olá! Meu nome é <strong>Julio Cesar da Silva Sousa</strong> e sou um 
                                        <strong> desenvolvedor web apaixonado por tecnologia e inovação</strong>. 
                                        Tenho experiência no desenvolvimento de aplicações web, utilizando tecnologias como 
                                        <strong> C#, ASP.NET MVC, Entity Framework, Node.js, React e MySQL</strong>. 
                                        Meu foco é criar soluções eficientes, escaláveis e bem estruturadas, aplicando 
                                        boas práticas de desenvolvimento de software.
                                        <br /><br />
                                        Atualmente, estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong> 
                                        e desenvolvendo projetos próprios para aprimorar minhas habilidades. 
                                        Um dos meus principais projetos é o <strong>Sistema de Agendamento MVC</strong>, 
                                        que permite que lojistas gerenciem seus serviços e clientes façam agendamentos online.
                                        <br /><br />
                                        Estou sempre aberto a novas oportunidades e desafios na área de tecnologia. 
                                    </Typography>
                                </Grid>
                                {[
                                    { skill: 'C# | ASP.NET MVC', level: '85%' },
                                    { skill: 'Entity Framework | MySQL', level: '80%' },
                                    { skill: 'Node.js | TypeScript', level: '75%' },
                                    { skill: 'React | Frontend', level: '70%' }
                                ].map((item, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Typography variant="h6" component="h3" gutterBottom>
                                            {item.skill}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ flexGrow: 1, heightgit: 10, bgcolor: 'grey.300', mr: 1 }}>
                                                <Box sx={{ width: item.level, height: '100%', bgcolor: 'primary.main' }} />
                                            </Box>
                                            <Typography variant="body2">{item.level}</Typography>
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
