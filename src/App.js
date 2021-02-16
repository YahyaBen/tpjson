import { useState, useEffect, useRef } from 'react'
import Button from './components/Button.js'
import Users from './components/Users.js'
import './App.css';

function App({user}) {
  useEffect(()=>{
    console.log("Test")

},)
const myID =useRef(null);
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
//onChange

// Button onClic Depasser
const Depasser = (user) => {
  // setUsers(users.filter((user)=> user.id !==id))
  
  console.log(user.id+ " a depasser le temps")

}
var u ;
const selectID = (id)=>{
  u = id;
  console.log({"u": u});
}
// Button onClic Annuler
const Annuler =() => {
  console.log("Annuler la pause le temps")
}
// Button onClic Depasser
const Arrete =() => {
  console.log(" est Arreter")
}
  return (
    <div className="App">
      <Button color='Green' text='Depasser' ref={myID} onClick={Depasser} />
      <Button color='Orange' text='Annuler' onClick={Annuler}/>
      <Button color='Red' text='Arrêter'  onClick={Arrete}/>
      <Users users={users} selectid={selectID}/>
    </div>
  );
}

export default App;
