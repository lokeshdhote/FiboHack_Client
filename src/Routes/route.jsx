import { Route, Routes } from "react-router";
import CreateEvent from "../Components/CreateEvent";





const route = ()=>{
    return(
        <Routes>
        
        <Route path="/" element={<CreateEvent/>} />

        </Routes>
    )
}
export default route;