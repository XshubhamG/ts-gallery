import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const TopNav = () => {
  return (
    <nav className="flex items-center gap-4">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default TopNav;
