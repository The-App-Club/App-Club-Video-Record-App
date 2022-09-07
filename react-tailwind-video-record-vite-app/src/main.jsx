import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {HomePage} from './pages/home';
import {NotFoundPage} from './pages/not-found';

import '@fontsource/inter';
import './styles/index.css';
import './styles/index.scss';

const App = () => {
  const location = useLocation();
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
      `}
    >
      <Header />

      <main className={cx(css``)}>
        <article>
          <Routes location={location}>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/*'} element={<NotFoundPage />} />
          </Routes>
        </article>
      </main>
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
