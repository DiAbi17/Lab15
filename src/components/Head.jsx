import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => (
  <header style={{ background: '#eee', padding: '1rem', position: 'sticky', top: 0 }}>
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/">Новости</Link>
      <Link to="/about">О проекте</Link>
      <Link to="/contacts">Контакты</Link>
    </nav>
  </header>
);

export default Head;