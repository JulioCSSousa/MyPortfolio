import { AppBar, MenuItem, Toolbar, styled, Link } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';


const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",

    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <Link component={RouterLink} to="/" color="inherit" underline="none">
                        <MenuItem>
                            Home</MenuItem></Link>
                    <Link component={RouterLink} to="/About" color="inherit" underline="none">
                        <MenuItem>
                            About</MenuItem></Link>
                    <Link component={RouterLink} to="/Projects" color="inherit" underline="none">
                        <MenuItem>
                            Projects</MenuItem></Link>
                </StyledToolbar>
            </AppBar>
        </>
    )
}
export default NavBar