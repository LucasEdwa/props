import { Todo } from "../../models/Todo"

interface IShowTodosProps  {
    theTodoList: Todo[];
    delete: (i:number) => void;
    done: (i:number) => void;
}

export const ShowTodos = (props: IShowTodosProps )=>{
    return(
        <ul className="p-10 flex flex-col gap-2">
            {
                props.theTodoList.map((t)=>{
                    return (
                        <li key={t.id} className="flex justify-around gap-2 items-center">
                            <span className={`w-full ${t.done?'line-through px-5':'px-5'}`}>{t.text}</span>
                            <button onClick={()=>props.delete(t.id)} className="">delete</button>
                            <button onClick={()=>props.done(t.id)} className="bg-primary text-white px-2 rounded-md">{t.done? 'undo':'done'}</button>
                        </li>
                    );
                })
            }
        
        </ul>
    )
}