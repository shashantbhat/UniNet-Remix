import { useNavigate } from "@remix-run/react";

// handleLogout function
function handleLogout() {
  // Clear the session
  sessionStorage.removeItem("user");
  // Navigate to the login page
}

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between bg-gray-400/70 backdrop-blur-lg text-white h-[70px] p-4">
      <div className="p-4 text-lg font-bold">
        <img
          src="/public/logo_UniNet_text.png"
          alt="Uninet Logo"
          className="h-8 w-[150px]"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-black hover:text-gray-500">Profile</button>
        <button
          onClick={handleLogout}
          className="text-black hover:text-gray-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}