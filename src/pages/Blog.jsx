import { Navigate } from 'react-router-dom';

const Blog = () => {
  const status = 500;

  if (status === 500) {
    return <Navigate to='/notfound' />;
  } else {
    return <div className='container'>This is a blog page</div>;
  }
};

export default Blog;
