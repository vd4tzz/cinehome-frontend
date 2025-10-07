import { useState } from "react";
import popcorn1 from '../assets/popcorn1.png';
import popcorn2 from '../assets/popcorn2.png';
import popcorn3 from '../assets/popcorn3.png';

const combos = [
  {
    name: "COMBO NHÀ GẤU",
    desc: "4 Coke + 2 Bắp 2 Ngăn 64OZ Phô Mai + Caramel",
    price: "249,000VND",
    img: popcorn1
  },
  {
    name: "COMBO CÓ GẤU",
    desc: "2 Coke + 1 Bắp 2 Ngăn 64OZ Phô Mai + Caramel",
    price: "119,000VND",
    img: popcorn2
  },
  {
    name: "COMBO GẤU",
    desc: "1 Coke + 1 Bắp 2 Ngăn 64OZ Phô Mai + Caramel",
    price: "109,000VND",
    img: popcorn3
  }
];

function QuantitySelector({ value, setValue }) {
  return (
    <div className="flex items-center bg-white/80 rounded-lg px-4 py-2 shadow gap-4 mt-2">
      <button
        className="text-2xl text-gray-500 font-bold"
        onClick={() => setValue(value > 0 ? value - 1 : 0)}
      >
        -
      </button>
      <span className="text-lg font-bold text-gray-700 w-6 text-center">{value}</span>
      <button
        className="text-2xl text-gray-500 font-bold"
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
    </div>
  );
}

function FoodPage() {
  const [quantities, setQuantities] = useState([0, 0, 0]);

  return (
    <div className="min-h-screen bg-[#090a0b] py-10 shadow-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10 tracking-wide drop-shadow-lg uppercase">COMBO POP&COKE</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {combos.map((combo, idx) => (
          <div
            key={combo.name}
            className="bg-[#23232d] bg-opacity-80 rounded-2xl shadow-2xl p-6 flex flex-col items-center w-72 transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-700/40 hover:scale-105 border border-white/10"
          >
            <div className="overflow-hidden rounded-xl mb-4 w-32 h-32 flex items-center justify-center bg-[#353544]">
              <img
                src={combo.img}
                alt={combo.name}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className="text-lg font-bold text-white mb-1 text-center drop-shadow-md uppercase tracking-wide">
              {combo.name}
            </h2>
            <p className="text-sm text-gray-300 text-center mb-2 font-medium">
              {combo.desc}
            </p>
            <div className="text-yellow-300 font-bold text-lg mb-2 drop-shadow-sm">
              {combo.price}
            </div>
            <QuantitySelector
              value={quantities[idx]}
              setValue={val => setQuantities(qs => qs.map((q, i) => i === idx ? val : q))}
            />
            <button
              className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bold shadow-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-200"
            >
              Đặt ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodPage;