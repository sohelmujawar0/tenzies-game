export default function Die (props){
    return <button className="rounded-[10px] border-2 border-fuchsia-300 cursor-pointer
     bg-fuchsia-100 hover:-translate-y-1 hover:shadow-lg hover:border-fuchsia-400
     transition-all duration-300 "  
    style={{ backgroundColor: props.Held? "lightgreen" : null }} 
    onClick={()=>props.fun(props.id1)} >{props.value}
    </button>

} 