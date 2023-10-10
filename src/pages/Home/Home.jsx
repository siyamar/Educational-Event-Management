import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import EventCards from './EventCards';
import RightSideNav from '../shared/RightSideNav/RightSideNav'

const Home = () => {
    const events = useLoaderData()
    return (
        <div>
            <div className='max-w-6xl mx-auto space-y-4'>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='md:col-span-3 grid grid-cols-2 gap-6'>
                    {
                        events.map(event=> <EventCards 
                            key={event.id}
                            event={event}
                            ></EventCards>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            </div>
            <div className='mt-10'>
            <Footer></Footer>
            </div>
          
        </div>
    );
};

export default Home;