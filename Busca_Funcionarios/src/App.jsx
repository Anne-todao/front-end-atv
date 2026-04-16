import { useState } from "react";
import CardFuncionario from "./components/CardFuncionario";
import styles from "./App.module.css";

function App() {
  // Lista original intocável
  const listaFuncionarios = [
    { id: 1, nome: "Ana Silva", cargo: "Desenvolvedora Frontend", foto: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, nome: "Carlos Eduardo", cargo: "Engenheiro de Software", foto: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, nome: "Mariana Souza", cargo: "Designer UI/UX", foto: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 4, nome: "Rafael Lima", cargo: "Engenheiro DevOps", foto: "https://randomuser.me/api/portraits/men/22.jpg" },
  ];

    // 1. Estado para guardar o que for digitado na barra de busca
  const [busca, setBusca] = useState("");

  // 2. Lógica de Filtro: .filter() passa por cada funcionário (f).
  // Apenas retornamos os que no nome incluam o texto de "busca".
  // .toLowerCase() converte tudo para minúsculo para evitar erros de maiúscula.
  const funcionariosFiltrados = listaFuncionarios.filter((f) =>
    f.nome.toLowerCase().includes(busca.toLowerCase()) ||
    f.cargo.toLowerCase().includes(busca.toLowerCase())
  );

  return (

    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Diretório de Colaboradores 👥</h1>
        
        {/* Input Controlado pelo Estado */}
        <input 
          type="text" 
          placeholder="Pesquisar por nome ou cargo..." 
          className={styles.barraBusca}
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </header>

      <main className={styles.grid}>
         {/* Renderização Condicional: A lista filtrada tem itens? */}
        {funcionariosFiltrados.length > 0 ? (
          /* Se SIM (Verdadeiro): Fazemos o .map() normalmente na nova lista filtrada */
          funcionariosFiltrados.map((func) => (
            <CardFuncionario key={func.id} dados={func} />
          ))
        ) : (
          /* Se NÃO (Falso): Exibimos uma mensagem que a lista está vazia */
          <div className={styles.vazio}>
            <p>Ops! Nenhum colaborador encontrado com este nome. 🤔</p>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;