import { Navigate } from 'react-router-dom';

const Blog = () => {
  const status = 500;

  if (status === 500) {
    return <Navigate to='/notfound' />;
  } else {
    return <div className='container'>Hello World!</div>;
  }
};

export default Blog;