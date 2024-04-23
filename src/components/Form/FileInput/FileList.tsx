'use client'

import { useFileInput } from "./Root";
import { FileItem } from "./FileItem";


export function FileList(){
    const {files} = useFileInput();

    return(
        <div className="mt-4 space-y-3">
            {files.map((file)=>{
                return(
                   <FileItem key={file.name} name={file.name} size={file.size} state="complete"/>
                )
            })}
        </div>
    )

}