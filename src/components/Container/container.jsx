import styles from "./container.module.css";

export function Container({ children, temaEscuro }) {
  return (
    <div className={`${styles.container} ${temaEscuro ? styles.escuro : styles.claro}`}>
      {children}
    </div>
  )
}