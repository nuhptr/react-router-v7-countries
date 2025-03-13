import { NavLink } from "react-router"

export function Navbar() {
    return (
        <div className="w-full px-8 text-gray-700 bg-white border-b border-gray-100 fixed z-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-5">
                <div className="flex flex-col md:flex-row items-center">
                    <NavLink to="/" className="flex items-center mb-5 md:mb-0">
                        <span className="text-xl font-semibold tracking-tight text-gray-900 select-none">
                            WIKI <span className="text-indigo-600">Country</span>
                        </span>
                    </NavLink>

                    <nav className="flex flex-wrap items-center tracking-[-0.005em] ml-0 md:ml-8 md:border-l md:pl-8">
                        <NavLink to="/" end className="mr-5 font-normal text-gray-600 hover:text-gray-900">
                            Home
                        </NavLink>
                        <NavLink to="/countries" className="mr-5 font-normal text-gray-600 hover:text-gray-900">
                            Countries
                        </NavLink>
                        <NavLink to="/about" className="mr-5 font-normal text-gray-600 hover:text-gray-900">
                            About
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}
