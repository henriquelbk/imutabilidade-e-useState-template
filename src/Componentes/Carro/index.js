import { CarroContainer } from './styles'

export function Carro({ modelo, cor, ano, flex, adicionadoPor,automovel1, setAutomovel}) {

  function alterarCarro() {
    setAutomovel(automovel1)
  }

  return (
    <CarroContainer>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
      <button onClick={alterarCarro}>Mudar Carro</button>
    </CarroContainer>
  )
}
