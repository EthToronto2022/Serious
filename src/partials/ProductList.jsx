import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

import { PRODUCT_LIST } from "../constants";
import { useBuyerFlow } from "../context/buyerFlow";
import { useUserContract } from "../utils/contractInterfaceUser";

function ProductList() {
  const { config, setConfig, resetConfig } = useBuyerFlow();
  const { loading, keywords } = useUserContract();

  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    resetConfig();
  }, []);

  const filteredKeywords = useMemo(
    () => PRODUCT_LIST.filter((product) => !keywords.includes(product.id)),
    [keywords]
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="">
        <div className="">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4" data-aos="zoom-y-out">
                What do you need?
              </h1>
              <p
                className="text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Service providers will compete to earn your business{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center items-center pt-5">
        {filteredKeywords.map(({ id, title, icon }, index) => (
          <div
            onClick={() => {
              setConfig({
                ...config,
                product: index === selectedIndex ? {} : PRODUCT_LIST[index],
              });
              setSelectedIndex(index === selectedIndex ? null : index);
            }}
            key={id}
            className={`flex items-center px-3 py-1 mx-2 gap-4 h-12 rounded-md shadow-lg hover:shadow-xl duration-300 mb-4 border-2 border-transparent ${
              selectedIndex === index && "bg-slate-200 border-blue-600"
            }`}
          >
            {icon}
            <h3 className="font-light text-zinc-600">{title}</h3>
          </div>
        ))}
      </div>
      {selectedIndex !== null ? (
        <Link
          to={`/products/${PRODUCT_LIST[selectedIndex].id}`}
          className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 mt-4"
        >
          Next
        </Link>
      ) : null}
    </div>
  );
}

export default ProductList;
