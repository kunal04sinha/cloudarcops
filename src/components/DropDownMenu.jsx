import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ChevronDownIcon from "../assets/icon/ChevronDownIcon";
import { Link } from "react-router-dom";

const DropDownMenu = ({ title, menuItems }) => {
  return (
    <Menu>
      <MenuButton className="text-gray-700 hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center gap-2  ">
        {({ active, hover }) => {
          return (
            <>
              {title}
              <ChevronDownIcon
                className={`${active && "rotate-180"}`}
                color={`${hover ? "#60A5FA" : "#374151"}`}
              />
            </>
          );
        }}
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className=" absolute bg-white min-w-32 shadow-lg rounded-xl border border-white/5 p-1 text-sm/6 transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-[1001]"
      >
        {menuItems?.map((menuItem) => (
          <MenuItem>
            <Link
              to={menuItem.path}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-slate-700  data-[focus]:text-white"
            >
              {menuItem?.title}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
export default DropDownMenu;
