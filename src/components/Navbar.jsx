import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, LogIn, UserPlus } from 'lucide-react';

function Navbar() {
    const linkClass = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
        }`;

    return (
        <nav className=" gap-2">
            <div className="max-w-4xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold tracking-tight">RouteFlow</span>
                    <div className="flex items-center  rounded-2xl">
                        <NavLink to="/" className={linkClass}>
                            <Home size={16} gap={2} /> Home
                        </NavLink>
                        <NavLink to="/dashboard" className={linkClass}>
                            <LayoutDashboard size={16} gap={2} /> Dashboard
                        </NavLink>
                        <NavLink to="/login" className={linkClass}>
                            <LogIn size={16} gap={2} /> Login
                        </NavLink>
                        <NavLink to="/signup" className={linkClass}>
             <UserPlus size={16} gap={2} /> Signup
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;