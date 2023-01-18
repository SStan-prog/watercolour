import { useState } from 'react';
import styles from './styles.module.scss';

interface Partner {
  body: string;
  heading: string;
}

const dropdown = ({ body, heading }: Partner) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className=" max-w-[350px] mt-10">
      <div
        onClick={toggle}
        className={`cursor-pointer p-5 border border-grey-300 transition-colors overflow-hidden ${
          open ? 'bg-white' : 'bg-grey-200'
        }`}
      >
        <div className="flex justify-between items-center w-full gap-5">
          <h2 className=" text-black-100 text-lg ">{heading}</h2>
          <div className="bg-grey-300 max-w-[20px] h-5 w-9 rounded-full  relative flex-grow">
            <div
              className={`bg-grey-200 h-4 w-[1px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
            <div className="bg-grey-200 h-[1px] w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
          </div>
        </div>

        <div
          className={`${
            open
              ? 'opacity-1 h-full max-h-[999px] pt-5'
              : 'opacity-0 max-h-0 pt-0'
          } transition-all duration-1000 ${styles.answer}`}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
};

export default dropdown;
