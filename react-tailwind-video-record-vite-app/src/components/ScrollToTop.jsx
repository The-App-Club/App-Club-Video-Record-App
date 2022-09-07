import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
// https://stackoverflow.com/a/68687869/15972569
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};
export {ScrollToTop};
