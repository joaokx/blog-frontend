import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <Link href="/">
                <a className="flex items-center cursor-pointer">
                    <Image src="/logo.png" height={35} width={40} alt="Logo" />
                    <span className="font-bold ml-2 text-primary">
                        TechJP Blog
                    </span>
                </a>
            </Link>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <Link href="#">
                        <a>Produtos</a>
                    </Link>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <Link href="#">
                        <a>Preços</a>
                    </Link>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <Link href="#">
                        <a>Documentos</a>
                    </Link>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <Link href="#">
                        <a>Sobre</a>
                    </Link>
                </li>
            </ul>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <Link href="#">
                        <a className="hover:text-gray-400">Log in</a>
                    </Link>
                </li>
                <li className="font-medium text-gray-600">
                    <Link href="#">
                        <a className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all">
                            Sign up
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
