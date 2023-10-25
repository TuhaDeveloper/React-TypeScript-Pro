import { type } from 'os'
import React, { CSSProperties } from 'react'

type btnprop = {
    btnStyle: CSSProperties;
}

const Button = (props: btnprop) => {
    return (<div style={props.btnStyle}>
        ButtonStyle
    </div>
    )
}

export default Button