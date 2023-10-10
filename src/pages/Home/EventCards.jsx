import { Link } from "react-router-dom";

const EventCards = ({ event }) => {
  const { id, image, title, description } = event;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
            description.length > 200 ? 
            <p>{description.slice(0, 200)}
            <Link to={`/eventDetails/${id}`} 
            className="text-blue-500 font-bold"> Read More...</Link> </p> 
            :
            <p>{description}</p>
        }
      </div>
    </div>
  );
};

export default EventCards;
