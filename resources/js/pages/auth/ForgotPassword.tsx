import MainLayout from "../layouts/MainLayout"

export default function Login() {
    return (
        <MainLayout>
            <div className="p-6 flex items-center flex-col py-12">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form className="max-w-lg w-full">

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" placeholder="mail@domain.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" placeholder="********" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
                </form>

                <div className="p-2 text-right w-lg"><a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?  </a></div>

                <div className="p-4">
                    <div className="p-2">New to our platform? <a href="/register" className="text-blue-500 hover:underline">Register Now</a></div>
                </div>
            </div>
        </MainLayout>
    )
}