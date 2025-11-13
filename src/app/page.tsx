import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { userId } = await auth();
  const images = userId ? await getMyImages() : [];

  return (
    <main>
      <SignedOut>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
          <h2 className="font-bold text-2xl">Welcome to TS Gallery</h2>
          <p className="font-bold text-md text-white">
            Please sign in to view images
          </p>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="grid grid-cols-3 gap-4 p-4">
          {images.map((image) => (
            <div
              className="relative flex h-full w-full flex-col items-center justify-center gap-4"
              key={image.id}
            >
              <Image
                alt={image.name}
                className="h-full w-full object-cover"
                height={100}
                src={image.url}
                width={100}
              />
              <p className="font-bold text-md text-white">{image.name}</p>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}
