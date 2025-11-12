"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

const TopNav = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center gap-4">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={() => {
            router.refresh();
          }}
        />
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default TopNav;
