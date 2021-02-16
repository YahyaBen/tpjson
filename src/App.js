import { useState, useEffect } from 'react'
import Button from './components/Button.js'
import Users from './components/Users.js'
import './App.css';

function App() {

  const [users, setUsers] = useState(
    [
        {
            id:1,
            pseudo:'Imad',
            password:'Feb',
            team: [{

            }]
        },
        {
            id:2,
            pseudo:'Yahya',
            password:'Jan',
            team: [{

            }]
        },
        {
            id:3,
            pseudo:'RZK',
            password:'mars',
            team: [{

            }]
        },
        {
          id:4,
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

},d)
// Variabe du user
var u ;
const selectID = (id)=>{
  u = id;
  console.log({"u": u});
}

// Button onClic Depasser
var d= 1;
const Depasser = (user) => {
  const id = users[u].id = users.length +d
  const newUser = {id,...user}
  setUsers([newUser,...users])
  d=d+1
  
}
// Button onClic Annuler
const Annuler =() => {
  console.log(u+" a Annuler la pause le temps")
}
// Button onClic Depasser
const Arrete =() => {
  console.log(u+" est Arreter")
}

  return (
    <div className="App">
      <Button color='Green' text='Depasser' onClick={Depasser} />
      <Button color='Orange' text='Annuler' onClick={Annuler}/>
      <Button color='Red' text='Arrêter'  onClick={Arrete}/>
      <Users users={users} selectid={selectID} />
    </div>
  );
}

export default App;
