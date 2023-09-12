import styled from 'styled-components';

export const DownUp = styled.div `
    width: 7px;
    height: 7px;
    border-left: 2px solid ${props => props.color};
    border-bottom: 2px solid ${props => props.color};
    transform: ${ props => props.$totop ? 'rotate(135deg) translate(0, -2px)' : 'rotate(-45deg)' };
    margin: 10px;
`
