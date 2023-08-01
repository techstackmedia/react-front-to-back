import { NavLink, useLocation } from 'react-router-dom';
import Card from './shared/Card';

const Footer = () => {
  const { pathname } = useLocation();
  const footer = ['home', 'about'];
  const ft = footer.map((item) => {
    return (
      <div key={item}>
        <NavLink
          style={{
            textDecoration:
              pathname === '/' && item === 'home'
                ? 'underline'
                : pathname === '/about' && item === 'about'
                ? 'underline'
                : 'none',
          }}
          to={`/${item}` === '/home' ? '/' : item}
        >
          {item.toUpperCase()[0]}
          {item.slice(1)}
        </NavLink>
      </div>
    );
  });

  return (
    <div className='container'>
      <Card>
        <div className='footer'>{ft}</div>
      </Card>
    </div>
  );
};

export default Footer;
