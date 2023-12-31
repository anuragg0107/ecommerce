import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchAllProductsAsync , selectAllProducts } from "../ProductListSlice";
import { Fragment } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faChevronDown,
  faTh,
  faFilter,
  faTimes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../../pages/Pagination/Pagination";
import { Link } from "react-router-dom";


const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "brand",
    name: "Brand",
    options:[
      { value: 'Apple', label: 'Apple', cheked: false },
      { value: 'Samsung', label: 'Samsung', cheked: false },
      { value: 'OPPO', label: 'OPPO', cheked: false },
      { value: 'Huawei', label: 'Huawei', cheked: false },
      { value: 'Infinix', label: 'Infinix', cheked: false },
      { value: 'HP Pavilion', label: 'HP Pavilion', cheked: false },
      { value: 'Microsoft Surface', label: 'Microsoft Surface', cheked: false },
      { value: 'Royal_Mirage', label: 'Royal_Mirage', cheked: false },
      { value: 'Impression of Acqua Di Gio', label: 'Impression of Acqua Di Gio', cheked: false },
      { value: 'Lord - Al-Rehab', label: 'Lord - Al-Rehab', cheked: false },
      { value: "L'Oreal Paris", label: "L'Oreal Paris", cheked: false },
      { value: 'Hemani Tea', label: 'Hemani Tea', cheked: false },
      { value: 'Dermive', label: 'Dermive', cheked: false },
      { value: 'ROREC White Rice', label: 'ROREC White Rice', cheked: false },
      { value: 'Fair & Clear', label: 'Fair & Clear', cheked: false },
      { value: 'Saaf & Khaas', label: 'Saaf & Khaas', cheked: false },
      { value: 'Bake Parlor Big', label: 'Bake Parlor Big', cheked: false },
      { value: 'Baking Food Items', label: 'Baking Food Items', cheked: false },
      { value: 'fauji', label: 'fauji', cheked: false },
      { value: 'Dry Rose', label: 'Dry Rose', cheked: false },
      { value: 'Boho Decor', label: 'Boho Decor', cheked: false },
      { value: 'Flying Wooden', label: 'Flying Wooden', cheked: false },
      { value: 'LED Lights', label: 'LED Lights', cheked: false },
      { value: 'luxury palace', label: 'luxury palace', cheked: false },
      { value: 'G olden', label: 'G olden', cheked: false }
    ]
    ,
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "smartphones", label: "Smartphones", checked: false },
      { value: "laptops", label: "Laptop", checked: false },
      { value: "fragrances", label: "Fragrances", checked: false },
      { value: "groceries", label: "Groceries", checked: false },
      { value: "home-decoration", label: "Home-Decoration", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductList() {
  const dispatch = useDispatch();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const products = useSelector(selectAllProducts)

  useEffect(()=>{
    dispatch(fetchAllProductsAsync())
  },[dispatch])
  
  const handleFilter =(e,section,option) =>{
  console.log(section.id,option.vlaue)
  }
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>

                      <FontAwesomeIcon
                        icon={faTimes}
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
          

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <FontAwesomeIcon icon={faMinus} />
                                  ) : (
                                    <FontAwesomeIcon icon={faPlus} />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      onChange={e =>console.log(e.target.value)}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
             All Products
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="-mr-1 ml-1 mt-1 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>

                <FontAwesomeIcon
                  icon={faTh}
                  className="h-5 w-5 mt-2"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FontAwesomeIcon
                  icon={faFilter}
                  className="h-5 w-5 mt-2"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
               
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <FontAwesomeIcon
                                  icon={faMinus}
                                  aria-hidden="true"
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  onChange={e =>handleFilter(e,section,option)}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      Customers also purchased
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {products.map((product) => (
                        <Link to='/Singleproduct'>
                        <div key={product.id} className="group relative rounded-md border-solid border-2 p-2 border-gray-200">
                          <div className=" min-h-60
                          aspect-h-1 aspect-w-1 
                          w-full overflow-hidden
                           rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                            <img
                              src={product.thumbnail}
                              alt={product.title}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </div>
                          <div className="mt-4 flex justify-between">
                            <div>
                              <h3 className="text-sm text-gray-700">
                                <a href={product.href}>
                                  <span
                                    aria-hidden="true"
                                    className="absolute inset-0"
                                  />
                                  {product.name}
                                </a>
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                              <FontAwesomeIcon icon={faStar} aria-hidden='true' />  <span className="align-bottom">{product.rating}</span>
                              </p>
                            </div>
                          <div>
                          <p className="text-sm block font-medium text-black-900">
                              $ {Math.round(product.price*(1- product.discountPercentage)/100)}
                            </p>
                          <p className="text-sm block line-through font-medium text-gray-500">
                              $ {product.price}
                            </p>
                          
                          </div>
                          </div>
                        </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Pagination></Pagination>
                </div>
              </div>
              {/* Pagination */}
              
             
            
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
