import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: string
  status?: string
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'favorito') return variaveis.amarelo
  } else if ('prioridade' in props) {
    if (props.prioridade === 'amigos') return variaveis.verde
    if (props.prioridade === 'trabalho') return variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 8.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-atems: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const contas = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Reboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #ccc;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0, 1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const Input = styled.input`
  width: 0;
  color: blue;
`

export const IconeContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 24px;
  height: 24px;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: fill 0.3s ease;
  }

  input:checked + svg path {
    fill: ${variaveis.amarelo};
  }
`
