import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const PirateDetails = (props) => {
    const [pirate, setPirate] = useState({});
    const [pegLeg, setPegLeg] = useState("");
    const [eyePatch, setEyePatch] = useState("");
    const [hookHand, setHookHand] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate/' + props.id)
            .then((res) => {
                console.log(res.data);
                setPirate(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.put('http://localhost:8000/api/pirate/' + props.id, {
            pegLeg,
            eyePatch,
            hookHand
        })
            .then((res) => {
                if (res.data.errors) {
                    console.log(res.data.errors);
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
        <div class="main">
            <div class="details-header">
                <h1>{pirate.name}</h1> <button onClick={() => navigate("/")}>Crew Board</button>
            </div>
            <div class="img">
                {
                    pirate.imageUrl ?
                        <img src={pirate.imageUrl} alt="image could not upload" />
                        : null
                }
                <h2>"{pirate.catchPhrase}"</h2>
            </div>
            <div class="details">
                <h2>About</h2>
                <p>Position: {pirate.crewPosition}</p>
                <p>Treasures: {pirate.treasureChests}</p>
                <form onSubmit={onSubmitHandler}>
                    <p>
                        <label>Peg Leg:</label><br />
                        {
                            pirate.pegLeg ?
                                <span>Yes</span>
                                : <span>No</span>
                        }
                    </p>
                    <p>
                        <label>Eye Patch:</label><br />
                        {
                            pirate.eyePatch ?
                                <span>Yes</span>
                                : <span>No</span>
                        }
                    </p>
                    <p>
                        <label>Hook Hand:</label><br />
                        {
                            pirate.hookHand ?
                                <span>Yes</span>
                                : <span>No</span>
                        }
                    </p>
                </form>
            </div>
        </div>
    )
}

export default PirateDetails;