import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://t7e4i9ng2x.ufs.sh/f/5CH8qoJLmdFzxmGdsZowaOE4KtYVzfTJn3gbyvFDPqusZ59d",
  "https://t7e4i9ng2x.ufs.sh/f/5CH8qoJLmdFzPsb5K2Ngpbai2Lfz1luW4NqhxHXkcyUjsC6e",
  "https://t7e4i9ng2x.ufs.sh/f/5CH8qoJLmdFzWJUNdoaG7o9XUVsMaIyJi3TQpn1LxdeF0KDm",
  "https://t7e4i9ng2x.ufs.sh/f/5CH8qoJLmdFzygOYJJBVLGCpNVOWft7BlH9Ro6AqjT3YsEPa",
  "https://t7e4i9ng2x.ufs.sh/f/5CH8qoJLmdFzygOYJJBVLGCpNVOWft7BlH9Ro6AqjT3YsEPa",
  "https://t7e4i9ng2x.ufs.sh/f/5CH8qoJLmdFzQAd5oy94DNivk32t7yWM0KbFPIBUdSmlXHGj",
];

const mockImages = mockUrls.map((url, index) => ({
  id: `image-${index + 1}`,
  src: url,
  width: Math.floor(Math.random() * 100) + 100,
  height: Math.floor(Math.random() * 100) + 100,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main>
      <div className="grid grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-300 p-4 rounded-md">
            <p>{post.name}</p>
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.id}
              width={image.width}
              height={image.height}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
