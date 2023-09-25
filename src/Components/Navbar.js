import { Disclosure, Menu, Transition } from "@headlessui/react";
import { IoAppsSharp } from "react-icons/io5";

const navigation = [
  { name: "Historia", href: "#history", current: false },
  { name: "Galeria", href: "#galeria", current: false },
  { name: "Tu Historia", href: "#comments", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const handleNavClick = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 78, // Ajusta esto según sea necesario
      behavior: "smooth",
    });
  }
};

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white fixed top-0  w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IoAppsSharp
                      className="block h-6 w-6 bg-black"
                      aria-hidden="true"
                    />
                  ) : (
                    <IoAppsSharp
                      className="block h-6 w-6 bg-black"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoETXvIOBcgHrxzzC9OMzfjA21zoLmBcpBQQ&usqp=CAU"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
