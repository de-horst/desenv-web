import React, { Component } from "react";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (
      e.target.email.value === "denise.horst@pucpr.br" &&
      e.target.password.value === "123456"
    ) {
      alert("Acessado com sucesso!");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };


  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email </label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Senha </label>
            <input type="password" name="password" />
          </div>
          <button>Acessar</button>
        </form>
      </div>
    );
  }
}

export default App;
