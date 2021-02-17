import { useState, useEffect } from 'react'
import Button from './components/Button.js'
import Users from './components/Users.js'
import './App.css';

function App() {

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
const [pauses, setPauses] = useState(
  [
      {
          id:1,
          dateDemande:'Imad',
          dateDebut:'Feb',
          IDUser: [3]
      },
      {
        id:2,
        dateDemande:'Imad',
        dateDebut:'Feb',
        IDUser: [1]
      },
      {
        id:3,
        dateDemande:'Imad',
        dateDebut:'Feb',
        IDUser: [4]
      },
      {
        id:4,
        dateDemande:'Imad',
        dateDebut:'Feb',
        IDUser: [2]
        }
  ]
)

// Use effects
useEffect(()=>{
console.log("Test use effect number :"+d)

})
// Variabe du user
var u ;
const selectID = (id)=>{
  u = id;
  console.log({"u": u});
}

// Button onClic Depasser
var d=1;
const Demander = () => {
  const id =users.length +d
  const pseudo = "Mohammed"
  const password ="BBB"
  const team =[ ]
  const newUser = {id,pseudo,password,team}
  setUsers([...users,newUser])
  console.log(d)
}
const Depanner = () => { //solution newUser
  const id =users.length +1
  const pseudo = users[u].pseudo
  const password =users[u].password
  const team =users[u].team
  const key =users.length +1
  const modifUser = {id,pseudo,password,team,key}
  const newListe = users.filter((item) => item.id !== u);
  setUsers([...newListe,modifUser])

  console.log(d)
}
// Button onClic Annuler
const Arrete =() => {
  const newListe = users.filter((item) => item.id !== u);
  setUsers([...newListe])
}
// Button onClic Depasser
// const Arrete =() => {
//   console.log(u+" est Arreter")
// }

  return (
    <div className="App">
      <Button color='Green' text='Demander' onClick={Demander} />
      <Button color='Blue' text='Depanner' onClick={Depanner} />
      <Button color='Red' text='Arrêter'  onClick={Arrete}/>
      <Users users={users} selectid={selectID} />
    </div>
  );
}

export default App;
