// import {useForm} from 'react-hook-form';
import React from 'react'
import './App.css'
import Home from './components/Home'

const  App = () => {
  // const {register,handleSubmit}=  useForm();


  // const createSala = (dados) => {
  //   event.preventDefault();
  // }

  return (
    <>

    <Home />
        {/* <form onSubmit={handleSubmit(createSala)}>
        <h3>Cadastro de Sala</h3>
       <label htmlFor='sala_nome'>Nome da sala</label>
       <input  
       type='text' 
       id='sala_nome'
       {...register("nome")}
        required />
       <label htmlFor='sala_status'>Status</label>
       <select id='sala status'>
       <option value={1}>livre</option>
       <option value={2}>Ocupada</option>
       </select>
       <button type='submit'>Enviar</button>
       </form>  */}
    </>
  )
}

export default App
