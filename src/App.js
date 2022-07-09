import React, {Component} from "react";

class Atividade extends Component{
  state = {
    nome: 'Gabriel',
    idade: 18,
    comidaFavorita: 'Hamburguer',
    musica: ['Say You Will', 'Lie Like You Want Me Back', 'Heaven is a Place in My Head']
  };

  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ul>
      </div>
    );
  }
}

export default Atividade;