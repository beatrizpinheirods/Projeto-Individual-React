import styles from "./home.module.css"
import { Navbar } from "../../components/Navbar/navbar"
import { Button } from "../../components/Button/button"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export function HomePage() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const mudarTema = () => {
    setTemaEscuro(!temaEscuro)
  }

  const navigate = useNavigate();

  return (
    <div>
      <Navbar mudarTema={mudarTema} temaEscuro={temaEscuro} />
      <div className={`${styles.container} ${temaEscuro ? styles.escuro : styles.claro}`}>
        <div className={styles.box}>
          <Button onClick={() => navigate("/boasVindas")} texto="Entrar" type="button"></Button>
        </div>
      </div>
    </div>
  )
}