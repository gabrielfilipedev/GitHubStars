import React from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <a href="https://todo-vue-rho-ten.vercel.app">
          <Projeto />
        </a>
      </li>
      <li>
        <a href="https://seu-segundo-link-aqui">
          <Projeto />
        </a>
      </li>
      <li>
        <a href="https://seu-terceiro-link-aqui">
          <Projeto />
        </a>
      </li>
      <li>
        <a href="https://seu-quarto-link-aqui">
          <Projeto />
        </a>
      </li>
      <li>
        <a href="https://seu-quinto-link-aqui">
          <Projeto />
        </a>
      </li>
      <li>
        <a href="https://seu-sexto-link-aqui">
          <Projeto />
        </a>
      </li>
      <li>
        <a href="https://seu-sétimo-link-aqui">
          <Projeto />
        </a>
      </li>
      <li>
        <a href="https://seu-oitavo-link-aqui">
          <Projeto />
        </a>
      </li>
      <li>
        <a href="https://seu-nonot-link-aqui">
          <Projeto />
        </a>
      </li>
      <li>
        <a href="https://seu-décimo-link-aqui">
          <Projeto />
        </a>
      </li>
    </Lista>
  </section>
)

export default Projetos
