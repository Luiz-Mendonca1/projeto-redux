import { useState } from 'react'; 
import styles from './login.module.css'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/user/slice' 

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleLogin(e) {
  e.preventDefault();

  if (!name || !email) {
    alert('Preencha todos os campos!');
    return;
  }

  dispatch(createUser({
    name: name,  // Envia direto no payload
    email: email // Sem aninhar em .user
  }));
  
  // Redireciona após login (exemplo com React Router)
  navigate('/painel'); // Redireciona para a página do painel
}

  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <Link to="/painel">
            <h1 className={styles.title}>Dev Login</h1>
          </Link>

          <form onSubmit={handleLogin} className={styles.form}>
            <input 
              type="text" 
              className={styles.input}
              value={name}
              onChange={ event => setName(event.target.value)}
              placeholder='Digite seu nome....'
            />
            <input 
              type="text" 
              className={styles.input}
              value={email}
              onChange={ event => setEmail(event.target.value)}
              placeholder='Digite seu email...'
            />

            <button type="submit" onClick={handleLogin}>Acessar</button>
          </form>
      </main>
    </div>
  )
}