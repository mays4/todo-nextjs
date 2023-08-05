"use client"
type TodoItemProps={
  id:string
  title:string
  complete:boolean
  toggleTodo:(id:string, complete:boolean)=> void
  deleteTodo:(id:string)=>void

}
export default function TodoItem({id,title ,complete,toggleTodo,deleteTodo}:TodoItemProps){
  return <div className="flex justify-between"><li className="flex gap-1 items-center ">
    <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete}
    onChange={e=>toggleTodo(id,e.target.checked)}/>
    <label htmlFor={id} className=" cursor-pointer peer-checked:line-through peer-checked:text-slate-500 ">{title}</label>
   
  </li>
    <button type="button" className="border border-slate-400 text-slate-100 px-2 py-1  rounded hover:bg-slate-600 focus-within:bg-slate-600 outline-none " onClick={()=>deleteTodo(id)}>
    Delete
  </button>
  
  </div>
 
  
 
}