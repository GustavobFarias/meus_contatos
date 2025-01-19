import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { Botao, Campo } from '../../styles'
import BotaoAdicionar from '../../components/BotaoAdicionar'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Busca de contato"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.FAVORITO}
                criterio="status"
                legenda="favoritos"
              />
              <FiltroCard
                valor={enums.Status.NORMAL}
                criterio="status"
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
            <BotaoAdicionar />
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar aos contatos</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
