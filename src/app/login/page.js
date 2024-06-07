"use client";
import { useState } from 'react';
import styles from '../../styles/page.module.scss'

export default function Home() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user === 'admin' && password === 'ocean') {
      localStorage.setItem('login', true);
      window.location.href = '/';
    } else {
      alert('Usuário ou senha incorretos');
    }
  }


  return (
    <main className={styles.mainContainer}>
        <div className={styles.loginContainer}>
            <h3>Monitoramento Oceans</h3>
            <span className={styles.space}/>

            <div>   
                <form onSubmit={handleSubmit}>
                    <input placeholder='Usuario' type="text" id="user" name="user" required onChange={e => setUser(e.target.value)} />
                    <input placeholder='Senha' type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    </main>
  );
}
