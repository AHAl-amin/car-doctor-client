import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext)

    const handleBookservice = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        //    const date = form.date.value;
        const email = user?.email;
        const date = form.date.value;
        const booking = {
            customerName: name,
            email,
            img,
            service_id: _id,
            service:title,
            price: price,
            date

        }
        console.log(booking)

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('service book successfuly')
            }
        })

    }

    return (
        <div>
            <h2 className='text-center text-4xl font-bold py-4'>service : {title}</h2>
            <div className="bg-base-300">
                <div className="lg:p-20 p-5">


                    <form onSubmit={handleBookservice} className="">
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                            <div className="form-control w-full">

                                <input type="text" name='name' defaultValue={user?.displayName} placeholder="firstname" className="input input-bordered w-full" required />
                            </div>

                            <div className="form-control">

                                <input type="date" name='date' className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="text" name='amount' placeholder="amount" defaultValue={'$' + price} className="input input-bordered" required />
                            </div>

                        </div>

                        <div className="form-control mt-10">

                            <input type="text" name='email' placeholder="text" className="input input-bordered h-36" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-block bg-orange-500">Order Confirme</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;