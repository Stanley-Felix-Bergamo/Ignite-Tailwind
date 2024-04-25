'use client'

import * as SelectPrimitive  from "@radix-ui/react-select";
import { ReactNode } from "react";
import { AiOutlineDown } from "react-icons/ai";

export interface SelectProps extends SelectPrimitive.SelectProps{
    children:ReactNode
    placeholder:string
}


export function Select({children,placeholder,...props}:SelectProps) {
return(
         <SelectPrimitive.Root {...props}>
             <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholdder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20">
               <SelectPrimitive.Value placeholder={placeholder} className="text-black"/>
                <SelectPrimitive.Icon>
                    <AiOutlineDown className ="h-4 w-4 text-zinc-500" />
                </SelectPrimitive.Icon>                      
             </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
                <SelectPrimitive.Content side="bottom" position="popper" className="z-10 shadow-sm w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white" sideOffset={8}>
                    <SelectPrimitive.Viewport>
                       {children}                     
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>

         </SelectPrimitive.Root>   
)

}