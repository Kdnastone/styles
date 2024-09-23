import React, { useState } from 'react';
import './musicPlanCard.css';
import './musicPlanCard.scss';
import { CardContainer, ProceedButton, CancelLink } from './StyledComponents';
import backImage from '../images/back.jpeg';

const MusicPlanCard = () => {
    const [plan, setPlan] = useState('monthly');

    const getPrice = () => {
        return plan === 'monthly' ? '$18.000 COP' : '$200.000 COP';
    };

    return (
        <CardContainer className="card">
            <img src={backImage} alt="Plan de Música" />
            <h2>Plan Premium</h2>
            <p className="description">Disfruta de música sin anuncios y descarga tus canciones favoritas.</p>
            <div className="plan-selection">
                <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                    <option value="monthly">Mensual</option>
                    <option value="yearly">Anual</option>
                </select>
                <span>{getPrice()}</span>
                <a href="/change-plan">Cambiar</a>
            </div>
            <div className="actions">
                <ProceedButton>Proceder con el Pago</ProceedButton>
                <CancelLink href="/cancel-order">Cancelar Orden</CancelLink>
            </div>
        </CardContainer>
    );
};

export default MusicPlanCard;
/*ok*/