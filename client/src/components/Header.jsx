import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:3000/profile', {
      credentials: 'include'
    }).then(res => {
      res.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })
  }, [])

  function logout() {
    fetch('http://localhost:3000/logout', {
      method: 'POST',
      credentials: 'include'
    })
    setUserInfo(null);
  }

  const email = userInfo?.email;

  return (
    <header>
      <Link to="/" className="logo">
        Blog talleres naturales
      </Link>
      <nav>
        {email && (
          <>
            <Link to='/create'>Create new post</Link>
            <a onClick={logout}>Logout ({email})</a>
          </>
        )}
        {!email && (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
