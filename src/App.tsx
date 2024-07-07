import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, Recommender } from "./components";
import ProtectedLayout from "./components/layout/ProtectedLayout";
import Page404 from "./components/404/page404";

function App() {
    return (
        <Routes>
            {/* public_routes  */}
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Page404 />} />

            {/* private_routes */}
            <Route
                path='/recommender'
                element={
                    <ProtectedLayout>
                        <Recommender />
                    </ProtectedLayout>
                }
            />
        </Routes>
    );
}

export default App;
