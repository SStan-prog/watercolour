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
        'absolute z-50 top-full px-3 sm:px-10 w-full border-t-4 border-red py-5 shadow bg-white overflow-hidden' +
        ' ' +
        (open
          ? 'block menu-animate-forwards'
          : ' hidden max-h-0 menu-animate-reverse')
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
              'px-2 py-3 transition-all whitespace-nowrap' +
              ' ' +
              (hasChildren
                ? ' bg-mobile-white-faded'
                : '  sm:ml-10 border-b border-mobile-white-faded')
            }
          >
            <a href={menuItem.uri} className="px-5 font-bold">
              {menuItem.label}
            </a>
          </li>
        );
      })}
      <li className="">
        <a
          href=""
          className=" bg-red px-2 py-1 uppercase bold text-sm text-white  cursor-pointer
              rounded border-2 border-red hover:text-red hover:bg-transparent transition duration-100 ease-linear
              block 
              "
        >
          register
        </a>
      </li>
    </ul>
  );
};

export default MobileMenu;
