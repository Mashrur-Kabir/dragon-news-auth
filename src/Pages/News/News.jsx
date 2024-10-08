import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightNav from "../Shared/RightNav/RightNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {

    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <div className="mt-16 px-2">
                <Navbar></Navbar>
            </div>
            <div className="grid md:grid-cols-4 mt-10">
                <div className="col-span-3">
                    <h2 className="text-xl font-bold mb-4 pt-2">Dragon News:</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default News;