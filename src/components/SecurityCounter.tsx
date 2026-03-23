import { useState } from "react"


interface SecurityProps {
    num: number,
    back: (value: number) => void // emit(props-функция)
}



const SecurityCounter = (props: SecurityProps) => {
    const provide = (t: number) => {
        props.back(t + props.num)

        console.log(props.back(t))
    }
    return (
            <div>
                <button
                    onClick={() => provide(props.num + 1)}
                >
                    +
                </button>
                <input
                    onChange={() => props.num}
                    value={props.num}
                />
                <button
                    onClick={() => provide(props.num - 1)}
                >
                    -
                </button>
            </div>
    )
}

export default SecurityCounter