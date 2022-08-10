import React from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ProductList from "../partials/ProductList";

function Products() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <ProductList />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Products;
