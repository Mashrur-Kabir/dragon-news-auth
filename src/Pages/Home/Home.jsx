import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";
import Navbar from './../Shared/Navbar/Navbar';
import BreakingNews from "./BreakingNews";
import NewsCart from "./NewsCart";

const Home = () => {

    const news = useLoaderData();
    console.log(news); // you will get the news data here.

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* leftnav */}
                <div className="">
                    <LeftNav></LeftNav>
                </div>

                {/* dragon news */}
                <div className="col-span-2">
                    <h2 className="text-xl font-bold mb-4 pt-2">Dragon News Home:</h2>
                    {
                        news.map(item => <NewsCart key={item._id} item={item}></NewsCart>)
                    }
                </div>

                {/* rightnav */}
                <div className="">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;