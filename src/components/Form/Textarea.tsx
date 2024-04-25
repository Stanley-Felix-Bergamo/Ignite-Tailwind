import { ComponentProps } from "react"

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props:TextareaProps){
    return(
         <textarea className="min-h-[120px] resize-y w-full rounded-lg border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus-within:ring-violet-500/20  dark:text-zinc-100 dark:placeholder-zinc-400" 
         {...props}/>
    )
}