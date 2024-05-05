import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id,price } = service;
    const{user} =useContext(AuthContext)

    const handleBookservice = e =>{
        e.preventDefault();
       const form = e.target;
       const name = form.name.value;
    //    const date = form.date.value;
       const email = user?.email;
       const phone = form.phone.value;
       const order ={
         costomerName:name,
         email:email,
      
         service:_id,
         price:price,
         phone

       }
       console.log(order)

    }

    return (
        <div>
            <h2 className='text-center text-4xl font-bold py-4'>service : {title}</h2>
            <div className="bg-base-300">
                <div className="lg:p-20 p-5">


                    <form onSubmit={handleBookservice} className="">
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                            <div className="form-control w-full">

                                <input type="text" name='firstname'defaultValue={user?.displayName} placeholder="firstname" className="input input-bordered w-full" required />
                            </div>
                           
                            <div className="form-control">

                                <input type="text" name='phone' placeholder="phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="text" name='amount' placeholder="amount"defaultValue={'$' + price}  className="input input-bordered" required />
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