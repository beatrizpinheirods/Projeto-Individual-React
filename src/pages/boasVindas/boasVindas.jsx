import { Navbar } from "../../components/Navbar/navbar";
import styles from "./boasVindas.module.css"
import { Button } from "../../components/Button/button";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTema } from "../../context/TemaContext";
import { Container } from "../../components/Container/container";

export function BoasVindas() {
  const { temaEscuro, alterarTema } = useTema();


  const navigate = useNavigate();

  const [mensagem, setMensagem] = useState('Olá, Bem vindo(a) a Minha Lista de Tarefas!');

  const handleMensagem = () => {
    setMensagem('Aqui você pode se organizar anotando todas as suas tarefas. Basta cliclar no botão "Lista de tarefas" para começar.')
  }

  return (
    <div>
      <Navbar mudarTema={alterarTema} temaEscuro={temaEscuro} />
       <Container temaEscuro={temaEscuro}>
        <div className={styles.box}>
          <h2>{mensagem}</h2> <br />
          <Button onClick={handleMensagem} texto="Saiba mais" type="button"></Button> <br />
          <br /> <Button onClick={() => navigate("/tarefas")} texto="Lista de tarefas" type="button"></Button>
        </div>
    </Container>

    </div>
  )
}