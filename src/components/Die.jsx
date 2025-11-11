export default function Die (props){
    return <button className="rounded-[10px] border-2 bg-fuchsia-100 "  
    style={{ backgroundColor: props.Held? "lightgreen" : null }} 
    onClick={()=>props.fun(props.id1)} >{props.value}
    </button>

} 