import { useCartInfo } from "../hooks/useCartStore";
import { useDispatch } from "../hooks/useCustomRedux"
import { openModal } from "../slices/modalSlice";
import { FaTrash, FaCreditCard } from "react-icons/fa";

export const PriceBox = () => {
    const { total } = useCartInfo();
    const dispatch = useDispatch();

    const handleInitializeCart = () => {
        dispatch(openModal())
    }
    
    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow duration-300">
                {/* 요약 정보 라인 */}
                <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                    <span className="text-gray-500 font-medium text-lg">총 주문 금액</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-blue-600 tracking-tight">
                            {total.toLocaleString()}
                        </span>
                        <span className="text-lg font-bold text-gray-700">원</span>
                    </div>
                </div>

                {/* 작업 버튼들 */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6">
                    <button
                        onClick={handleInitializeCart}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 border border-red-200 text-red-500 font-semibold rounded-xl hover:bg-red-50 hover:border-red-300 transition-colors duration-200 active:scale-98 cursor-pointer"
                    >
                        <FaTrash className="text-sm" />
                        <span>장바구니 초기화</span>
                    </button>
                    <button
                        onClick={() => alert("주문이 완료되었습니다!")}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-200 transition-all duration-200 active:scale-98 cursor-pointer"
                    >
                        <FaCreditCard className="text-sm" />
                        <span>주문하기</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

