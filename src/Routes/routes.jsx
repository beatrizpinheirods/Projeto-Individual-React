import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homePage/home"
import { BoasVindas } from "../pages/boasVindas/boasVindas"
import { Tarefas } from "../pages/tarefas/tarefas"

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/boasVindas" element={<BoasVindas />} />
      <Route path="/tarefas" element={<Tarefas />} />
    </Routes>
  )

}