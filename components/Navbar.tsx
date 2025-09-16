import Link from "next/link";


function Navbar() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href={`/`} className="">
                            <span className="ml-2 text-xl font-semibold text-gray-900">Task Board</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link 
                            href={`/jobs`}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                        >Browse Jobs</Link>
                        <Link 
                            href={`/jobs/post`}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                        >Post a Job</Link>
                        <Link 
                            href={`/dashbaord`}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                        >Dashboard</Link>
                        <Link 
                            href={`/api/auth/signin`}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                        >Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;