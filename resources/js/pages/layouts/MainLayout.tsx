import type { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {

    return (

        <div className="min-h-screen font-ubuntu ">
            <div className="p-2 bg-red-400">Navigation</div>
            <div className="flex-1 p-6 bg-gray-100">{children}</div>
        </div>
    )
}
