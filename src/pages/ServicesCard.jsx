import { FaArrowRightLong } from "react-icons/fa6";

const ServicesCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-[250px]" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="text-red-600 flex justify-between w-full">
                    <p >Price: ${price}</p>
                    <p><FaArrowRightLong /></p>
                </div>

            </div>
        </div>
    );
};

export default ServicesCard;