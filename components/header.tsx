"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";
import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


const Header = () => {
  return (
    <div className="bg-black">
      <FlipNav />
      
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black p-4 border-b-[1px] border-gray-700 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <div className="">
        <p className="  text-2xl font-mono">
            <span className="text-red-600">ERA</span>
            <span className="text-blue-600">SER</span>
        </p>
    </div>
  );
};

const NavLeft = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-200 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="Dashboard" />
      <NavLink text="Community" />
      <NavLink text="Pricing" />
      <NavLink text="Company" />
    </div>
  );
};

const NavLink = ({ text }: { text: string }) => {
  return (
    <Link
      href={`/${text.toLowerCase()}`}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-200">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-400">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <Button className="text-white " variant="ghost">
        <LoginLink postLoginRedirectURL="/dashboard">
          Sign in
        </LoginLink>
        
      </Button>
      <Button className="text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:text-gray-200" variant="ghost">
        <RegisterLink postLoginRedirectURL="/dashboard">
            Sign up
        </RegisterLink>
        </Button>
      
    </div>
  );
};

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Solutions" />
      <MenuLink text="Community" />
      <MenuLink text="Pricing" />
      <MenuLink text="Company" />
    </motion.div>
  );
};

const MenuLink = ({ text }: { text: string }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default Header;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};