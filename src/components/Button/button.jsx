import styles from './button.module.css'

export function Button({ onClick, texto, type }) {
  return (
    <button className={styles.buttonStyle} onClick={onClick} type={type}>
      {texto}
    </button>
  )
}