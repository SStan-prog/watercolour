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
    <nav className=" mx-auto w-full max-w-6xl px-5 sm:px-10 lg:px-0 ">
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

        <ul className=" ml-10 hidden w-full items-center justify-around lg:flex">
          {menu.menuItems.nodes.map((menuItem: any) => {
            const hasChildren =
              null !== menuItem.childItems.edges
                ? menuItem.childItems.edges.length
                : false;

            return hasChildren ? (
              <li key={menuItem.label} className=" group relative py-5">
                <div className=" flex">
                  <span className="text-sm font-bold uppercase  text-black-400">
                    {menuItem.label}{' '}
                  </span>
                  <img
                    src="/icons/down-arrow.svg"
                    alt="down arrow"
                    className="down ml-4 w-4"
                  />
                </div>
                <ul className=" absolute z-10 mt-4 hidden border-t-4 border-red bg-white py-5 shadow group-hover:block">
                  {menuItem.childItems.edges.map((subItem: any) => {
                    return (
                      <li
                        key={subItem.label}
                        className="whitespace-nowrap p-2 px-8 text-sm font-bold uppercase  text-black-400"
                      >
                        <a className="text-black-400" href={subItem.node.uri}>
                          {subItem.node.label}
                        </a>
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
              className=" bold cursor-pointer rounded border-2 border-red bg-red px-2  py-1
              text-sm uppercase text-white transition duration-100 ease-linear hover:bg-transparent hover:text-red"
            >
              register
            </a>
          </li>
        </ul>

        <button
          className="ml-auto w-24 cursor-pointer border-2 border-red px-4 py-1 text-red sm:py-2 lg:hidden"
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
