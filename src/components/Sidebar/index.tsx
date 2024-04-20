import { AiOutlineSearch } from "react-icons/ai";
import { Logo } from "./Logo";
import { NavItem } from "./Navitem";
import { AiOutlineHome ,AiOutlineFlag,AiOutlineTeam } from "react-icons/ai";
import { VscLayers,VscGraph ,VscPass } from "react-icons/vsc";
import { UsedSpaceWidth } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import {  InputControl, InputPrefix, InputRoot } from "../Input";


export function Sidebar(){
    return ( 
        <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8 space-y-6">
            <Logo/>
            <InputRoot>
                <InputPrefix>
                    <AiOutlineSearch className="h-5 w-5 text-zinc-500"  />
                </InputPrefix>
                <InputControl/>
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
            <div className="h-px bg-zinc-200"/>
            <Profile/>
        </aside>
    )
}