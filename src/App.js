import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ServerError from './components/Error/Server';
import NotFoundError from './components/Error/NotFound';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/500' element={<ServerError />} />
        <Route path='*' element={<NotFoundError />} />
        <Route path='/details/:id' element={<Detail />}/>
        <Route path='/details/:id/*' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
