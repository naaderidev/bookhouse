import connectToDB from "@/configs/db";
import productModel from "@/models/Product";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    connectToDB();
    const formData = await req.formData();

    const title = formData.get("title");
    const author = formData.get("author");
    const translator = formData.get("translator");
    const editor = formData.get("editor");
    const category = formData.get("category");
    const publisher = formData.get("publisher");
    const publishDate = formData.get("publishDate");
    const printPrice = formData.get("printPrice");
    const salePrice = formData.get("salePrice");
    const image = formData.get("image");
    const details = formData.get("details");
    const introduction = formData.get("introduction");
    const description = formData.get("description");
    const secondHand = formData.get("secondHand");
    const rupture = formData.get("rupture");
    const highlight = formData.get("highlight");
    const qty = formData.get("qty");
    const discount = formData.get("discount");
    const tags = formData.get("tags");

    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = Date.now() + image.name;
    const imagePath = path.join(process.cwd(), "public/uploads/" + filename);
    await writeFile(imagePath, buffer);

    const product = await productModel.create({
      title,
      author,
      translator,
      editor,
      category,
      publisher,
      publishDate,
      printPrice,
      salePrice,
      image: `http://localhost:3000/uploads/${filename}`,
      details,
      introduction,
      description,
      secondHand,
      rupture,
      highlight,
      qty,
      discount,
      tags,
    });

    return Response.json(
      { message: "New product created successfully", data: product },
      { status: 201 }
    );
  } catch (err) {
    console.log("err:::", err);
    return Response.json({ message: err }, { status: 500 });
  }
}

// image uploader
export async function PUT(req) {
  const formData = await req.formData();
  const image = formData.get("image");

  if (!image) {
    return Response.json({ message: "product has no image!" }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = Date.now() + image.name;
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );

    return Response.json(
      { message: "product image uploaded successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  connectToDB();
  const { searchParams } = new URL(req.url);
  const param = searchParams.get("q");
  try {
    if (param) {
      const searchedProducts = await productModel.find({
        title: { $regex: param },
      });
      return Response.json(searchedProducts);
    } else {
      const products = await productModel.find({}, "-__v").populate("comments");
      return Response.json(products);
    }
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { id } = body;
    await productModel.findOneAndDelete({ _id: id });

    return Response.json(
      { message: "product deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}