'use client'
import * as Tabs from '@radix-ui/react-tabs'
import {motion} from 'framer-motion'
export interface TabItemProps{
    value:string
    title:string
    isSelected?:boolean
}

export function TabItem({title,value,isSelected = false}:TabItemProps) {
    return(
         <Tabs.Trigger value={value} className='px-1 pb-4 font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-500'>
            <span>{title}</span>
            {isSelected &&(
                 <motion.div layoutId='activeTab' className=' -bottom-px left-0 right-0 h-0.5 bg-violet-500 '/>
            )}
          </Tabs.Trigger>
    )
}