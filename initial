import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import ringImage from "./assets/ring.jpg";
import necklaceImage from "./assets/necklace.jpg";
import braceletImage from "./assets/bracelet.jpg";

const products = [
  { id: 1, name: "金鑽戒指", category: "戒指", price: "$200", image: ringImage },
  { id: 2, name: "珍珠項鍊", category: "項鍊", price: "$150", image: necklaceImage },
  { id: 3, name: "銀手鍊", category: "手鍊", price: "$100", image: braceletImage }
];

export default function Mistraldor() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.includes(search) && (category === "" || product.category === category)
  );

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">珠寶飾品店</h1>
        <Button className="flex items-center gap-2">
          <User size={16} /> 登入 / 註冊
        </Button>
      </div>
      <div className="flex gap-4 mb-6">
        <Input 
          placeholder="搜尋商品..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <Button className="flex items-center gap-2" onClick={() => setCategory("")}>全部</Button>
        <Button className="flex items-center gap-2" onClick={() => setCategory("戒指")}>戒指</Button>
        <Button className="flex items-center gap-2" onClick={() => setCategory("項鍊")}>項鍊</Button>
        <Button className="flex items-center gap-2" onClick={() => setCategory("手鍊")}>手鍊</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-xl" />
            <CardContent className="mt-4 text-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg text-gray-600">{product.price}</p>
              <Button className="mt-2 w-full flex items-center justify-center gap-2">
                <ShoppingCart size={16} /> 加入購物車
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
