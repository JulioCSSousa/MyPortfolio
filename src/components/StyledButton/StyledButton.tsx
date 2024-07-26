import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import theme from '../../theme';

interface StyledButtonProps {
    children: ReactNode;
    onClick?: () => void; 
}

const StyledButtonComponent = styled('button')(() => ({
    backgroundColor: 'transparent',
    border: `3px solid white ${theme.palette.primary.contrastText}`,
    borderRadius: '3px',
    padding: '5px 15px',
    width: '100%',
    color: theme.palette.primary.contrastText,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'inline-flex',
    gap: '10px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    return (
        <StyledButtonComponent onClick={onClick}>
            {children}
        </StyledButtonComponent>
    );
};
export default StyledButton