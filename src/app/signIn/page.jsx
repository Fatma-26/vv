"use client";

import Link from "next/link";
import Image from "next/image";
import Format from "../../../layout/format";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill all fields.");
        } else {
            setError("");
            console.log("Form submitted successfully!");
            router.push("/home2");
        }
    };

    return (
        <>
            <Format>
                <div className="orectangle">
                    <div className="rectangle">
                        <div className="signIn">Sign In</div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="enter">Enter your email</div>
                                <input
                                    className="input"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <div className="enter">Enter your password</div>
                                <input
                                    className="input"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="btn1" type="submit" disabled={!email || !password}>
                                Sign In
                            </button>
                            {error && <div className="warning">{error}</div>}
                        </form>
                        <div className="or">OR</div>
                        <div className="btngoogle">
                            <Image src={"/image 1.png"} width={55} height={56} className="gicon" />
                            <button>Continue with Google</button>
                        </div>
                        <p>Forgot your password?</p>
                    </div>
                </div>
            </Format>
        </>
    );
}

