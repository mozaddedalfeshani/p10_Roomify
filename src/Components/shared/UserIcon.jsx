import React, { useContext } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import styles for the tooltip
import { AuthContext } from "../../provider/AuthProvider";

const UserIcon = ({ user }) => {
  const { LogOut } = useContext(AuthContext);
  const firstName = user?.displayName?.split(" ")[0] || "Anonymous";
  const logOutUser = async () => {
    try {
      await LogOut();
    } catch (error) {
      console.error("Error during logout:", error); // Log the error
    }
  };
  console.log(user);
  return (
    <div className="flex-row flex gap-3 shadow-sm items-center justify-around">
      {/* Change outer button to div */}
      <div className="flex flex-row justify-center items-center gap-1">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            {/* Add data-tooltip-id to trigger the Tooltip */}
            <img
              src={user.photoURL || "default-avatar.png"}
              alt={`${user?.displayName || "User"}'s avatar`}
              data-tooltip-id="user-tooltip" // ID for tooltip
              data-tooltip-content={user?.displayName || "Anonymous"} // Tooltip content
            />
            <Tooltip id="user-tooltip" place="top" offset={10} />{" "}
            {/* Tooltip configuration */}
          </div>
        </div>
        <button onClick={logOutUser}>Logout</button>
        {/* <FiLogOut className="w-10" /> */}
      </div>
    </div>
  );
};

export default UserIcon;
