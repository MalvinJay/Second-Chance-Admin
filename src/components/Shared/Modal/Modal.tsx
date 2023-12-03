import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface IModalProps {
  isOpen: boolean;
  closeModal: (e: boolean) => void;
  title?: string;
  children: React.ReactNode;
  style?: string;
}

export default function MyModal(props: IModalProps) {
  const { isOpen, closeModal, title, children, style } = props;

  return (
    <div className="w-screen h-screen">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-screen h-screen fixed inset-0 bg-gray-900/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`${style} transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all px-0 py-6`}
                >
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                  )}
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
