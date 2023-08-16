import { Space_Grotesk, Inter } from "next/font/google"
import type { NavLink } from "@/types"
import Header from "./Header"
import { DraftMode } from "../ui"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

type CommonProps = {
  logoUrl: string
  navLinks: NavLink[]
  cvFileUrl?: string
}

type LayoutProps = {
  children: React.ReactNode
  commonProps: CommonProps
  draftMode: boolean
}

function Layout(props: LayoutProps) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} relative overflow-y-scroll bg-neutral-700 font-space text-foreground-200 antialiased`}
    >
      <Header
        logoUrl={props.commonProps.logoUrl}
        navLinks={props.commonProps.navLinks}
        cvFileUrl={props.commonProps.cvFileUrl}
      />
      {props.children}
      {props.draftMode && <DraftMode />}
    </div>
  )
}

export default Layout
