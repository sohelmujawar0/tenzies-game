import Die from "./components/Die"
import { useState, useEffect } from "react"
import Confetti from "react-confetti";
export default  function App(){
  const [dice,Setdice] = useState(generateAllNewDice)
   const [seconds, setSeconds] = useState(0);
   function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
               value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id:Math.random().toString(36).substr(2, 9),
            }))
   }     
   const gamewon = dice.every((oldvv)=>oldvv.isHeld) &&  dice.every(die => die.value === dice[0].value)
     function Roll_dice (){
       !gamewon? Setdice((dic)=> dic.map((oldi)=> !oldi.isHeld? {...oldi, value:Math.ceil(Math.random() * 6) } : oldi )) :
       Setdice(generateAllNewDice())
     }
       function Select(id) {
    Setdice((dicev) =>
      dicev.map((oldv) =>
        id === oldv.id ? { ...oldv, isHeld: !oldv.isHeld } : oldv
      )
    );
  }
    const elements = dice.map((old)=>{
          return <Die value={old.value} fun={Select} Held={old.isHeld} id1={old.id} />
     })

    useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(timer);
  }, [gamewon]);
 console.log(seconds)
 return <>
    {gamewon && <Confetti/>}
      <h1 id="inst">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h1>
   <div id="dics" >
    {elements}
    <button id="Roll" onClick={Roll_dice} >{ gamewon? "new game" :"Roll"}</button>
 </div>
 <h1>{seconds}</h1>
 {dice.every((oldvv)=>oldvv.isHeld)  && !dice.every(die => die.value === dice[0].value)? <h1>values are not same please check again and try</h1>: null }
  </>
}