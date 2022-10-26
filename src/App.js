import './App.css';
import { useState } from "react";
import data from './data';
import List from './List';


function App() {
const [people, setPeople] = useState(data)
return(
  <main>
<section className='container'>
  <h2>{people.length} BIRTHDAYS TODAY!!!!!!!!</h2>
  <List people={people}/>
  <button onClick={() => setPeople([])}>CLEAR ALL</button>
  <button onClick={() => setPeople(data)}>Reset</button>
</section>
  </main>
)
}

export default App;
