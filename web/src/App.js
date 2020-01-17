import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//3 Conceitos de React

// Componente: é um bloco (função) isolado que retorna algum conteúdo HTML, CSS, JS, que não interfere em outros blocos
// Propriedade: informações que um componente PAI passa para o componente filho
// Estado: informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [ devs, setDevs ] = useState([]);

   useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]); //Adicionar um valor no array
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
       
      </aside>
      
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );

}

export default App;
