import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App() {

  const [nome, setNome] = useState('Labenu')
  const [automovel, setAutomovel] = useState({
    modelo: "corsa",
    cor: "azul",
    ano: 2005,
    adicionadoPor: nome,
    flex: true,
  })

  const fusca = {
    modelo: "fusca",
    cor: "azul",
    ano: 1975,
    adicionadoPor: nome,
    flex: true,
  }

  const gol = {
    modelo: "gol",
    cor: "prata",
    ano: 2009,
    adicionadoPor: nome,
    flex: false,
  }

  const parati = {
    modelo: "parati",
    cor: "vinho",
    ano: 1984,
    adicionadoPor: nome,
    flex: false,
  }

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nomeGaragem={nome} 
      setNome = {setNome}
      automovel = {automovel}
      setAutomovel={setAutomovel}
      automovel1={fusca} />
    </div>
  )
}
