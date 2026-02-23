import { usePage, Link } from '@inertiajs/react'
import { DoorOpen } from 'lucide-react'

type PageProps = {
    auth?: {
        user?: {
            id: number
            name: string
            email: string
        } | null
    }
}

export default function Navigation() {
    const user = usePage<PageProps>().props.auth?.user ?? null

    return (
        <nav className="flex items-center max-w-7xl mx-auto justify-between font-ubuntu p-3">
            <div className="logo">
                <img src="" alt="Logo" />
            </div>

            <div className=""><div>
                <li className="mr-4 inline-block">
                    <a href="/">Home</a>
                </li>
                <li className="mr-4 inline-block">
                    <a href="/about">About</a>
                </li>
                <li className="mr-4 inline-block">
                    <a href="/contact">Contact</a>
                </li></div></div>

            <div className="p-2">
                {user ? (
                    <li className="mr-4 inline-block">
                        <a href="/dashboard">Dashboard</a>
                        <Link href="/logout" method="post" className="ml-2">
                            <DoorOpen className="inline-block ml-2 cursor-pointer" />
                        </Link>
                    </li>
                ) : (
                    <div>
                        <li className="mr-4 inline-block">
                            <a href="/register">Register</a>
                        </li>
                        <li className="mr-4 inline-block">
                            <a href="/login">Login</a>
                        </li>
                    </div>
                )}
            </div>
        </nav>
    )
}