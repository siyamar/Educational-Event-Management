import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='text-center relative'>
            <h3 className="text-3xl font-bold top-[300px] left-[600px] absolute">Oops!!</h3>
            <Link to={'/'}><button className="btn text-xl font-bold top-[350px] left-[590px] absolute">Go Back</button></Link>
        </div>
    );
};

export default Error;