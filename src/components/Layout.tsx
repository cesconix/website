import React from "react"
import { Space_Grotesk } from "next/font/google"
import { CommonFragment } from "@/types/codegen"
import Header from "./Header"
// import Footer from "./Footer"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
})

type LayoutProps = {
  children: React.ReactNode
} & CommonFragment

function Layout(props: LayoutProps) {
  return (
    <div className={`${spaceGrotesk.variable} font-sans antialiased`}>
      <Header
        logoUrl={props.logo?.url}
        navLinks={props.navLinks}
        cvFileUrl={props.cvFile?.url}
      />
      {props.children}
    </div>
  )
}

export default Layout
