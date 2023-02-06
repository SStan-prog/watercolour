import React from 'react';
import './MenuAnimate.css';

interface Props {
  open: boolean;
  menu: any;
}

const MobileMenu = ({ open, menu }: Props) => {
  return (
    <ul
      className={
        'absolute top-full z-50 w-full overflow-hidden border-t-4 border-red bg-white px-3 py-5 shadow sm:px-10' +
        ' ' +
        (open
          ? 'menu-animate-forwards block'
          : ' menu-animate-reverse hidden max-h-0')
      }
    >
      {menu.menuItems.nodes.map((menuItem: any) => {
        const hasChildren =
          null !== menuItem.childItems.edges
            ? menuItem.childItems.edges.length
            : false;
        return (
          <li
            key={menuItem.label}
            className={
              'whitespace-nowrap px-2 py-3 transition-all' +
              ' ' +
              (hasChildren
                ? ' bg-mobile-white-faded'
                : '  border-b border-mobile-white-faded sm:ml-10')
            }
          >
            <a href={menuItem.uri} className="px-5 font-bold text-black-400">
              {menuItem.label}
            </a>
          </li>
        );
      })}
      <li className="">
        <a
          href=""
          className=" bold block cursor-pointer rounded border-2 border-red bg-red  px-2
              py-1 text-sm uppercase text-white transition duration-100 ease-linear hover:bg-transparent
              hover:text-red 
              "
        >
          register
        </a>
      </li>
    </ul>
  );
};

export default MobileMenu;
