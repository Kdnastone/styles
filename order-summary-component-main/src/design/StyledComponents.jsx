
/*Personalizaciones de botones y el contenedor principal*/

import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #B7C9F2;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
`;

export const ProceedButton = styled.button`
    background-color: #007F73;
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }
`;

export const CancelLink = styled.a`
    color: #dc3545;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;

    &:hover {
        text-decoration: underline;
    }
`;
/*ok*/
