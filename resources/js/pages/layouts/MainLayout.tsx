import type { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default function MainLayout({ children }: { children: ReactNode }) {

    return (
        <div className="min-h-screen font-ubuntu">

            {/* navigation */}
            <Navigation />

            {/* Other page injects here */}
            <div className="flex-1 p-6 bg-gray-100">{children}</div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
