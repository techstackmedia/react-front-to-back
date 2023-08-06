import { NavLink, useLocation } from 'react-router-dom';
import Card from './shared/Card';
import useFeedback from '../hooks/useFeedback';

const Footer = () => {
  const { isFalse } = useFeedback();
  const { pathname } = useLocation();
  const footer = ['home', 'about'];

  const ft = footer.map((item) => (
    <div key={item}>
      <NavLink
        style={{
          textDecoration:
            (pathname === '/' && item === 'home') ||
            (pathname === '/about' && item === 'about')
              ? 'underline'
              : 'none',
          color: isFalse ? '#fff' : undefined,
        }}
        to={`/${item}` === '/home' ? '/' : item}
      >
        {item.toUpperCase()[0]}
        {item.slice(1)}
      </NavLink>
    </div>
  ));

  return (
    <div className='container'>
      <Card reverse={isFalse}>
        <div className='footer'>{ft}</div>
      </Card>
    </div>
  );
};

export default Footer;
