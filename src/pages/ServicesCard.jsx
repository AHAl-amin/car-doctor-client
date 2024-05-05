import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-[250px]" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="text-red-600 flex justify-between w-full">
                    <p >Price: ${price}</p>
                    <p><FaArrowRightLong /></p>

                </div>
                <Link to={`/checkout/${_id}`}>
                 <button className="btn btn-primary"> Book Now</button>
                </Link>

            </div>
        </div>
    );
};

export default ServicesCard;