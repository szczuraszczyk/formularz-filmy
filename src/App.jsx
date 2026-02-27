import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function dodajFilm(){
  let tytulFilmu = document.getElementById("tytul-filmu").value;
  let selectRodzaj = document.getElementById("select-rodzaj").value;
  console.log("Tytuł: " + tytulFilmu + ", rodzaj: " + selectRodzaj);
  }

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tytul-filmu">Tytuł filmu: </label>
        <input type="text" name="tytul-filmu" id="tytul-filmu" /><br />
        <label htmlFor="select-rodzaj">Rodzaj: </label>
        <select name="select-rodzaj" id="select-rodzaj">
          <option value="empty">pusta</option>
          <option value="1">Komedia</option>
          <option value="2">Obyczajowy</option>
          <option value="3">Sensacyjny</option>
          <option value="4">Horror</option>
        </select> <br />
        <input type="submit" value="Dodaj" onClick={dodajFilm}/>
      </form>
    </>
  )
}

export default App
