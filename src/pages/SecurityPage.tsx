import { useState } from "react";
import SecurityCounter from "../components/SecurityCounter";

const SecurityPage = () => {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(0)
    let success = false;

    const submit = () => {
        debugger
        if (first === 1 && second === 2 && third === 3) {
            console.log("success")
            success = true
        }
        else {
            console.log("wrong")
            success = false
        }
    }



    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignContent: "flex-start"
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
                <button
                    onClick={submit}
                >Accept</button>
                <div
                    style={{
                        display: success ? "block" : "none"
                    }}
                >
                    Success
                </div>

            </div>
        </div>

    )
}


export default SecurityPage;