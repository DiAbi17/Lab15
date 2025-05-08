import React from 'react';
import img from '../assets/image.jpg';

const Section = () => (
  <section style={{ padding: '1rem' }}>
    <img src={img} alt="Пример" style={{ maxWidth: '100%' }} />
  </section>
);

export default Section;