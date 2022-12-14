// **Descrizione:**
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// **Bonus**
// Creare un loading e far comparire gli indirizzi email solamente quando sono stati TUTTI generati.



const { createApp } = Vue;

//console.log(axios);


createApp({
  
  data(){
    return{
      title: 'email',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      listaMail: []
    }
  },
  

}).mount('#app');