import {css, cx} from '@emotion/css';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header
      className={cx(
        css`
          position: fixed;
          z-index: 1;
          top: 0;
          width: 100%;
          min-height: 3rem;
        `,
        'flex items-center relative bg-white'
      )}
    >
      <Link to={'/'} className={`flex items-center gap-1`}>
        <img src={logo} alt={'logo'} className={`w-10`} />
        <h2 className="text-xl">Make YourSelf</h2>
      </Link>
    </header>
  );
};

export {Header};
