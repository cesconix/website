import { Inter, Space_Grotesk } from "next/font/google"
import { NavLinkType } from "@/types"

import { DraftMode } from "../common"
import Header from "./Header"

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
  navLinks: NavLinkType[]
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
      className={`${spaceGrotesk.variable} ${inter.variable} relative overflow-y-scroll font-space`}
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
