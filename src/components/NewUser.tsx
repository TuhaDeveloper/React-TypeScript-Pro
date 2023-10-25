import React, { useState } from 'react'

const NewUser = () => {

    const [Text, setText] = useState("");

    const hangleChane = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

    }


    return (
        <div>
            <h2>This is new user</h2>

            <input type="text" value={Text} onChange={hangleChane} />
            <button onClick={handleClick}>Show Value</button>

        </div>
    )
}

export default NewUser