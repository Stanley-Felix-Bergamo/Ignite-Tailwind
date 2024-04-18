import { AiOutlineHome ,AiOutlineFlag,AiOutlineTeam } from "react-icons/ai";
import { VscLayers,VscGraph ,VscPass } from "react-icons/vsc";
import { NavItem } from "./Navitem";

export function MainNavigation(){
    return(
        <nav className="space-y-0.5">
         <NavItem title="Home" icon={AiOutlineHome}/>
         <NavItem title="Dashboard" icon={VscGraph}/>
         <NavItem title="Projects" icon={VscLayers}/>
         <NavItem title="Tasks" icon={VscPass}/>
         <NavItem title="Reporting" icon={AiOutlineFlag}/>
         <NavItem title="Users" icon={AiOutlineTeam}/>
        </nav>
    )
}