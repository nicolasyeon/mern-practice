import React, { useState } from 'react';

const HookForm = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form>
                <div class="Values">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="first-name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <div>
                        {
                            FirstName.length < 2 ?
                                <span>First Name must be at least 2 characters</span>
                                : null
                        }
                    </div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="last-name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <div>
                        {
                            LastName.length < 2 ?
                                <span>Last Name must be at least 2 characters</span>
                                : null
                        }
                    </div>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                        {
                            Email.length < 2 ?
                                <span>Email must be at least 2 characters</span>
                                : null
                        }
                    </div>
                    <label>Password:</label>
                    <input
                        type="text"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Confirm Password:</label>
                    <input
                        type="text"
                        name="confirm-password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div>
                        {
                            Password !== ConfirmPassword ? (
                                <span>Passwords do not match</span>
                            )
                                : null
                        }
                    </div>
                </div>
            </form>

            <h1>Your Form Data:</h1>
            <p>First Name: {FirstName}</p>
            <p>Last Name: {LastName}</p>
            <p>Email: {Email}</p>
            <p>Password: {Password}</p>
            <p>Confirm Password: {ConfirmPassword}</p>
        </div>
    )
}

export default HookForm;