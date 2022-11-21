// Libraries
import { useContext } from "react";

// Context
import MyContext from "../context/MyContext";

const Display = () => {
    const stateObject = useContext(MyContext);

    return (
        <div>
            <h1>Display</h1>
            <p style={{backgroundColor: "lightblue"}}>
                {stateObject.state}
            </p>
        </div>
    );
};

export default Display;