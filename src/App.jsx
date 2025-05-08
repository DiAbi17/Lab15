import React from 'react';
import Head from './components/Head';
import Footer from './components/Footer';
import Section from './components/Section';
import Aside from './components/Aside';
import { Routes, Route } from 'react-router-dom';
import News from './pages/News';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

const App = () => (
  <>
    <Head />
    <main style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', flex: 1, borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
      <Section />
      <article style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </article>
      <Aside />
    </main>
    <Footer />
  </>
);

export default App;