import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

export function Home() {
const user = useSelector((rootReducer) => rootReducer.user)
 const currentUser = useSelector((state) => state.user.currentUser);


  function handleDeleteAddress(){
    alert("Endereço deletado com sucesso!")
  }

  return (
    <>
    <Header/>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {currentUser?.name || 'visitante'}, bem vindo!
            </h1>

            <span>Email: {currentUser.email || 'sem info'}</span>


            <strong className={styles.addressLabel}>Endereço atual:</strong>
            <div className={styles.address}>
              <p>
          {currentUser.address.street || 'Rua não informada'}, 
          n° {currentUser.address.number || 'SN'}
        </p>
              <button onClick={handleDeleteAddress}>Deletar endereço</button>
            </div>

          </div>

        </main>
      </div>
    </>
  )
}
