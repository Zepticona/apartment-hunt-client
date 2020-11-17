import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import './Apartment.css';
import apartment1 from '../../../resources/images/apartment1.png'
import SingleApt from './SingleApt/SingleApt';
import { UserContext } from '../../../App';

export const fakeData = [
    {
        aptName: 'Washington Avenue',
        aptLocation: 'Nasirabad H/S, Chattogram',
        aptBedrooms: 3,
        aptBathroom: 3,
        aptPrice: 194,
        aptThumb: 1,
        aptId: 1,
    },
    {
        aptName: 'Gulshan Avenue',
        aptLocation: 'Fokirapool H/S, Chattogram',
        aptBedrooms: 4,
        aptBathroom: 2, 
        aptPrice: 200,
        aptThumb: 2,
        aptId: 2,   
    },
]


const Apartment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div id="apartment">
            <div className="container py-5">
                <div className="row">
                    {fakeData.map( (aptInfo, i) => <div className="col-md-4"><SingleApt key={i} aptInfo={aptInfo}></SingleApt></div> )}
                </div>
            </div>
        </div>
    );
};

export default Apartment;