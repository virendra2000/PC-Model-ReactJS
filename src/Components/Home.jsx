import { BrowserRouter, Route, Routes } from 'react-router-dom';
import chrome from '../assets/chrome.png';
import insta from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';
import menu from '../assets/startmenu.png';
import task from '../assets/taskview.png';
const Home = () => {
    return (
        <>   
            <div className='mt-[532px] flex flex-col items-center justify-end w-[100%] rounded-b-xl'>
                <div className='p-1 flex flex-row bg-blue-800 w-[100%] rounded-b-3xl bg-opacity-[70%]'>
                    <a href="#"><img src={menu} alt="" className='p-1 w-[40px]' /></a>
                    <input type="search" className='px-5 py-0 outline-none text-white bg-transparent placeholder-white border rounded-full' placeholder='Search'/>
                    <a href="#"><img src={task} alt="" className='p-1 w-[40px]' /></a>
                    <a href="#"><img src={chrome} alt="" className='p-1 w-[40px]' /></a>
                    <a href="#"><img src={insta} alt="" className='p-1 w-[40px] rounded-full' /></a>
                    <a href="#"><img src={whatsapp} alt="" className='p-1 w-[40px]' /></a>
                </div>
            </div>
        </>
    );
}
export default Home;