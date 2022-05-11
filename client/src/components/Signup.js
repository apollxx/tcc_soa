import React, { useState } from "react"
import axios from "axios"
import { Container, TextField, Button } from "@mui/material";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async event => {
        try {
            await axios.post("api/users/signup", { email, password })
            window.location.href = "/"
        } catch (ex) {

        }
    }

    return (
        <Container style={{ textAlign: "left" }}>
            <h2>Sign Up</h2>
            <form>
                <TextField style={{ display: "flex" }} label="email" value={email} onChange={e => setEmail(e.target.value)} ></TextField>
                <TextField style={{ display: "flex" }} type={"password"} label="password" value={password} onChange={e => setPassword(e.target.value)}></TextField>
                <Button variant="contained" color="primary" onClick={onSubmit}>Sign Up</Button>
            </form>
        </Container>
    )
}