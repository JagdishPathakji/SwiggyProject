import ReactDOM from "react-dom/client"
import Main from "./main";
import Restaurant from "./foodDelivery/restaurants";
import { BrowserRouter, Routes, Route } from "react-router";
import OrderFood from "./foodDelivery/OrderFood";
import Search from "./foodDelivery/Search";
import store from "../store/store"
import { Provider } from "react-redux";
import Checkout from "./foodDelivery/checkout";
function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/restaurants" element={<Restaurant />}></Route>
                    <Route path="restaurants/:hotelid" element={<OrderFood  />}></Route>
                    <Route path="restaurants/search/:hotelid" element={<Search />}></Route>
                    <Route path="restaurants/checkout" element={<Checkout />}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )    
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)