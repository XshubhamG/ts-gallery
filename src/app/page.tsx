import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (models, { desc }) => [desc(models.id)],
    limit: 10,
  });

  return (
    <main>
      <SignedOut>
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full p-4">
          <h2 className="text-2xl font-bold">Welcome to TS Gallery</h2>
          <p className="text-white text-md font-bold">
            Please sign in to view images
          </p>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="grid grid-cols-3 gap-4 p-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative flex flex-col items-center justify-center gap-4 w-full h-full"
            >
              <Image
                src={image.url}
                alt={image.name}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
              <p className="text-white text-md font-bold">{image.name}</p>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}
