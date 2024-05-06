import wrench from '../assets/icons/Wrench.svg';
import check from '../assets/icons/check.svg';
import delivery from '../assets/icons/deliveryt.svg';
import group from '../assets/icons/group.svg';
import person from '../assets/icons/person.svg';


const Feature = () => {
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10'>
            <div className='p-6 border rounded-md cursor-pointer text-center  hover:bg-[#FF3811] duration-500 hover:text-white'>
                <img className='block mx-auto' src={group} alt="" />
                <p className='py-2 font-Inter font-bold'>Expert Team</p>
            </div>
            <div className='p-6 border rounded-md cursor-pointer text-center  hover:bg-[#FF3811] duration-500 hover:text-white'>
                <img className='block mx-auto' src={wrench} alt="" />
                <p className='py-2 font-Inter font-bold'>Timely Delivery</p>
            </div>
            <div className='p-6 border rounded-md cursor-pointer text-center  hover:bg-[#FF3811] duration-500 hover:text-white'>
                <img className='block mx-auto' src={check} alt="" />
                <p className='py-2 font-Inter font-bold'>24/7 Support</p>
            </div>
            <div className='p-6 border rounded-md cursor-pointer text-center  hover:bg-[#FF3811] duration-500 hover:text-white'>
                <img className='block mx-auto' src={delivery} alt="" />
                <p className='py-2 font-Inter font-bold'>Best Equipment</p>
            </div>
            <div className='p-6 border rounded-md cursor-pointer text-center  hover:bg-[#FF3811] duration-500 hover:text-white'>
                <img className='block mx-auto' src={person} alt="" />
                <p className='py-2 font-Inter font-bold'>100% Guranty</p>
            </div>
            <div className='p-6 border rounded-md cursor-pointer text-center  hover:bg-[#FF3811] duration-500 hover:text-white'>
                <img className='block mx-auto' src={delivery} alt="" />
                <p className='py-2 font-Inter font-bold'>Timely Delivery</p>
            </div>
        </div>
    );
};

export default Feature;