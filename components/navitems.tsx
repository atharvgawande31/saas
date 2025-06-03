"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils";

const navItems = [
    {label: "Home" , href: "/"},
    {label:"Companions", href:"/companions"},
    {label: "My Journey", href:"/my-journey"}
]

const Navitems = () => {
    const pathName = usePathname()
  return (
     <div className="flex items-center gap-4">
      {navItems.map(({label,href}) => (
        <Link 
        href={href} 
        key={label} 
        className={cn(pathName === href && "text-cta-gold font-semibold")}>
            {label}
            </Link>
         
      ))}
    </div>
  )
}

export default Navitems
