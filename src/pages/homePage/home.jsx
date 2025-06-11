import styles from "./home.module.css"
import { Navbar } from "../../components/Navbar/navbar"
import { Button } from "../../components/Button/button"
import { Container } from "../../components/Container/container";
import { useNavigate } from 'react-router-dom';
import { useTema } from "../../context/TemaContext";

export function HomePage() {
  const { temaEscuro, alterarTema } = useTema();

  const navigate = useNavigate();

  return (
    <div>
      <Navbar mudarTema={alterarTema} temaEscuro={temaEscuro} />
      <Container temaEscuro={temaEscuro}>
        <div className={styles.box}>
          <Button onClick={() => navigate("/boasVindas")} texto="Entrar" type="button"></Button>
        </div>
      </Container>
    </div>
  )
}