'use client'

import * as Select from '@radix-ui/react-select'
import { AiOutlineCheck } from 'react-icons/ai'

export type SelectItemProps = Select.SelectItemProps & {
    text:string
}


export function SelectItem({text,...props}: SelectItemProps){
    return (
         <Select.Item className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50" {...props}>
             <Select.ItemText className="text-black">
               {text}
             </Select.ItemText>                              
             <Select.ItemIndicator>
                  <AiOutlineCheck  className='h-4 w-4 text-violet-500'/> 
             </Select.ItemIndicator>
         </Select.Item>
    )
}