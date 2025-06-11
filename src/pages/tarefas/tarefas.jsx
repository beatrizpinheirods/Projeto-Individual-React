import { Navbar } from "../../components/Navbar/navbar";
import styles from "./tarefas.module.css"
import { Button } from "../../components/Button/button";
import { useState } from "react";
import { Container } from "../../components/Container/container"
import { useTema } from "../../context/TemaContext";

export function Tarefas() {
  const { temaEscuro, alterarTema } = useTema();

  const [listaTarefas, setListaTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");

  const addTarefas = () => {
    if (tarefa.trim() === "") return
    setListaTarefas([...listaTarefas, tarefa]);
    setTarefa("");
  }


  return (
    <div>
      <Navbar mudarTema={alterarTema} temaEscuro={temaEscuro} />
      <Container temaEscuro={temaEscuro}>
        <div className={styles.box}>
          <h2>Lista de Tarefas:</h2> <br />
          <form onSubmit={(e) => { e.preventDefault(); addTarefas(); }}>
            <input
              type="text"
              placeholder="Digite aqui sua tarefa"
              value={tarefa}
              onChange={(e) => setTarefa(e.target.value)}
            />
            <Button onClick={addTarefas} texto="Adicionar tarefa" type="submit"></Button>

            {listaTarefas.map((t, index) => (
              <input type="text" value={t} key={index}></input>
            ))}
          </form>
        </div>
      </Container>
    </div>
  )

}