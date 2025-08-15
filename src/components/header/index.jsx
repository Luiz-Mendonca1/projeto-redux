import styles from './header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/user/slice';

export function Header(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  function handleLogin(){
    navigate("/")
  }

  function handleLogout(){
    dispatch(logoutUser())
    navigate("/")
  }

  return(
    <header>
      <div className={styles.content}>
        <Link to="/painel">
          <h1>Dev<span>Redux</span></h1>
        </Link>

        {currentUser ? (
          <button className={styles.logout} onClick={handleLogout}>
            Sair
          </button>
        ) : (
          <button className={styles.login} onClick={handleLogin}>
            Fazer login
          </button>
        )}
      </div>
    </header>
  )
}