import styles from "./navbar.module.css";

export function Navbar({ mudarTema, temaEscuro }) {
  return (
    <nav className={styles.navbar}>
      <h3>Minha Lista de Tarefas</h3>

      <button onClick={mudarTema}>
        {temaEscuro ? 'Trocar para modo claro' : 'Trocar para modo escuro'}
      </button>

    </nav>
  )
}