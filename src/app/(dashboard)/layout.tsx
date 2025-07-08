export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-800 text-white fixed left-0 p-4 z-0">
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-800">
                Dashboard
              </a>
            </li>
            <li className="relative group">
              <button className="flex items-center w-full py-2 px-3 rounded hover:bg-gray-600 focus:outline-none">
                <span>Users</span>
                <svg
                  className="ml-auto w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="hidden group-hover:block group-focus-within:block bg-gray-800 rounded shadow-lg min-w-max z-10 mt-2">
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                    All Users
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                    Add User
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <button className="flex items-center w-full py-2 px-3 rounded hover:bg-gray-800 focus:outline-none">
                <span>Settings</span>
                <svg
                  className="ml-auto w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="hidden group-hover:block group-focus-within:block bg-gray-800 rounded shadow-lg min-w-max z-10 mt-2">
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                    Account
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-800">
                Reports
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 ml-64">{children}</main>
    </div>
  );
}
