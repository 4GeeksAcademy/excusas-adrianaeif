/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function aleatoriolista(lista) {
    let numeroaleatorio = Math.floor(Math.random() * lista.length);
    return lista[numeroaleatorio] + " ";
  }

  let who = ["Mi gato Sergio", "Patricia", "Mi papa", "Mi computador"];
  let action = ["comió", "revisó", "rompió"];
  let what = ["mi tarea", "mi casa", "mi té"];
  let when = ["antes de clase", "ayer", "esta semana"];

  console.log(
    aleatoriolista(who) +
      aleatoriolista(action) +
      aleatoriolista(what) +
      aleatoriolista(when)
  );
};
