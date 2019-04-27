import styled from 'styled-components';

export const ButtonContainer= styled.button`
text-transform:capitalize;
font-size: 1.4rem;
border: 0.05 rem solid var(--mainGreen);
border-color:${props => props.cart? "var(--mainBlack)": "var(--mainGreen)"};
color:${props => props.cart? "var(--mainBlack)": "var(--mainGreen)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem;
transition: all 0.5 ease-in-out;
&:hover {
    background:var(--mainYellow);
}
`;
