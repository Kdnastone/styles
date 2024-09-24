import React from 'react';
import '../styles/styles.css';
import '../styles/styles.scss';
import { CardContainer, ProceedButton, CancelLink } from '../styles/StyleCard';
import backImage from '../assets/pattern-background-desktop.svg';
import headerImage from '../assets/illustration-hero.svg';
import musicIcon from '../assets/icon-music.svg';

const Card = () => {

  return (
    <>
      <CardContainer className="card">
        {/* Fondo de la página */}
        <div className="bck_image" 
        style={{ backgroundImage: `url(${backImage})` }}/>

        {/* Componente de la Card */}
        <div className="card-content">
          {/* Imagen principal de la Card */}
          <div className="hero_image">
            <img src={headerImage} alt="Hero" />
          </div>

          {/* El header de la Card */}
          <div className="card_header">
            <h1>Order Summary</h1>
            <p className="description">
              You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </p>
          </div>

          {/* Sección precio */}
          <div className="pricing_section">
            <article>
              <img src={musicIcon} alt="Music Icon" />
              <div className="text">
                <h2>Annual Plan</h2>
                <p>$59.99/year</p>
              </div>
            </article>
            <button className="change_btn">
              Change
            </button>
          </div>

          {/* Botones de acción */}
          <div className="action_buttons">
            <ProceedButton>Proceed to Payment</ProceedButton>
            </div>
            <CancelLink href="/cancel-order">Cancel Order</CancelLink>
        </div>
      </CardContainer>

      {/* Atribuciones fuera del CardContainer */}
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Sandra Cadena</a>.
      </div>
    </>
  );
};

export default Card;
