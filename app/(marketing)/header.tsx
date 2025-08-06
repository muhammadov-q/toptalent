"use client";

import { useState } from "react";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Banner from "@/components/banner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { user } = useUser();
  const [hideBanner, setHideBanner] = useState(true);

  return (
    <>
      <Banner hide={hideBanner} setHide={setHideBanner} />

      <header
        className={cn(
          "h-20 w-full border-b-2 border-slate-200 px-4",
          !hideBanner ? "mt-20 sm:mt-16 lg:mt-10" : "mt-0"
        )}
      >
        <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
          <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
            <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />
            <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
              Top Talent
            </h1>
          </Link>

          <div className="flex gap-x-3 items-center">
            <ClerkLoading>
              <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
            </ClerkLoading>

            <ClerkLoaded>
              <SignedIn>
                <div className="flex items-center gap-x-3">
                  {user && (
                    <span className="text-sm font-medium text-gray-700">
                      Hello, {user.firstName || user.username || user.emailAddresses?.[0]?.emailAddress}
                    </span>
                  )}
                  <UserButton />
                </div>
              </SignedIn>

              <SignedOut>
                <SignInButton mode="modal">
                  <Button size="lg" variant="ghost">
                    Login
                  </Button>
                </SignInButton>
              </SignedOut>
            </ClerkLoaded>
          </div>
        </div>
      </header>
    </>
  );
};
