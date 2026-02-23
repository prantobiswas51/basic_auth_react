import MainLayout from "../layouts/MainLayout"

export default function Dashboard() {

    return (
        <MainLayout>
            <div className="p-6 flex items-center flex-col py-12">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <p>Welcome to your dashboard!</p>
            </div>
        </MainLayout>
    )
}