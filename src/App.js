import { useState, useEffect, useRef } from 'react'
import Button from './components/Button.js'
import Users from './components/Users.js'
import Form from './components/Form.js';
import Timers from './components/Timers.js';


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
      {
        id:4,
        pseudo:'Mohammed',
        password:'Juin',
        team: [{

        }]
    }
    ]
)

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


// Recuperation de 'ID de l'utilisateur
var u,x ;
const selectID = (id)=>{
  u = id;
  return u

}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////Stop Watch //////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

const [timer, setTimer] = useState(0)
const [isActive, setIsActive] = useState(false)
const [isPaused, setIsPaused] = useState(false)
const [personne,setPersonne] =useState("No One is Selected")
const [Comps,setComps] =useState([])
const countRef = useRef(0)

const Start = () => {
  // start button logic here
  setIsActive(true)
  setIsPaused(true)
  countRef.current = setInterval(() => {
    setTimer((timer) => timer + 1)
  }, 1000)

}

const Pause = () => {
  // Pause button logic here
  clearInterval(countRef.current)
  setIsPaused(false)
}

const Resume = () => {
  // Resume button logic here
  setIsPaused(true)
  countRef.current = setInterval(() => {
    setTimer((timer) => timer + 1)
  }, 1000)
}

const Reset = () => {
  // Reset button logic here
  clearInterval(countRef.current)
  setIsActive(false)
  setIsPaused(false)
  setTimer(0)
}

///////////////////////// Formatting Time ////////////////////
//////////////////////////////////////////////////////////////
const formatTime = () => {

  const getSeconds = `0${(timer % 60)}`.slice(-2)
  const minutes = `${Math.floor(timer / 60)}`
  const getMinutes = `0${minutes % 60}`.slice(-2)
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
  return getHours+ `:` +getMinutes+ `:`+getSeconds 
}


  // return  User +`  est en pause depuis : ${getHours} : ${getMinutes} : ${getSeconds}`

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// Use effects
useEffect(()=>{
// alert("Test use effect number :"+count.current)
// count.current = count.current +1
},[users])

// Demander une pause
var d=1;
const Demander = () => {
///////////////////////////////////////
  var x = users.find(e=> e.id == u);
  var index = users.indexOf(x);
  alert(users[index].pseudo+" Veux une pause")
  console.log(users[u])

  setComps([...Comps,<Button color='Green' text='Demander'/>])// a la place des deux button rajouter de parametre

///////////////////////////////////////

  // const id =Math.max.apply(Math,users.map(function(A){return A.id}))+1
  // const pseudo = "Mohammed"
  // const password ="BBB"
  // const team =[ ]
  // const newUser = {id,pseudo,password,team}
  // setUsers([...users,newUser])
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

// Users Up (pas terminer)
const goUP = () => {
  var A =users
  A[u] = A.splice(1,1,A[u])[0]
  alert(A)

}

// Users down (pas terminer)
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
    </div>

    {
            !isActive && !isPaused  ? 
            <div> hiiii {personne} </div>
    : <Timers time={formatTime()}/>
}

    <div className="Button">
    {
            !isActive && !isPaused ?
            <Button color='Blue' text='Start' onClick={Start} /> 
            :
            (isPaused ?       <Button color='Blue' text='Pause' onClick={Pause} /> : 
            <Button color='Blue' text='Resumer'  onClick={Resume}/>
            )
          }
          <Button color='Blue' text='Reset'  onClick={Reset}/>  
    </div>

    
    {Comps!=null ? Comps.map(item => (
   
            <li key={item}>{item}</li>)) : <div><p>ahhahahahahahaha</p></div>
          }
    </div>

  );
}

export default App;