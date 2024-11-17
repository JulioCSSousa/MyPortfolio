import Slider from 'react-slick';
import { Container, Typography, Box, Paper} from '@mui/material';
import { FaDesktop, FaCode, FaServer } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
    { id: 1, title: 'UI e UX', icon: <FaDesktop />, number: '01' },
    { id: 2, title: 'Programação', icon: <FaCode />, number: '02' },
    { id: 5, title: 'Infraestrutura', icon: <FaServer />, number: '03' },
];

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', py: 4, marginBottom: '100px' }}>
            <Container >
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h4" component="h2">
                        Serviços
                    </Typography>
                </Box>
                <Slider {...settings}>
                    {services.map(service => (
                        <Box key={service.id} sx={{ px: 2 }}>
                            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                                <Typography variant="h5" component="p" sx={{ mb: 2 }}>
                                    {service.number}
                                </Typography>
                                <Box sx={{ fontSize: 40, mb: 2 }}>
                                    {service.icon}
                                </Box>
                                <Typography variant="h6" component="p">
                                    {service.title}
                                </Typography>
                            </Paper>
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default Services;
