import { useState } from "react";
import SecurityCounter from "../components/SecurityCounter";

const SecurityPage = () => {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(0)


    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column"
                }}
            >
                <SecurityCounter
                    num={first}
                    back={setFirst}
                />
                <SecurityCounter
                    num={second}
                    back={setSecond}
                />
                <SecurityCounter
                    num={third}
                    back={setThird}
                />

            </div>
        </div>

    )
}


export default SecurityPage;