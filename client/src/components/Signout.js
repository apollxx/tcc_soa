import React, { useEffect } from 'react';
import axios from 'axios';

const Signout = () => {
    const request = async () => {
        try {
            await axios.post("/api/users/signout")
            window.location.href = "/"
        } catch (ex) {

        }
    }

    useEffect(() => {
        request()
    }, [])
    return (<React.Fragment></React.Fragment>)
}

export default Signout