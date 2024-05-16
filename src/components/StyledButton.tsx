import styled from "@emotion/styled"
import theme from "../theme"
import { ReactNode } from "react"

interface StyledButtonPros{
    children:ReactNode
}
const StyledButton : React.FC<StyledButtonPros> = ({ children }) =>{

    const StyledButton = styled("button")(() => ({
        backgroundColor: "transparent",
        border: `3px solid white ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        alignItems: "center",
        justifyContent: "center",
        display: "inline-flex",
        gap: "10px",
        '&:hover': {
            backgroundColor : theme.palette.secondary.main
        }


    }))

    return (
        <>
        <StyledButton>{children}</StyledButton>
        </>
    )
}
export default StyledButton