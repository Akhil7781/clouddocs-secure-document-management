import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {

    return (

        <div className="bg-gray-100 min-h-screen">

            <Sidebar />

            <div className="ml-72 min-h-screen flex flex-col">

                <Navbar />

                <main className="flex-1 p-8">

                    {children}

                </main>

                <footer className="border-t bg-white py-4 text-center text-gray-500 text-sm">

                    © 2026 CloudDocs • Developed by Akhil

                </footer>

            </div>

        </div>

    );

}

export default DashboardLayout;