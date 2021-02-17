import { useState, useEffect } from 'react'
import Button from './components/Button.js'
import Users from './components/Users.js'
import Form from './components/Form.js';

function App() {
  const [count, setCount] = useState(1)
  const [users, setUsers] = useState(
    [
        {
            id:0,
            pseudo:'Imad',
            password:'Feb',
            team: [{

            }]
        },
        {
            id:1,
            pseudo:'Yahya',
            password:'Jan',
            team: [{

            }]
        },
        {
            id:2,
            pseudo:'RZK',
            password:'mars',
            team: [{

            }]
        },
        {
          id:3,
          pseudo:'Saad',
          password:'mars',
          team: [{

          }]
      },
    ]
)

// Use effects
useEffect(()=>{
console.log("Test use effect number :"+count)
setCount(count+1)
},[users])

// Recuperation de 'ID de l'utilisateur
var u ;
const selectID = (id)=>{
  u = id;
  console.log({"u": u});
}

// Demander une pause
var d=1;
const Demander = () => {
  const id =Math.max.apply(Math,users.map(function(A){return A.id}))+1
  const pseudo = "Mohammed"
  const password ="BBB"
  const team =[ ]
  const newUser = {id,pseudo,password,team}
  setUsers([...users,newUser])
}

 //Modifier Position / Prolanger une Pause
const Prolonger = () => {
  if(u==null){ alert("selectioner un utilisateur") }
  else if(Math.max.apply(Math,users.map(function(A){return A.id})) == u){ 
    alert("Il est deja en bas de la file d'attente") 
  }
  else {
  console.log(Math.max.apply(Math,users.map(function(A){return A.id}))+ " is Max") // Return max des utilisateurs
  console.log(users.find(g => u == g.id)) // voir l'objet filtrer 
  const Filter = users.find(g => u == g.id) // Objet filtrer
  const newListe = users.filter((item) => item.id !== u); // Extraction de la nouvelle liste avat modification
  Filter.id =Math.max.apply(Math,users.map(function(A){return A.id}))+1 // modification de l'id
  setUsers([...newListe,Filter]) // Nouvelle Liste
  setCount(count +1)
}
}

// Supprimer de la liste d'attente
const Supprimer =() => {if(u==null){ alert("selectioner un utilisateur") }
else{
  const newListe = users.filter((item) => item.id !== u);
  setUsers([...newListe])
}
}
// Ajouter un users
const addUser = (user) => {
  const id = Math.max.apply(Math,users.map(function(A){return A.id}))+1
  const newUser={id,...user}
  setUsers([...users, newUser])
}

// Users Up
const goUP = () => {
  var A =users
  A[u] = A.splice(1,1,A[u])[0]
alert(A)

}

// Users down
const goDown = (user) => {
  const id = Math.max.apply(Math,users.map(function(A){return A.id}))+1
  const newUser={id,...user}
  setUsers([...users, newUser])
}
  return (
    <div className="flex-container">
    <div className="Form"><Form onAdd={addUser}/></div>
    <div className="List"><Users users={users} selectid={selectID} /></div>
    <div className="Button">
      <Button color='Green' text='Demander' onClick={Demander} />
      <Button color='Orange' text='Prolonger' onClick={Prolonger} />
      <Button color='Red' text='Supprimer'  onClick={Supprimer}/>
      {/* <Button color='grey' text='Up'  onClick={goUP}/> // c'est fini */}
      {/* <Button color='grey' text='SupprDownr'  onClick={goDown}/> */}
    </div>
    </div>
  );
}

export default App;