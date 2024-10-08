import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))

    },[])

    return (
        <div className="p-2 mb-8">
            <h2 className="text-xl font-bold mb-4">All Categories:</h2>
            <h2 className="bg-gray-200 rounded-md mb-6 py-4 text-xl font-bold pl-10 cursor-pointer">National News</h2>
            <div className="flex flex-col justify-center gap-7 px-10 text-xl text-gray-500 font-semibold">
                {
                    categories.map(cat => <Link className="hover:text-indigo-600" key={cat.id}>{cat.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftNav;