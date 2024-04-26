import Navbarc from './components/Navbarc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { Toaster } from 'react-hot-toast';
import PostPage from './components/PostPage';
import PriveteRoute from './components/PriveteRoute';
import Render from './pages/Render';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/render" element={<Render />}></Route>
      </Routes>
      <Navbarc />
      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route element={<PriveteRoute />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post/:id" element={<PostPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
