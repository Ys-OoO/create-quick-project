import { Fragment, useState } from "react";

interface CounterProps {
    initCount: number;
}

const Counter: React.FC<CounterProps> = ({ initCount = 0 }: CounterProps) => {
    const [count, setCount] = useState(initCount);
    const addCount = () => {
        setCount(count + 1);
    };
    return (
        <Fragment>
            <div>{count}</div>
            <button onClick={addCount}>click</button>
        </Fragment>
    );
};

export default Counter;
