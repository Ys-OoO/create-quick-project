import { useState, useEffect } from "react";
import Counter from "./components/Counter";

function App() {
    const [initCount, setInitCount] = useState(0);
    useEffect(() => {
        setInitCount(3);
    }, []);
    return (
        <div>
            <Counter initCount={initCount} />
        </div>
    );
}

export default App;
