import { useState } from 'react'
import Button from './components/Button.js'
import Users from './components/Users.js'
import './App.css';

function App({color,text}) {

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
          id:3,
          pseudo:'Saad',
          password:'mars',
          team: [{

          }]
      },
    ]
)


  return (
    <div className="App">
      <Button color='Green' text='Demarrer'/>
      <Button color='Orange' text='Annuler'/>
      <Button color='Red' text='Arrêter'/>
      <Users users={users}/>
    </div>
  );
}

export default App;
