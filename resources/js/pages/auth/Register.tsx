import { useForm } from '@inertiajs/react'
import type { FormEvent } from 'react'
import MainLayout from "../layouts/MainLayout"
import { register_user } from '@/routes'

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        mobile: '',
        email: '',
        password: '',
    })

    const register_url = register_user.url()

    const normalize = (href: string) => {
        try {
            return new URL(href).pathname
        } catch {
            return href
        }
    }

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        post(register_url)
    }

    return (
        <MainLayout>
            <div className="p-6 flex items-center flex-col py-12">
                <h1 className="text-2xl font-bold mb-4">Register</h1>
                <form className="max-w-lg w-full" onSubmit={submit}>
                    <div className="mb-4">
                        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="full_name"
                            name="full_name"
                            value={data.full_name}
                            onChange={(event) => setData('full_name', event.target.value)}
                            placeholder="John Doe"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.full_name && <p className="mt-1 text-sm text-red-600">{errors.full_name}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={data.mobile}
                            onChange={(event) => setData('mobile', event.target.value)}
                            placeholder="+8801234567890"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(event) => setData('email', event.target.value)}
                            placeholder="mail@domain.com"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={(event) => setData('password', event.target.value)}
                            placeholder="********"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {processing ? 'Registering...' : 'Register'}
                    </button>
                </form>

                <div className="p-4">
                    <div className="p-2">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login Now</a></div>
                </div>
            </div>
        </MainLayout>
    )
}