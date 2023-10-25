import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

type dataprop = {
    status: "loading" | "error" | "success"
}
export const User = ({ status }: dataprop) => {


    if (status == "loading") {
        return <h3>data is loading</h3>
    }

    if (status == "error") {
        return <h3>404 not found</h3>
    }


    return (<div>
        <h3>data is successfully </h3>
    </div>

    )

}
