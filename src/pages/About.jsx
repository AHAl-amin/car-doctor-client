import aboutImg1 from '../assets/images/about_us/person.jpg'
import aboutImg2 from '../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen  my-14">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="flex-1 relative ">
                    <img src={aboutImg1} className=" rounded-lg shadow-2xl w-full lg:w-2/3 " />
                    <img src={aboutImg2} className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute right-8 top-1/2 border-8 hidden lg:block border-white " />
                </div>
                <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-bold text-orange-300"> About Us</h1>
                <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info </button>
                </div>
            </div>
        </div>
    );
};

export default About;