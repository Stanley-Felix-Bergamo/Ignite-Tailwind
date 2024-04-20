import { BiExit } from "react-icons/bi";

export function Profile(){
    return(
        <div className="grid items-center gap-3 grid-cols-profile">
            <img src="https://github.com/stanley-felix-bergamo.png" className="h-10 w-10 rounded-full" alt="" />
             <div className="flex flex-1 flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">
                    Stanley
                </span>
                <span className="truncate text-sm text-zinc-500">stanley.felix.bergamo@outlook.com</span>
             </div>
            <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
                <BiExit className="h-5 w-5 text-zinc-500" />
            </button>
        </div>
    )
}