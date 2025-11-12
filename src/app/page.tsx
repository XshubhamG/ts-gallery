import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const images = await db.query.images.findMany({
  orderBy: (models, { desc }) => [desc(models.id)],
  limit: 10,
});

export default async function HomePage() {
  return (
    <main>
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
    </main>
  );
}
