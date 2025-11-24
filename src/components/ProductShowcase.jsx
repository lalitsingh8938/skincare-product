import React from "react";

const products = [
  {
    id: 1,
    title: "L'Oréal Paris Infallible Matte Resistance Liquid Lipstick - 601",
    price: "₹899",
    rating: 5.0,
    reviews: 120,
    image:
      "my-11134207-7r992-lncjvl5c4hj023 (1).webp",
  },
  {
    id: 2,
    title: "L'Oréal Paris Matte Signature Liquid Eyeliner",
    price: "₹699",
    rating: 4.8,
    reviews: 95,
    image:
      "assorted-skincare-items-display_961875-155521.jpg",
      
  },
  {
    id: 3,
    title: "Glycolic Gloss Leave-in Serum",
    price: "₹1,299",
    rating: 4.9,
    reviews: 78,
    image:
      "71Fjby8GKlL._UF1000,1000_QL80_.jpg",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-gray-50 py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Discover the All-New Glycolic Gloss Range
        </h2>
        <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
          Glycolic Gloss is here to transform your hair! From shampoo,
          conditioner to serum & acidifier.
        </p>
      </div>

      {/* Product Cards */}
      <div className="flex justify-center gap-10 flex-wrap px-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 w-80"
          >
            {/* Image / Video */}
            <div className="relative w-full h-96 overflow-hidden rounded-t-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="font-semibold text-gray-800 text-lg leading-snug">
                {item.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center mt-2 text-yellow-500">
                <span className="text-xl">★</span>
                <span className="ml-1 text-gray-700">
                  {item.rating} ({item.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-xl font-bold text-gray-900 mt-2">{item.price}</p>

              {/* Button */}
              <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-full font-semibold transition">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
