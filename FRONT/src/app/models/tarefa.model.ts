import { Categoria } from "./categoria.models";

export interface Tarefa {
    TarefaId?: number;
    Titulo: string;
    Descricao: string;
    CriadoEm?: string;
    Status: string;
    CategoriaId: number;
    Categoria?: Categoria;
  }