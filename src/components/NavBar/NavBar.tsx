import { AppBar, MenuItem, Toolbar, styled, colors, Link } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';


const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",

    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem><Link component={RouterLink} to="/" color="inherit" underline="none">
                        Home</Link></MenuItem>
                    <MenuItem><Link component={RouterLink} to="/About" color="inherit" underline="none">
                        About</Link></MenuItem>
                    <MenuItem><Link component={RouterLink} to="/Projects" color="inherit" underline="none">
                        Projects</Link></MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}
export default NavBar