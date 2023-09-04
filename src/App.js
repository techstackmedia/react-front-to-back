import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ServerError from './components/Error/Server';
import NotFoundError from './components/Error/NotFound';
import Detail from './pages/Detail';
import Signin from './pages/Signin';
import Register from './pages/Register';
import PrivateRoutes from './utils/privateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/500' element={<ServerError />} />
        <Route path='*' element={<NotFoundError />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/details/:id/*' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
