
import AppFooter from '@/Component/footer/app.footer';
import AppHeader from '@/Component/header/app.header';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AppHeader />
            {children}
            <AppFooter />
        </>
    )
}
