import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function ImageModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = Number((await params).id);
  const image = await getImage(photoId);
  return (
    <div className="h-full w-full">
      <Image
        alt={image.name}
        className="h-full w-full object-contain"
        height={150}
        src={image.url}
        width={150}
        style={{ viewTransitionName: `image-${photoId}` }}
      />
    </div>
  );
}
