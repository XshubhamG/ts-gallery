import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
	const user = await auth();

	if (!user.sessionClaims?.sub) throw new Error("Unauthorized");

	const images = await db.query.images.findMany({
		where: (model, { eq }) => eq(model.userId, user.sessionClaims.sub),
		orderBy: (models, { desc }) => [desc(models.id)],
		limit: 10,
	});

	return images;
}
