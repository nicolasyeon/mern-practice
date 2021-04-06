import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
const PirateForm = () => {

    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [treasureChests, setTreasureChests] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/pirate', {
            name,
            imageUrl,
            treasureChests,
            catchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        })
            .then((res) => {
                if (res.data.errors) {
                    console.log(res.data.errors);
                    setErrors(res.data.errors);
                }
                else {
                    console.log(res.data);
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div class="details">
            <div class="header-routes">
                <h1>Add Pirate</h1> <button onClick={() => navigate("/")}>Crew Board</button>
            </div>

            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name:</label><br />
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    {
                        errors.name ?
                            <span>{errors.name.message}</span>
                            : null
                    }
                </p>
                <p>
                    <label>Image Url:</label><br />
                    <input
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    {
                        errors.imageUrl ?
                            <span>{errors.imageUrl.message}</span>
                            : null
                    }
                </p>
                <p>
                    <label># of Treasure Chests:</label><br />
                    <input
                        type="number"
                        onChange={(e) => setTreasureChests(e.target.value)}
                    />
                    {
                        errors.treasureChests ?
                            <span>{errors.treasureChests.message}</span>
                            : null
                    }
                </p>
                <p>
                    <label>Pirate Catch Phrase:</label><br />
                    <input
                        type="text"
                        onChange={(e) => setCatchPhrase(e.target.value)}
                    />
                    {
                        errors.catchPhrase ?
                            <span>{errors.catchPhrase.message}</span>
                            : null
                    }
                </p>
                <p>
                    <label>Crew Position:</label><br />
                    <select
                        type="text"
                        onChange={(e) => setCrewPosition(e.target.value)}
                    >
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Bootswain">Bootswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    {
                        errors.crewPosition ?
                            <span>{errors.crewPosition.message}</span>
                            : null
                    }
                </p>
                <p>
                    <label>Peg Leg</label><br />
                    <input
                        type="checkbox"
                        checked={pegLeg}
                        onChange={() => setPegLeg(!pegLeg)}
                    />
                </p>
                <p>
                    <label>Eye Patch</label><br />
                    <input
                        type="checkbox"
                        checked={eyePatch}
                        onChange={() => setEyePatch(!eyePatch)}
                    />
                </p>
                <p>
                    <label>Hook Hand</label><br />
                    <input
                        type="checkbox"
                        checked={hookHand}
                        onChange={() => setHookHand(!hookHand)}
                    />
                </p>
                <button type="submit">Add Pirate</button>
            </form>
        </div>
    )
}
export default PirateForm;