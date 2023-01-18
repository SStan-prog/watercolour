import React, { useState } from 'react';
import styles from './styles.module.scss';

interface question {
  question: string;
  answer: string;
}

const dropdown = ({ question, answer }: question) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={toggle}
      className={`cursor-pointer p-5 border border-grey-300 transition-colors overflow-hidden ${
        open ? 'bg-white' : 'bg-grey-200'
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className=" text-black-100 text-lg ">{question}</h3>
        <div className="bg-grey-300 rounded-full h-5 w-5  relative">
          <div
            className={` bg-grey-200 h-4 w-[1px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>
          <div className="bg-grey-200 h-[1px] w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      <div
        className={`${
          open
            ? 'opacity-1 h-full max-h-[999px] pt-5'
            : 'opacity-0 max-h-0 pt-0'
        } transition-all duration-1000 ${styles.answer} `}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  );
};

export default dropdown;
