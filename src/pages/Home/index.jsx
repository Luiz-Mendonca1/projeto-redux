import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { deleteAddress, fetchUsers } from '../../redux/user/slice'

export function Home() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);


  function handleDeleteAddress() {
    dispatch(deleteAddress());
    alert("Endereço deletado com sucesso!");
  }

 function handleFetchUsers() {
  dispatch(fetchUsers()); }
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

            <span>Email: {currentUser?.email || 'sem info'}</span>

            <strong className={styles.addressLabel}>Endereço atual:</strong>
            <div className={styles.address}>
              <p>
                {currentUser?.address?.street || 'Rua não informada'}, 
                n° {currentUser?.address?.number || 'SN'}
              </p>
              <button onClick={handleDeleteAddress}>Deletar endereço</button>
            </div>

            <br />
            <br />
            <h2>Lista de ususarios</h2>
            <button onClick={handleFetchUsers}>Buscar ususarios</button>
          </div>

        </main>
      </div>
    </>
  )
}
