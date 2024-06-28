import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeProduct,
  toggleProductSelection,
} from "../store/actions/shoppingCartActions";
import { Link } from "react-router-dom";

function ShoppingCartPage() {
  const cart = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();
  const handleIncrease = (productId) => {
    dispatch(increaseCount(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseCount(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleToggleSelection = (productId) => {
    dispatch(toggleProductSelection(productId));
  };

  const selectedItems = cart.filter((item) => item.checked);

  const productsTotalPrice = selectedItems.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );

  const shippingPrice = selectedItems.length > 0 ? 15.0 : 0; // Fixed shipping price, can be dynamic
  const discount = 15.0; // Apply any discount logic here
  const grandTotalPrice = productsTotalPrice + shippingPrice - discount;

  return (
    <div className="w-full h-full bg-slate-100 flex flex-row items-center justify-center gap-3">
      <div className=" w-[900px] py-20 font-mont ">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white ">
            <thead>
              <tr className="text-lg bg-orange-100">
                <th className="w-1/12 px-4 py-2">Select</th>
                <th className="w-4/12 px-4 py-2">Product</th>
                <th className="w-2/12 px-4 py-2">Price</th>
                <th className="w-2/12 px-4 py-2">Count</th>
                <th className="w-2/12 px-4 py-2">Total</th>
                <th className="w-1/12 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.product.id} className="border-t">
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleToggleSelection(item.product.id)}
                      className="form-checkbox h-4 w-4"
                    />
                  </td>
                  <td className="px-4 py-2 pl-24 flex flex-col font-medium">
                    {item.product.name}
                    <img
                      className="w-32 h-28 object-cover "
                      src={item.product.images}
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-2 pl-10">{item.product.price} ₺</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleDecrease(item.product.id)}
                      className="px-2 py-1 bg-gray-300 rounded-md mr-2"
                    >
                      -
                    </button>
                    {item.count}
                    <button
                      onClick={() => handleIncrease(item.product.id)}
                      className="px-2 py-1 bg-gray-300 rounded-md ml-2"
                    >
                      +
                    </button>
                  </td>
                  <td className="px-4 py-2 pl-10">
                    {item.product.price * item.count} ₺
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleRemove(item.product.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded-md"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-right">
          <h3 className="text-xl font-bold">
            Total Amount: {productsTotalPrice.toFixed(2)} ₺
          </h3>
        </div>
      </div>
      <div className="w-[300px] h-full bg-orange-100 pr-7 flex flex-col gap-4 border p-5 font-mont">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <div className="flex justify-between mb-2 border border-red-200 p-2">
          <span>Products Total:</span>
          <span className="font-bold">{productsTotalPrice.toFixed(2)} ₺</span>
        </div>
        <div className="flex justify-between mb-2 border border-red-200 p-2">
          <span>Shipping:</span>
          <span className="font-bold">{shippingPrice.toFixed(2)} ₺</span>
        </div>
        <div className="flex justify-between mb-2 border border-red-200 p-2 text-green-600">
          <span>Discount:</span>
          <span>-{discount.toFixed(2)} ₺</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Grand Total:</span>
          <span>{grandTotalPrice.toFixed(2)} ₺</span>
        </div>
        <Link
          to="/order"
          className="w-full text-center mt-4 bg-[#252b42] text-white py-2 rounded-md"
        >
          Create Order
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
