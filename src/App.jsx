import Die from "./components/Die"
import { useState, /*useEffect*/ } from "react"
import Confetti from "react-confetti";
export default  function App(){
  const [dice,Setdice] = useState(generateAllNewDice)
  //  const [seconds, setSeconds] = useState(0);
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

//     useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds(prev => prev + 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [gamewon]);
//  console.log(seconds)
 return <>
   {gamewon && <h1 className="text-[100px]" style={{color:"red"}} >great you won the game</h1>}
    {gamewon && <Confetti/>}
      <h1 className="text-[rgb(193,248,15)] mb-2.5 text-3xl ">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</h1>
   <div id="dics" className="grid grid-cols-[100px_100px_100px_100px_100px] 
   grid-rows-[50px_50px] justify-center content-center gap-2.5" >
    {elements}
    <button className="relative left-[150px] w-[200px] h-[50px]
     rounded-[10px] bg-blue-500 text-white cursor-pointer "
    onClick={Roll_dice} >{ gamewon? "new game" :"Roll"}</button>
 </div>
 {dice.every((oldvv)=>oldvv.isHeld)  && 
 !dice.every(die => die.value === dice[0].value)?
  <h1 className="text-3xl" >values are not same please check again and try</h1>: null }
  </>
} 