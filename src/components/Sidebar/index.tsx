'use client'

import { AiOutlineSearch } from "react-icons/ai";
import { Logo } from "./Logo";
import { NavItem } from "./Navitem";
import { AiOutlineHome ,AiOutlineFlag,AiOutlineTeam } from "react-icons/ai";
import { VscLayers,VscGraph ,VscPass } from "react-icons/vsc";
import { UsedSpaceWidth } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import {  InputControl, InputPrefix, InputRoot } from "../Input";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button } from "../Button";
import { AiOutlineMenu } from "react-icons/ai";

export function Sidebar(){
    return ( 
        <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 p-4 data-[state=open]:bottom-0 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">

            <div className="flex items-center justify-between">
                <Logo/>

                <Collapsible.Trigger className="lg:hidden">
                <Button variant="ghost">
                    <AiOutlineMenu className="h-6 w-6"/>
                </Button>
                </Collapsible.Trigger>
            </div>

            <Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
                <InputRoot>
                    <InputPrefix>
                        <AiOutlineSearch className="h-5 w-5 text-zinc-500"  />
                    </InputPrefix>
                <InputControl placeholder="Search"/>
                </InputRoot>
                <nav className="space-y-0.5">
                    <NavItem title="Home" icon={AiOutlineHome}/>
                    <NavItem title="Dashboard" icon={VscGraph}/>
                    <NavItem title="Projects" icon={VscLayers}/>
                    <NavItem title="Tasks" icon={VscPass}/>
                    <NavItem title="Reporting" icon={AiOutlineFlag}/>
                    <NavItem title="Users" icon={AiOutlineTeam}/>
                </nav>
                <UsedSpaceWidth/>
                <div className="h-px bg-zinc-200 dark:bg-zinc-700"/>
                <Profile/>
            </Collapsible.Content>
  
        </Collapsible.Root>
    )
}