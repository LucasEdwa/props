import { FormEvent, useState } from "react";

interface IAddTodoProps{
    addTodo: (t:string) =>void ;
    handleSort: ()=>void;

}

export const AddTodos = (props:IAddTodoProps)=>{
    const [todoText, setTudoText] = useState("");

    

    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault()
        props.addTodo(todoText)
        setTudoText('')

    }
    

    return(
        <div className="bg-gray-500">
        <form onSubmit={handleSubmit} className="mx-10 flex  justify-center  p-2 gap-2">
            <input className="w-full" type="text" value={todoText} onChange={(e)=>{
                setTudoText(e.target.value)
            }}/>
            <div className="flex gap-2">
            <button type="submit" className="bg-primary text-white p-1 rounded-xl" >save</button>
            <button type="button" onClick={props.handleSort} className="bg-primary text-white p-1 rounded-xl" >sort</button>
        </div>
            </form>
        </div>
    )
}