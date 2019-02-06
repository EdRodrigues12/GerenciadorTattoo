export class Cliente {
  id: number;
  nome: string;
  idTatuagem = new Tattoo();
  idTelefone = new Telefone();
  idAgendaMarcada = new Horario();
}

export class Telefone {
  id: number;
  numero: string;
  dd: string;
}

export class Horario {
  id: number;
  hora = new Horarios();
  data: Date;
}

export class Tattoo {
  id: number;
  imagemTattoo: string;
  caminhoTatuagem: string;
}

export class Horarios {
  id: number;
  hora: string;
}
