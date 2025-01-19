import * as enums from '../utils/enums/contato'

class Contatos {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  email: string
  telefone: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    email: string,
    telefone: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contatos
