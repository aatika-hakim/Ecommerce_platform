import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '../../../public/assets/ELogo.png';
import {
    FaMobile,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="relative z-10 pt-10 bg-gray-800 dark:bg-dark">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                            <div className="w-full mb-10">
                                <Link href="/#" className="mb-6 inline-block max-w-[160px]">
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        height={50}
                                        width={50}
                                        className="w-12 max-w-full dark:block"
                                    />
                                    <h1 className='font-bold text-slate-900 dark:text-white'>E-Bazaar</h1>
                                </Link>
                                <p className="text-sm text-white mb-7">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eum laudantium, placeat ratione deserunt natus explicabo, quam ipsam repellendus corrupti excepturi pariatur? Molestiae illum assumenda ad suscipit, inventore quod omnis?
                                </p>
                                <p className="flex items-center text-sm font-medium text-white">
                                    <span className="mr-3">
                                        <FaMobile />
                                    </span>
                                    <span>+92 000000000</span>
                                </p>
                            </div>
                        </div>

                        <LinkGroup header="Resources">
                            <NavLink link="/#" label="SaaS Development" />
                            <NavLink link="/#" label="Our Products" />
                            <NavLink link="/#" label="User Flow" />
                            <NavLink link="/#" label="User Strategy" />
                        </LinkGroup>
                        <LinkGroup header="Company">
                            <NavLink link="/#" label="About Us" />
                            <NavLink link="/#" label="Contact & Support" />
                            <NavLink link="/#" label="Success History" />
                            <NavLink link="/#" label="Setting & Privacy" />
                        </LinkGroup>
                        <LinkGroup header="Quick Links">
                            <NavLink link="/#" label="Premium Support" />
                            <NavLink link="/#" label="Our Services" />
                            <NavLink link="/#" label="Know Our Team" />
                            <NavLink link="/#" label="Download App" />
                        </LinkGroup>

                        <div
                            data-aos="zoom-in"
                            className="w-full px-4 sm:w-1/2 lg:w-3/12">
                            <div className="w-full mb-10">
                                <h4 className="mb-3 text-lg font-semibold text-white">
                                    Follow Us On
                                </h4>
                                <div className="flex items-center mb-6">
                                    <Link
                                        href="javascript:void(0)"
                                        className="flex items-center justify-center w-8 h-8 mr-3 text-white border rounded-full border-stroke hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <FaTwitter />
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="flex items-center justify-center w-8 h-8 mr-3 text-white border rounded-full border-stroke hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <FaFacebook />
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="flex items-center justify-center w-8 h-8 mr-3 text-white border rounded-full border-stroke hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <FaInstagram />
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="flex items-center justify-center w-8 h-8 mr-3 text-white border rounded-full border-stroke hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <FaLinkedin />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className="flex justify-between h-10 p-3 text-xs text-white bg-gray-900">
                    <Link href="/#">
                        <Image
                            src={logo}
                            alt="Logo"
                            height={4}
                            width={4}
                            className="w-4"
                        />
                    </Link>
                    <p>All rights reserved &copy; 2024</p>
                    <p>Designed and Developed by: {' '}
                        <Link href="mailto:aatikahakim90@gmail.com"><u>Aatika hakim</u></Link>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;

const LinkGroup = ({ children, header }: any) => {
    return (
        <>
            <div
                data-aos="zoom-in"
                className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="w-full mb-10">
                    <h4 className="mb-3 text-lg font-bold text-white">
                        {header}
                    </h4>
                    <ul className="space-y-1">{children}</ul>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ link, label }: any) => {
    return (
        <li>
            <Link
                href={link}
                className="inline-block text-sm leading-loose text-white hover:text-primary"
            >
                {label}
            </Link>
        </li>
    );
};
