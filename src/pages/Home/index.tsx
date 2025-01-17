import BotaoAdicionar from '../../components/BotaoAdicionar/indetx'
import BarraLateral from '../../containers/BarraLateral'
import ListaDetarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDetarefas />
    <BotaoAdicionar />
  </>
)

export default Home
