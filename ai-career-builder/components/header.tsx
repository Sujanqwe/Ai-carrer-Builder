import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Link2,
  PenBox,
  StarIcon,
} from "lucide-react";
const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 ">
      <nav className="flex items-center justify-between px-4 h-16 mx-auto">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer"
                variant="outline"
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>
         
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarIcon className=" h-4 w-4" />
                <span className="hidden md:block">Growth Tools</span>
                <ChevronDown className=" h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/resume" className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  Build Resume
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <Link href="/ai-cover-letter" className="flex items-center">
                  <PenBox className="mr-2 h-4 w-4" />
                  <span> Ai Cover Letter</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                {" "}
                <Link href="/interview" className="flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Interview
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant={"outline"}>Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-10 w-10",
                  userButtonPopoverCard: "w-64",
                  userPreviewMainIdentifier: "text-sm",
                },
              }}
              afterSignOutUrl=""
            />
          </SignedIn>
        
        </div>
      </nav>
    </header>
  );
};

export default Header;
