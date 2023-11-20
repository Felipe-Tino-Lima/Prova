import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Tarefa } from "src/app/models/tarefa.model";

@Component({
  selector: "app-tarefa-listar",
  templateUrl: "./tarefa-listar.component.html",
  styleUrls: ["./tarefa-listar.component.css"],
})
export class TarefaListarComponent {
  colunasTabela: string[] = [
    "id",
    "Titulo",
    "Descricao",
    "Categoria",
    "CriadoEm",
    // "deletar",
    // "alterar",
  ];
  tarefas: Tarefa[] = [];

  constructor(
    private client: HttpClient,
    private snackBar: MatSnackBar
  ) {
    //Um problema de CORS ao fazer uma requisição para a
    //nossa API
  }

  ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:7195/api/produto/listar")
      .subscribe({
        //Requisição com sucesso
        next: (produtos) => {
          console.table(produtos);
          this.produtos = produtos;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(produtoId: number) {
    this.client
      .delete<Produto[]>(
        `https://localhost:7195/api/produto/deletar/${produtoId}`
      )
      .subscribe({
        //Requisição com sucesso
        next: (produtos) => {
          this.produtos = produtos;
          this.snackBar.open(
            "Produto deletado com sucesso!!",
            "E-commerce",
            {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            }
          );
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
