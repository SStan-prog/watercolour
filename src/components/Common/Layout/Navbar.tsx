import { useState } from 'react';
import MobileMenu from './MobileMenu';

interface Menu {
  menu: any;
}

const Navbar = ({ menu }: Menu) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [btn, setBtn] = useState('MENU');
  const toggle = () => {
    if (!openMenu) {
      setOpenMenu(!openMenu);
      setBtn('CLOSE');
    } else if (openMenu) {
      setOpenMenu(!openMenu);
      setBtn('MENU');
    }
  };

  return (
    <nav className=" w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-0">
      <div className=" relative flex items-center ">
        <div className=" w-44  sm:w-60 md:w-80 ">
          <a href="/" className="w-full">
            <img
              src="/logos/main-logo.png"
              alt="Watercolour Westport"
              className=" "
            />
          </a>
        </div>

        <ul className=" hidden lg:flex items-center justify-around w-full ml-10">
          {menu.menuItems.nodes.map((menuItem: any) => {
            const hasChildren =
              null !== menuItem.childItems.edges
                ? menuItem.childItems.edges.length
                : false;

            return hasChildren ? (
              <li key={menuItem.label} className=" relative group py-5">
                <div className=" flex">
                  <span className="font-bold uppercase text-sm  text-black-400">
                    {menuItem.label}{' '}
                  </span>
                  <img
                    src="/icons/down-arrow.svg"
                    alt="down arrow"
                    className="down ml-4 w-4"
                  />
                </div>
                <ul className=" absolute mt-4 group-hover:block hidden border-t-4 border-red py-5 shadow bg-white z-10">
                  {menuItem.childItems.edges.map((subItem: any) => {
                    return (
                      <li
                        key={subItem.label}
                        className="p-2 px-8 whitespace-nowrap font-bold uppercase text-sm  text-black-400"
                      >
                        <a href={subItem.node.uri}>{subItem.node.label}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : null;
          })}

          <li className="">
            <a
              href=""
              className=" bg-red px-2 py-1 uppercase bold text-sm text-white  cursor-pointer
              rounded border-2 border-red hover:text-red hover:bg-transparent transition duration-100 ease-linear"
            >
              register
            </a>
          </li>
        </ul>

        <button
          className="lg:hidden w-24 ml-auto px-4 py-2 border-2 border-red text-red cursor-pointer"
          onClick={toggle}
        >
          {btn}
        </button>
        <MobileMenu open={openMenu} menu={menu} />
      </div>
    </nav>
  );
};

export default Navbar;
