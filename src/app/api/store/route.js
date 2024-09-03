import connectToDB from "@/configs/db";
import productModel from "@/models/Product";

export async function GET(req) {
  connectToDB();
  // const { searchParams } = new URL(req.url);
  const url = new URL(req.url);
  const param = url.searchParams.get("cat");
  try {
    if (param) {
      const searchedProducts = await productModel.find({
        category: param,
      });
      return Response.json(searchedProducts);
    } else {
      const products = await productModel.find({}, "-__v")
      return Response.json(products);
    }
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
