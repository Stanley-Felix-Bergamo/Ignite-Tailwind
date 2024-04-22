'use client'

import * as SelectPrimitive  from "@radix-ui/react-select";
import { AiOutlineDown,AiOutlineCheck  } from "react-icons/ai";


export function Select() {
return(
         <SelectPrimitive.Root>
             <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholdder]:text-zinc-600">
               <SelectPrimitive.Value placeholder='Select a country' className="text-black"/>
                <SelectPrimitive.Icon>
                    <AiOutlineDown className ="h-4 w-4 text-zinc-500" />
                </SelectPrimitive.Icon>                      
             </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
                <SelectPrimitive.Content side="bottom" position="popper" className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white" sideOffset={8}>
                    <SelectPrimitive.Viewport>
                        <SelectPrimitive.Item value="br" className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50">
                           <SelectPrimitive.ItemText className="text-black">
                              Brazil
                            </SelectPrimitive.ItemText>                 
                            <SelectPrimitive.ItemIndicator>
                                 <AiOutlineCheck  className='h-4 w-4 text-violet-500'/> 
                            </SelectPrimitive.ItemIndicator>
                        </SelectPrimitive.Item>

                        <SelectPrimitive.Item value="us" className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none  data-[highlighted]:bg-zinc-50">
                           <SelectPrimitive.ItemText className="text-black">
                              United States
                            </SelectPrimitive.ItemText>                 
                            <SelectPrimitive.ItemIndicator>
                                 <AiOutlineCheck  className='h-4 w-4 text-violet-500'/> 
                            </SelectPrimitive.ItemIndicator>
                        </SelectPrimitive.Item>

                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>

         </SelectPrimitive.Root>   
)

}