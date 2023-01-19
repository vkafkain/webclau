import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Post } from './components/Post';
import { Layout } from './components/Layout';
import { IndexPage } from './pages/IndexPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

export function App() {
  return (
    <Routes>
      <Route path='/' element={ <Layout/ >}>
      <Route index element={ <IndexPage /> } />
      <Route path={'/login'} element={ <LoginPage /> } />
      <Route path={'/register'} element={ <RegisterPage /> } />
      </Route>
    </Routes>
  );
}
