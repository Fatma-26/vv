"use client";

import Link from "next/link";
import Image from "next/image";
import Format from "../../../layout/format";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [con, setCon] = useState("");
    const [warning, setWarning] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "" || con === "") {
            setWarning("Please fill all fields");
        } else {
            setWarning("");
            if (password !== con) {
                setWarning("Passwords do not match");
            } else {
                console.log("Form submitted successfully!");
                router.push("/home2"); // Redirect to home2 on successful submission
            }
        }
    };

    return (
        <>
            <Format>
                <div className="orectangle">
                    <div className="rectangle">
                        <div className="signIn">Sign Up</div>
                        <form onSubmit={handleSubmit}>
                            <input
                                className="input"
                                placeholder="Email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="input"
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                className="input"
                                type="password"
                                placeholder="Confirm Password"
                                required
                                value={con}
                                onChange={(e) => setCon(e.target.value)}
                            />
                            {warning && <div className="warning">{warning}</div>}
                            <button className="btn1" type="submit">
                                Sign Up
                            </button>
                        </form>
                        <div className="or">OR</div>
                        <div className="btngoogle">
                            <Image src={"/image 1.png"} width={55} height={56} className="gicon" />
                            <button>Continue with Google</button>
                        </div>
                    </div>
                </div>
            </Format>
        </>
    );
}
