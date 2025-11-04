export default function Die (props){
    return <button id="buttdies"  
    style={{ backgroundColor: props.Held? "lightgreen" : null }} 
    onClick={()=>props.fun(props.id1)} >{props.value}
    </button>

}