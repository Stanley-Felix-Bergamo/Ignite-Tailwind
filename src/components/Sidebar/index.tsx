import { AiOutlineSearch } from "react-icons/ai";
import { Logo } from "./Logo";
import { NavItem } from "./Navitem";
import { AiOutlineHome ,AiOutlineFlag,AiOutlineTeam } from "react-icons/ai";
import { VscLayers,VscGraph ,VscPass } from "react-icons/vsc";
import { UsedSpaceWidth } from "./UsedSpaceWidget";


export function Sidebar(){
    return ( 
        <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8 space-y-6">
            <Logo/>

            <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
                <AiOutlineSearch className="h-5 w-5 text-zinc-500"  />
                <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900" type="text" placeholder="Search" />
            </div>
            <nav className="space-y-0.5">
                <NavItem title="Home" icon={AiOutlineHome}/>
                <NavItem title="Dashboard" icon={VscGraph}/>
                <NavItem title="Projects" icon={VscLayers}/>
                <NavItem title="Tasks" icon={VscPass}/>
                <NavItem title="Reporting" icon={AiOutlineFlag}/>
                <NavItem title="Users" icon={AiOutlineTeam}/>
            </nav>
            <UsedSpaceWidth/>
        </aside>
    )
}