import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services ,setServices] = useState([]);

    useEffect(() =>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    } , [])
    return (
        <div className="mb-10">
            <div className="text-center space-y-4 ">
            <h1 className="text-4xl font-bold text-orange-300"> Services</h1>
                <h1 className="lg:text-5xl text-3xl font bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable. </p>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {
                    services.map(service =><ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;