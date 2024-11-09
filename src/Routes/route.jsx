import { Route, Routes } from "react-router";
import CreateEvent from "../Components/CreateEvent";
import FindEvent from "../Components/FindEvent";





const route = ()=>{
    return(
        <Routes>
        
        <Route path="/" element={<FindEvent/>} />
        <Route path="/CreateEvent" element={<CreateEvent/>} />

        </Routes>
    )
}
export default route;