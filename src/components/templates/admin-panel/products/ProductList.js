"use client";
import React, { useState } from "react";
import Pagination from "@/components/modules/Pagination";
import ProductDetailsModal from "./ProductDetailsModal";
import Modal from "@/components/modules/modals/Modal";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import EditProductInfoModal from "./EditProductInfoModal";
import EditProductTranscript from "./EditProductTranscript";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";
import {
  HiOutlinePencilSquare,
  HiOutlineTrash,
  HiOutlineInformationCircle,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import apiRequest from "@/libs/axios/configs";

export default function ProductList({ products }) {
  const [shownProducts, setShownProducts] = useState(products);
  const [mainProduct, setMainProduct] = useState(null);
  const [currentModal, setCurrentModal] = useState(null);

  const removeProduct = async (productID) => {
    await apiRequest.delete("/products", { data: { id: productID } });
    setCurrentModal(null);
    location.reload();
  };

  return (
    <>
      {shownProducts.length === 0 ? (
        <EmptyContainer message="موردی برای نمایش وجود ندارد" />
      ) : (
        <>
          <table className="cms-table mx-8">
            <thead>
              <tr>
                <th>ردیف</th>
                <th className="hidden lg:table-cell">کاور</th>
                <th>عنوان کتاب</th>
                <th>نویسنده</th>
                <th className="hidden md:table-cell">موضوع</th>
                <th className="hidden md:table-cell">انتشارات</th>
                <th className="hidden lg:table-cell">قیمت جلد</th>
                <th className="hidden lg:table-cell">قیمت فروش</th>
                <th>موجودی</th>
                <th>تنظیمات</th>
              </tr>
            </thead>
            <tbody>
              {shownProducts.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td className="hidden lg:table-cell">
                    <img className="cms-cover" src={product.image} alt="" />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.author}</td>
                  <td className="hidden md:table-cell">{product.category}</td>
                  <td className="hidden md:table-cell">{product.publisher}</td>
                  <td className="hidden lg:table-cell">{product.printPrice}</td>
                  <td className="hidden lg:table-cell">{product.salePrice}</td>
                  <td>{product.qty}</td>
                  <td className="flex-center gap-1 mt-3">
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("details");
                        setMainProduct(product);
                      }}
                    >
                      <span className="hidden md:inline-flex">جزئیات</span>
                      <HiOutlineClipboardDocumentList className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("edit-info");
                        setMainProduct(product);
                      }}
                    >
                      <span className="hidden md:inline-flex">ویرایش</span>
                      <HiOutlineInformationCircle className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn"
                      onClick={() => {
                        setCurrentModal("edit-transcript");
                        setMainProduct(product);
                      }}
                    >
                      <span className="hidden md:inline-flex">ویرایش متون</span>
                      <HiOutlinePencilSquare className="icon-sm" />
                    </button>
                    <button
                      className="cms-btn delete"
                      onClick={() => {
                        setCurrentModal("delete");
                        setMainProduct(product);
                      }}
                    >
                      <span className="hidden md:inline-flex">حذف</span>
                      <HiOutlineTrash className="icon-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            items={products}
            setShownItems={setShownProducts}
            count={4}
            type="cms"
          />
        </>
      )}

      {currentModal && (
        <Modal>
          {currentModal === "details" ? (
            <ProductDetailsModal
              content={mainProduct}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "delete" ? (
            <ConfirmModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={() => removeProduct(mainProduct._id)}
            />
          ) : currentModal === "edit-info" ? (
            <EditProductInfoModal
              content={mainProduct}
              closeModal={() => setCurrentModal(null)}
            />
          ) : currentModal === "edit-transcript" ? (
            <EditProductTranscript
              content={mainProduct}
              closeModal={() => setCurrentModal(null)}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
}
