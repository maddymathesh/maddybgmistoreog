import { db, products } from "@repo/db";

async function run() {
  try {
    const [newProduct] = await db
      .insert(products)
      .values({
        title: "Test Product",
        description: "Test",
        price: "1000",
        category: "Budget",
        status: "available",
        youtubeUrl: null,
        primaryLogin: "Facebook",
        secondaryLogin: "Play Games",
        unlinkGuarantee: "Not Applicable",
        tag: "None",
        imageUrls: []
      })
      .returning();
    console.log("Success", newProduct);
  } catch (error: any) {
    console.error("Failed to insert:", error.message);
  }
}

run();
