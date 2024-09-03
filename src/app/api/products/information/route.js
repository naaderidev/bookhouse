import connectToDB from "@/configs/db";
import productModel from "@/models/Product";

export async function POST(req) {
  try {
    connectToDB();
    const formData = await req.formData();
    const id = formData.get("id")
    const title = formData.get("title");
    const author = formData.get("author");
    const translator = formData.get("translator");
    const editor = formData.get("editor");
    const category = formData.get("category");
    const publisher = formData.get("publisher");
    const publishDate = formData.get("publishDate");
    const printPrice = formData.get("printPrice");
    const salePrice = formData.get("salePrice");
    const secondHand = formData.get("secondHand");
    const rupture = formData.get("rupture");
    const highlight = formData.get("highlight");
    const qty = formData.get("qty");
    const discount = formData.get("discount");

    await productModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          author,
          translator,
          editor,
          category,
          publisher,
          publishDate,
          printPrice,
          salePrice,
          secondHand,
          rupture,
          highlight,
          qty,
          discount,
        },
      }
    );
    return Response.json(
      { message: "product info updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
