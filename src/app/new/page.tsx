import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

 async function createTodo(data:FormData){
  "use server"

   const title = data.get("title")?.valueOf()
   if(typeof title !== "string" || title.length === 0){
    throw new Error ("Invalid Title")
   }
   await prisma.todo.create({
    data:{
      title,complete:false
    }
   })
   redirect("/")
}

export default function Page(){
  return <>
  <header className="flex justify-between items-center mb-4">
    <h1 className="text-2xl">New</h1>
    

  </header>
  <form className="flex gap-2 flex-col" action={createTodo}>
    <input type="text" name="title" className="border border-slate-200 bg-transparent rounded  text-slate-100 px-2 py-1  focus-within:bg-slate-600 outline-none"
/>
<div className="flex gap-1 justify-end">
  <Link href=".." className="border border-slate-200 bg-transparent rounded  text-slate-100 px-2 py-1  focus-within:bg-slate-600 outline-none">Cancel</Link>
  <button type="submit" className="border border-slate-200 bg-transparent rounded  text-slate-100 px-2 py-1  focus-within:bg-slate-600 outline-none">Create</button>
</div>
  </form>
  </>

}