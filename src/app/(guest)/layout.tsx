import LoginHeader from "@/Component/header/login.header"
import { useState } from "react"

export const metadata = {
    title: 'Login With Summer School',
    description: 'Generated by Next.js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <LoginHeader
            />
            {children}
        </>
    )
}
