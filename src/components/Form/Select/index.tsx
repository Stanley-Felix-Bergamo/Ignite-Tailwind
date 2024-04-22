'use client'

import * as SelectPrimitive  from "@radix-ui/react-select";
import { ReactNode } from "react";
import { AiOutlineDown } from "react-icons/ai";

export interface SelectProps{
    children:ReactNode
    placeholder:string
}


export function Select({children,placeholder}:SelectProps) {
return(
         <SelectPrimitive.Root>
             <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholdder]:text-zinc-600">
               <SelectPrimitive.Value placeholder={placeholder} className="text-black"/>
                <SelectPrimitive.Icon>
                    <AiOutlineDown className ="h-4 w-4 text-zinc-500" />
                </SelectPrimitive.Icon>                      
             </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
                <SelectPrimitive.Content side="bottom" position="popper" className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white" sideOffset={8}>
                    <SelectPrimitive.Viewport>
                       {children}                     
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>

         </SelectPrimitive.Root>   
)

}