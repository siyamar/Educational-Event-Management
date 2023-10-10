import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import EventDetailsShow from "./EventDetailsShow";
import { useEffect, useState } from "react";
import RightSideNav from "../shared/RightSideNav/RightSideNav";


const EventDetails = () => {
    const [event, setEvent] = useState({})
    const events = useLoaderData()
    const {id} = useParams()

    useEffect(()=>{
        const findEvent = events?.find(event => event.id==id)
        setEvent(findEvent)
    },[])
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 mb-10 mt-4 gap-6">
                <div className="col-span-3">
                  <EventDetailsShow key={event.id} event={event}></EventDetailsShow>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default EventDetails;