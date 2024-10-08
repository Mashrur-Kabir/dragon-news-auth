import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div>
            <div className="bg-gray-100 p-4 mt-8 mb-9 flex items-center justify-center gap-4">
                <button className="px-5 py-2 bg-rose-500 text-white text-xl">Latest</button>
                <Marquee pauseOnHover speed={100}>
                &nbsp;<span className="text-red-500">Breaking News:</span>&nbsp;
                    <Link to="">Massive storm approaching the eastern coast - residents advised to stay indoors.... |</Link> 
                    <Link to="">&nbsp;Stock markets see record highs amid tech boom..... |</Link> 
                    <Link to="">&nbsp;Local authorities announce new road safety measures for the upcoming winter season..... |</Link>
                </Marquee>

            </div>
        </div>
    );
};

export default BreakingNews;