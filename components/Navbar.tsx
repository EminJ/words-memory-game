import { LuSettings } from "react-icons/lu";
import ThemeButton from './ThemeButton';

export function Navbar() {
    return (
        <nav className="flex justify-between items-center h-[4.25rem] fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 shadow-md">
            <div className="container mx-auto">
                <div className="flex items-center justify-between w-full">
                    <a href="/" className="text-3xl font-black btn btn-ghost hover:bg-transparent gap-0 baloo">
                        Words Memory
                    </a>
                    <ul className="flex items-center space-x-2">
                        <li>
                            <ThemeButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
