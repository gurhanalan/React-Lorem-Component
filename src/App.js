import React, { useState } from "react";
import HeaderForm from "./components/HeaderForm";
import ParaList from "./components/ParaList";
import data from "./data";
function App() {
    const [num, setNum] = useState(0);
    const [para, setPara] = useState([]);

    const handleChange = (e) => {
        setNum(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let size = data.length;
        let newPara = [];

        if (num <= size) {
            newPara = newPara.concat(data.slice(0, num));
        } else if (num > size) {
            let times = Math.ceil(num / size);

            for (let i = 1; i <= times; i++) {
                newPara = newPara.concat(data);
            }
            newPara = newPara.slice(0, num);
        }
        setPara(newPara);
    };

    return (
        <main>
            <HeaderForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                num={num}
            />
            <ParaList para={para} />
        </main>
    );
}

export default App;
