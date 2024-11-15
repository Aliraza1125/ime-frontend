import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

const DropDown = ({ button, options, direction }) => {
    return (
        <Menu as="div" className="relative z-[999] text-black font-semibold text-[18px] leading-[20px] cursor-pointer uppercase font-notoSans">
            <Menu.Button className="text-black font-semibold text-[18px] leading-[20px] cursor-pointer uppercase font-notoSans">{button}</Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={`absolute overflow-hidden z-[999] mt-2 w-40 divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none ${direction}`}>
                    {options?.map((option, optIndex) => (
                        <Menu.Item
                            onClick={() => option.action()}
                            key={optIndex}
                            className={({ active }) => `relative select-none py-2 px-4 ${active ? 'bg-primary/10 text-primary' : 'text-gray-900'}`}
                        >
                            <button className="w-full block truncate font-medium text-left font-lato hover:flex  hover:items-center hover:rounded-xl hover:text-white hover:bg-theme-gradient">
                                {option?.label}
                            </button>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default DropDown;
