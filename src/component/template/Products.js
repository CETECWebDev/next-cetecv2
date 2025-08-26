"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";
import { products } from "./productsData";

export default function Products() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="products"
      className="py-10 bg-gradient-to-b from-[#f0f0f0] to-white dark:from-[#0f2027] dark:to-[#203a43]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
          محصولات ما
        </h2>

        <div className="hidden lg:grid lg:grid-cols-3 gap-10 items-stretch">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 150} />
          ))}

          <div className="lg:col-span-3 flex justify-center gap-10 mt-10">
            {products.slice(3).map((product, index) => (
              <ProductCard key={product.id} product={product} delay={(index + 3) * 150} />
            ))}
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-10 items-stretch">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 150} />
          ))}
          <div className="sm:col-span-2">
            <ProductCard product={products[4]} delay={4 * 150} />
          </div>
        </div>
      </div>
    </section>
  );
}
