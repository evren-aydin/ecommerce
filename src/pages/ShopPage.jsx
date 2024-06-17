import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBorderAll,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import Clients from "../components/Clients";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import ReactPaginate from "react-paginate";
import "../App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../store/actions/productActions";

function ShopPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [tempFilter, setTempFilter] = useState(""); // Geçici filter state'i

  const itemsPerPage = 12;

  const topCategories = useSelector((store) => store.product.topCategories);
  const productData = useSelector((store) => store.product.productList);
  const products = productData.products || [];

  // Kategori değişimini izleyin ve ürünleri getirin
  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProductsByCategory(categoryId, sort, filter));
    }
  }, [categoryId, sort, filter]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleFilterChange = (e) => {
    setTempFilter(e.target.value);
  };

  const handleFilterButtonClick = () => {
    setFilter(tempFilter);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  const offset = currentPage * itemsPerPage;
  const currentProducts = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  return (
    <div className="relative min-h-screen">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <BounceLoader
            color={"#1b207d"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <div className="w-full h-[92px] flex justify-center items-center sm:w-[414px] sm:h-[202px]">
            <div className="w-[1049px] h-[44px] flex justify-between items-center sm:w-full sm:h-[154px] sm:items-center sm:flex-col sm:py-4">
              <h1 className="font-bold text-2xl">Shop</h1>
              <p className="flex flex-row gap-3">
                <span className="font-bold">Home</span>
                <span className="text-gray-400">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>{" "}
                <span className="text-gray-400">Shop</span>
              </p>
            </div>
          </div>
          <div className="w-full h-[271px] flex justify-center sm:w-[414px] sm:h-[1628px]">
            <div className="w-[1088px] relative h-full items-start flex flex-row gap-3 sm:h-full sm:w-[333px] sm:justify-center sm:flex-col sm:items-center">
              {topCategories.map((category) => (
                <div key={category.id} className="relative">
                  <img
                    src={category.img}
                    alt={category.title}
                    className="sm:w-[332px] sm:h-[300px] h-[223px] w-[205px]"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                    {category.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[98px] flex justify-center sm:w-[412px] sm:h-[216px] sm:justify-center sm:items-center">
            <div className="w-[1050px] h-full flex items-center sm:w-[252px] sm:h-[168px] ">
              <div className="w-full h-[50px] flex flex-row justify-between items-center sm:w-full sm:h-full sm:flex-col">
                <p className="text-gray-500 font-semibold">
                  Showing all {products.length} result
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <p className="text-gray-500 font-semibold">Views:</p>
                  <button className="p-2 border border-gray-200 rounded px-3">
                    <FontAwesomeIcon icon={faBorderAll} />
                  </button>
                  <button className="p-2 border border-gray-200 rounded px-3">
                    <FontAwesomeIcon icon={faListCheck} />
                  </button>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <select
                    className="p-2 border border-gray-200 rounded px-3"
                    onChange={handleSortChange}
                  >
                    <option value="">Sort By</option>
                    <option value="price:asc">Price: Low to High</option>
                    <option value="price:desc">Price: High to Low</option>
                    <option value="rating:asc">Rating: Low to High</option>
                    <option value="rating:desc">Rating: High to Low</option>
                  </select>
                  <input
                    type="text"
                    className="p-2 border border-gray-200 rounded px-3"
                    placeholder="Filter"
                    value={tempFilter}
                    onChange={handleFilterChange}
                  />
                  <button
                    className="p-2 rounded-md px-5 bg-[#23a6f0] text-white font-bold"
                    onClick={handleFilterButtonClick}
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1650px] flex justify-center sm:w-[414px] sm:h-[2200px] sm:justify-center ">
            <div className="h-full w-[1124px] flex flex-col p-4 gap-4 items-center sm:h-full sm:w-[328px] ">
              <div className="h-[1600px] w-[1048px] flex flex-row gap-6 sm:w-full sm:h-[2000px] sm:flex-col sm:items-center flex-wrap">
                {/* PRODUCT CARD */}
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="w-[240px] h-[488px] relative flex flex-col"
                  >
                    <Link to={`/productDetail/${product.id}`}>
                      <img
                        src={product.images[0]?.url}
                        alt={product.name}
                        className="static w-full h-auto"
                      />
                      <div className="static w-[239px] h-[188px] flex flex-col gap-3 justify-center items-center">
                        <h1 className="text-black font-bold">{product.name}</h1>
                        <h2 className="text-gray-400 text-xs font-bold">
                          {product.description}
                        </h2>
                        <p className="flex gap-2">
                          <span className="text-gray-400 font-bold">
                            {product.price} ₺
                          </span>
                        </p>
                        <div className="flex gap-2">
                          <div className="bg-blue-500 rounded-full w-4 h-4"></div>
                          <div className="bg-green-800 rounded-full w-4 h-4"></div>
                          <div className="bg-orange-700 rounded-full w-4 h-4"></div>
                          <div className="bg-black rounded-full w-4 h-4"></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div>
                <ReactPaginate
                  previousLabel={"First"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={4}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  activeClassName={"active"}
                  disabledClassName={"disabled"}
                />
              </div>
            </div>
          </div>
          <Clients />
        </>
      )}
    </div>
  );
}

export default ShopPage;
