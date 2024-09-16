
// import React from "react";
// import { MdOutlineDelete } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import { toast } from "react-hot-toast";

// export default function CardItem({ item }) {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item Removed from cart");
//   };

//   return (
//     <div className="flex items-center justify-between mb-6 p-4 bg-white  shadow rounded-lg border-b border-gray-700">
//       {/* Left: Product Image */}
//       <div className="flex-shrink-0">
//         <img
//           className="w-[220px] h-[220px] max-w-[220px] max-h-[220px] object-contain rounded-lg"
//           src={item.image}
//           alt={item.title}
//         />
//       </div>

//       {/* Middle: Product Details */}
//       <div className="flex-1 ml-5">
//         <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
//         <p className="text-gray-600 text-sm leading-relaxed">
//           {item.description.split(" ").slice(0, 20).join(" ") + "..."}
//         </p>
      

//        {/* Right: Price and Remove Button  */}
//       <div className="flex flex-col items-end justify-between">
//         <p className="text-green-500 font-bold">${item.price.toFixed(2)}</p>
//         <button
//           onClick={removeFromCart}
//           className="mt-2 text-red-500 cursor-pointer p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-300"
//         >
//           <MdOutlineDelete size={20} />
//         </button>
//       </div>
//     </div>
//       </div> 
//   );
// }
import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

export default function CardItem({ item }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed from cart");
  };

  return (
    <div className="relative flex items-center justify-between mb-6 p-4 bg-white shadow rounded-lg">
      <div className="flex-shrink-0">
        <img
          className="w-[220px] h-[220px] max-w-[220px] max-h-[220px] object-contain rounded-lg"
          src={item.image}
          alt={item.title}
        />
      </div>

      <div className="flex-1 ml-5">
        <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description.split(" ").slice(0, 20).join(" ") + "..."}
        </p>
      </div>

      <div className="flex flex-col items-end justify-between">
        <p className="text-green-500 font-bold">${item.price.toFixed(2)}</p>
        <button
          onClick={removeFromCart}
          className="mt-2 text-red-500 cursor-pointer p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-300"
        >
          <MdOutlineDelete size={20} />
        </button>
      </div>

      {/* Thin, straight bottom border */}
      <div className="absolute inset-x-0 bottom-0 border-b border-gray-900" style={{ borderBottomWidth: '1px' }} />
    </div>
  );
}
