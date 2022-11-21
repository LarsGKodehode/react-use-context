// Libraries
import { useContext } from "react";

// Context
import MyContext from "../context/MyContext";


const Selector = () => {
    const context = useContext(MyContext);

    function handleChange(event) {
        context.setState(() => {
            return event.target.value
        })
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Type input here"
                value={context.state}
                onChange={handleChange}
            />
        </div>
    );
};

export default Selector;