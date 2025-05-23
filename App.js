import React from "react"; 
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Phone } from "lucide-react";

const products = [
  {
    name: "Slim Fit Denim Jacket",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1618354691373-1bb3183c0f59?auto=format&fit=crop&w=400&q=80",
    whatsapp: "https://wa.me/919876543210?text=I%20want%20to%20order%20the%20Slim%20Fit%20Denim%20Jacket",
  },
  {
    name: "Chunky Sneakers",
    price: "₹1,799",
    image:
      "https://images.unsplash.com/photo-1606813909357-5a1f260f0d5f?auto=format&fit=crop&w=400&q=80",
    whatsapp: "https://wa.me/919876543210?text=I%20want%20to%20order%20the%20Chunky%20Sneakers",
  },
];

export default function UrbanEdge() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="text-3xl font-bold mb-8 text-center">UrbanEdge</header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="bg-neutral-900 border-none">
            <img src={product.image} alt={product.name} className="rounded-t-xl w-full h-64 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg mb-4">{product.price}</p>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <a href={product.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" /> Order on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
