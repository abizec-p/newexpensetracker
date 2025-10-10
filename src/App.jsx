import Nav from "./components/Nav"
import Overview from "./components/Overview"
import TopBar from "./components/TopBar"
import Add from "./components/Add"
import Transaction from "./components/Transaction"
import Chart from "./components/Chart"
import Ranking from "./components/Rankings"
import "./App.css"
import { useState,useEffect } from "react"



function App() {
         const [transaction, setTransaction] = useState([]);

  useEffect(()=>{
        fetch("https://newexpensetracker-sz4m.onrender.com")
        .then((res)=>res.json())
        .then((data)=> setTransaction(data))
        .catch((err)=> console.log("error fetching : ", err));
    },[]);


  return (
    <section className="main-container">
      <div className="left-side">
        <Nav/>
      </div>
      <div className="right-side">
        <div className="top-bar">
          <TopBar/>
        </div>
        <div className="inside-container">
          <div className="left-inside">
            <Overview transaction={transaction }/>
            <Add/>
            <Transaction transaction={transaction}/>

          </div>
          <div className="right-inside"> 
            <Chart transaction={transaction}/>
            <Ranking transaction={transaction}/>
          </div>
        </div>

      </div>
   
    </section>
  )
}

export default App
