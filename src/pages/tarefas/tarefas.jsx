import { Navbar } from "../../components/Navbar/navbar";
import styles from "./tarefas.module.css"
import { Button } from "../../components/Button/button";
import { useState } from "react";

export function Tarefas() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const mudarTema = () => {
    setTemaEscuro(!temaEscuro)
  }

  const [listaTarefas, setListaTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");

  const addTarefas = () => {
    if (tarefa.trim() === "") return
    setListaTarefas([...listaTarefas, tarefa]);
    setTarefa("");
  }


  return (
    <div>
      <Navbar mudarTema={mudarTema} temaEscuro={temaEscuro} />
      <div className={`${styles.container} ${temaEscuro ? styles.escuro : styles.claro}`}>
        <div className={styles.box}>
          <h2>Lista de Tarefas:</h2> <br />
          <form onSubmit={(e) => { e.preventDefault(); addTarefas(); }} className={styles.form}>
            <input className={styles.inputStyle}
              type="text"
              placeholder="Digite aqui sua tarefa"
              value={tarefa}
              onChange={(e) => setTarefa(e.target.value)}
            />
            <Button onClick={addTarefas} texto="Adicionar tarefa" type="submit"></Button>

            {listaTarefas.map((t, index) => (
              <input className={styles.inputStyle} type="text" value={t} key={index}></input>
            ))}
          </form>
        </div>
      </div>
    </div>
  )

}