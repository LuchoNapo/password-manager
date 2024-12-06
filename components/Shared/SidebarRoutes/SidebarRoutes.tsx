"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SingleItem from "../SingleItem/SingleItem"
import { ChartNoAxesColumn, House, LogOut, RectangleEllipsis } from "lucide-react"
import { dataSidebarConfiguration, dataSidebarElements } from "./SidebarRoutes.data"
import Link from "next/link"

export default function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>

        <SingleItem href="/" label="Homepage" icon={House} />

        {dataSidebarElements.map(({ title, icon: Icon, children }) => (
          <Accordion key={title} type="single" collapsible className="w-full px-2">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger>
                <div className="flex gap-2 items-center">
                  <div className="bg-blue-100/20 p-2 rounded-md">
                    <Icon size={20} />
                  </div>
                  {title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {children.map(({ item, href, icon: Icon }) => (
                  <div key={item}>
                    <Link href={href} className="p-2 flex gap-2 items-center hover:bg-blue-100/20 duration-300 transition-all rounded-md">
                      <Icon size={20} />
                      {item}
                    </Link>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}

        <SingleItem href="/generator" label="Generator" icon={RectangleEllipsis}/>

        {dataSidebarConfiguration.map(({ title, icon: Icon, children }) => (
          <Accordion key={title} type="single" collapsible className="w-full px-2">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger>
                <div className="flex gap-2 items-center">
                  <div className="bg-blue-100/20 p-2 rounded-md">
                    <Icon size={20} />
                  </div>
                  {title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {children.map(({ item, href, icon: Icon, premium }) => (
                  <div key={item} className="flex items-center justify-between mt-2 hover:bg-blue-100/20 duration-300 transition-all rounded-md pr-1">
                    <Link href={href} className="flex gap-2 items-center sm:px-6 px-6 pr-2 py-2">
                      <Icon size={20} />
                      {item}
                    </Link>
                    {premium && (<span className="text-xs px-1.5 py-1 bg-blue-400 rounded-sm">Premium</span>)}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}

        <SingleItem href="/analytics" label="Analytics" icon={ChartNoAxesColumn} />
      </div>
      <div className="lg:mb-5 mb-20">
        <SingleItem href="#" onClick={() => console.log("Clicked")} label="Log Out" icon={LogOut} />
      </div>
    </div>
  )
}
