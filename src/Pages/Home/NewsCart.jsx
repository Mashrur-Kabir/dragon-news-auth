import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import PropTypes from 'prop-types';

const NewsCart = ({ item }) => {
    const { title, image_url, details, _id, author, rating:{ number } } = item; // Correct destructuring of author
    const { name, img, published_date } = author; // Destructure author properties here

    const formattedDate = published_date?.split(' ')[0]; // omitting the time and keep the date

    return (
        <div className="mb-8">
            {/* user */}
            <div className="bg-gray-200 rounded-t-md">
                <div className="flex items-center mb-4 p-5"> 
                    <div className="w-11 h-11 rounded-full overflow-hidden"> 
                        <img src={img} alt="" className="w-full h-full object-cover" /> 
                    </div>
                    <div className="ml-3"> {/* Add margin for spacing */}
                        <p className="font-semibold leading-8">{name}</p>
                        <p className="text-gray-500">{formattedDate}</p>
                    </div>
                </div>
            </div>

            {/* news */}
            <div className="px-5">
                <h4 className="text-xl leading-9 font-bold">{title}</h4>
                <div className="mt-5 mb-8 w-full">
                    <img className="object-cover" src={image_url} alt="" /> {/* Changed h-60 to w-full and object-cover */}
                </div>
                {
                    details.length > 500 ?
                        <div className="text-justify">
                            <p className="leading-6 mb-3">{details.slice(0, 500)}</p>
                            <Link to={`/item/${_id}`} className="text-amber-600 font-bold">Read More...</Link>
                        </div>
                        :
                        <p className="text-justify leading-6">{details}</p>
                }
                <hr className="my-5" />
                <div className="flex items-center text-yellow-500 text-xl mb-6">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <p className="ml-2 text-lg">{number}</p> {/* Display the rating number */}
                </div>
            </div>

        </div>
    );
};

NewsCart.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired, // Ensure _id is a string for MongoDB object ID

        author: PropTypes.shape({
            name: PropTypes.string,
            img: PropTypes.string,
            published_date: PropTypes.string, // Ensure published_date is a string
        }).isRequired,

        rating: PropTypes.shape({
            number: PropTypes.number.isRequired, // Ensure number is a number and required
            badge: PropTypes.string.isRequired // Ensure badge is a string and required
        }).isRequired, // Ensure rating object has required properties
    }).isRequired, // Ensure item object has required properties
};

export default NewsCart;
