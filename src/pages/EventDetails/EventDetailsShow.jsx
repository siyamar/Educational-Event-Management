
const EventDetailsShow = ({event}) => {
    console.log(event)
    const{id, image, title, description} = event;
    console.log(id, image)
    return (
        <div className="space-y-5">
            <img className="w-full max-h-[70vh]" src={image} alt="" />
            <h3 className='text-3xl'>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default EventDetailsShow;