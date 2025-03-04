import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-900 text-white py-8'>
        <div className='container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            
            <div>
                <h3 className='text-lg font-semibold mb-4'>Address</h3>
                <p>123 University Street,City,Country</p>
                <p>Phone:+123 345 456</p>
                <p>Email:Ardhi@university.com</p>
            </div>
            
            <div className='cursor-pointer'>
                <h3 className='text-lg text-semibold mb-4'>Quick Links</h3>
                <ul className='cursor-pointer'>
                    <li><a href="#" className='hover:text-orange-500'>Home</a></li>
                    <li><a href="#" className='hover:text-orange-500 '>About us</a></li>
                    <li><a href="#" className='hover:text-orange-500 '>Academics</a></li>
                    <li><a href="#" className='hover:text-orange-500 '>Admissions</a></li>
                    <li><a href="#" className='hover:text-orange-500 '>Offices</a></li>
                </ul>
            </div>

    

            <div className='cursor-pointer'>
                <h3 className='text-lg font-semibold mb-4 '>Downloads</h3>
                <ul className='cursor-pointer'>
                    <li><a href="#" className='hover:text-orange-500 '>Almanac</a></li>
                    <li><a href="#" className='hover:text-orange-500 '>Prospectus</a></li>
                    <li><a href="#" className='hover:text-orange-500 '>Course Catalog</a></li>
                    <li><a href="#" className='hover:text-orange-500 '>Timetable</a></li>

                </ul>

                </div> 

        

                <div>
                    <h3 className='text-lg font-semibold'>Social Connect</h3>
                    <div className='flex space-x-4 cursor-pointer'>
                        <a href="#" className='text-blue-500 hover:text-blue-700'><i className='fab fa-facebook-f'></i></a>
                        <a href="#" className='text-blue-400 hover:text-blue-600'><i className='fab fa-twitter'></i></a>
                        <a href="#" className='text-pink-500 hover:text-pink-700'><i className='fab fa-instagram'></i></a>
                        <a href="#" className='text-red-500 hover:text-red-700'><i className='fab fa-youtube'></i></a>
                    </div>
                </div>

        </div>

        <div className='text-center mt-8'>
            <p className='text-sm'>2025 Ardhi University.All Rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer