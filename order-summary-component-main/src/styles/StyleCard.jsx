
/*Personalizaciones de botones y el contenedor principal*/

import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #FEFBF6;
    width: 85%;
    max-width: 400px;
    background-color: #fff;
    display: flex;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    border-radius: 12px;
    margin: auto;
    box-shadow: 0px 6px 31px -1px rgba(135, 153, 207, 0.3);
`;

export const ProceedButton = styled.button`
    background-color: #1230AE;
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
    color: #3C3D37;
    text-decoration: none;
    text-size: 14px;
    padding: 10px 10px;
    font-weight: bold;
    margin-top: 10px;
    display: inline-block;

    &:hover {
        text-decoration: underline;
        color: #F5004F;
    }
`;
/*ok*/
