import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
      <a href="https://todo-vue-rho-ten.vercel.app">
        <LinkBotao>Visualizar</LinkBotao>
      </a>
    </Card>
  )
}

export default Projeto
