import { useEffect, useState } from "react";

function MyList({ handler }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(handler())
        console.log("Child Component redered");
    }, [handler]);

    return (
        <>
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        {item}
                    </div>
                );
            })}
        </>
    );
}

export default MyList;
