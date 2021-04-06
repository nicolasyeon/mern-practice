import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
const PirateList = (props) => {
    const [allPirates, setAllPirates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate")
            .then((res) => {
                console.log(res.data);
                setAllPirates(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deletePirate = (pirateId) => {
        axios.delete(`http://localhost:8000/api/pirate/${pirateId}`)
            .then((res) => {
                console.log(res.data);
                setAllPirates(allPirates.filter((pirateElement) => pirateElement._id !== pirateId))
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div class="main">
            <div class="header-routes">
                <h1>Pirate Crew</h1> <button onClick={() => navigate(`/pirate/new`)}>Add Pirate</button>
            </div>

            <table>
                <tbody key="tbody">
                    {
                        allPirates.map((pirate, index) => (
                            <tr>
                                <td>
                                    {
                                        pirate.imageUrl ?
                                            <img src={pirate.imageUrl} alt="image could not upload" />
                                            : null
                                    }
                                    <h3>{pirate.name}</h3>
                                    <button onClick={() => navigate(`/pirate/${pirate._id}`)}>View Pirate</button> <DeleteButton class="delete-button" _id={pirate._id} deletePirateFunc={deletePirate} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default PirateList;
