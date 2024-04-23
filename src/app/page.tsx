import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import { BsEnvelope } from "react-icons/bs";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/Selectitem";
import { AiOutlineBold,AiOutlineItalic,AiOutlineLink ,AiOutlineOrderedList,AiOutlineMenu } from "react-icons/ai";
import { Textarea } from "@/components/Form/Textarea";
import { Button } from "@/components/Button";


export default function Home() {
  return (
        <>
            <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
            <SettingsTabs/>
            <div className="mt-6 flex flex-col">
              <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
                  <div className="space-y-1">
                    <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
                    <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" type="button" >Cancel</Button>
                    <Button variant="primary" type="button" form="settings">Save</Button>
                  </div>
              </div>
              <form id="settings" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
                <div className="grid grid-cols-form gap-3">
                  <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>       

                  <div className="grid grid-cols-2 gap-6">
                    <Input.InputRoot>
                       <Input.InputControl id="firstName" defaultValue='Stanley'/>
                    </Input.InputRoot>

                    <Input.InputRoot>
                       <Input.InputControl defaultValue='Bergamo'/>
                    </Input.InputRoot>
                  </div>
                </div>

                <div className="grid grid-cols-form gap-3 pt-5">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email address</label>                        
                    <Input.InputRoot>
                    <BsEnvelope className="h-5 w-5 text-zinc-500" />
                    <Input.InputPrefix>

                    </Input.InputPrefix>
                       <Input.InputControl id="email" type="email" defaultValue='Stanley.felix.bergamo@outlook.com'/>
                    </Input.InputRoot>                              
                </div>

                <div className="grid grid-cols-form gap-3 pt-5">

                  <label htmlFor="photo" className="text-sm font-medium text-zinc-700">Your photo
                  <span className="mt-0.5 block text-sm font-normal text-zinc-500">This will be displayed on your profile.</span>
                  </label>                                     
                  <div>
                   <FileInput.Root className="flex items-start gap-5">
                      <FileInput.ImagePreview/>
                      <FileInput.Trigger/>
                      <FileInput.Control/>
                   </FileInput.Root>
                  </div>
                </div>
                
               <div className="grid grid-cols-form gap-3 pt-5">
                  <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>                                            
                    <Input.InputRoot>
                    <Input.InputControl id="role" defaultValue='Developer Front-end' />
                    </Input.InputRoot>                                           
               </div>

               <div className="grid grid-cols-form gap-3 pt-5">
                  <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>                                            
                  <Select placeholder="Select a country">
                    <SelectItem value="br" text="Brazil"/>
                    <SelectItem value="us" text="United States"/>
                  </Select>                                     
               </div>

               <div className="grid grid-cols-form gap-3 pt-5">
                  <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">Timezone</label>                                            
                  <Select placeholder="Select a timezone">
                      <SelectItem value="br" text="America São Paulo (UTC -03:00)"/>
                      <SelectItem value="us" text="Pacific Standard Time (UTC -08:00)"/>
                  </Select>                                            
               </div>

                <div className="grid grid-cols-form gap-3 pt-5">
                  <label htmlFor="bio" className="text-sm font-medium text-zinc-700">Bio
                  <span className="mt-0.5 block text-sm font-normal text-zinc-500">Write a short introduction.</span>
                  </label>                                     
                  <div className="space-y-3">
                    <div className="grid gap-3 grid-cols-2">
                        <Select placeholder="" defaultValue="normal">
                            <SelectItem value="normal" text="Normal Text"/>
                            <SelectItem value="md" text="Markdown"/>
                        </Select>

                        <div className="flex items-center gap-1">
                          <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
                              <AiOutlineBold className="h-5 w-5 text-zinc-500"/>
                          </button>
                          <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
                              <AiOutlineItalic className="h-5 w-5 text-zinc-500"/>
                          </button>
                          <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
                              <AiOutlineLink className="h-5 w-5 text-zinc-500"/>
                          </button>
                          <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
                              <AiOutlineMenu className="h-5 w-5 text-zinc-500"/>
                          </button>
                          <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
                              <AiOutlineOrderedList className="h-5 w-5 text-zinc-500"/>
                          </button>
                        </div>
                    </div>
                    <Textarea id="bio" defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development"/>
                  </div>
                </div>

                <div className="grid grid-cols-form gap-3 pt-5">
                  <label htmlFor="projects" className="text-sm font-medium text-zinc-700">Portfolio projects
                  <span className="mt-0.5 block text-sm font-normal text-zinc-500">Share a few snippets of your work.</span>
                  </label>                                     
                    <FileInput.Root>                      
                      <FileInput.Trigger/>
                      <FileInput.FileList/>
                      <FileInput.Control multiple/>
                   </FileInput.Root>
                </div>

                <div className="flex items-center justify-end gap-2 pt-5 mit">
                    <Button variant="outline" type="button" >Cancel</Button>
                    <Button variant="primary" type="button" form="settings">Save</Button>
                </div>
              </form>
            </div> 
        </>
  );
}
