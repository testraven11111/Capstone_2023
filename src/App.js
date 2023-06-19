import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Resep from './pages/Resep';
import Upload from './pages/Upload';
import About from './pages/About';
import Single from './pages/Single';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <Single />,
      },
      {
        path: '/upload',
        element: <Upload />,
      },
      {
        path: '/resep',
        element: <Resep />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
