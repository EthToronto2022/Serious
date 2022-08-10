import React from "react";
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import ProductList from '../partials/ProductList'
import ProgressBar from '../partials/ProgressBar'


function Products() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <div className="">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>

        <ProductList />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Products;
