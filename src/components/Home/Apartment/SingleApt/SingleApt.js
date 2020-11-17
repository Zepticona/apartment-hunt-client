import React from 'react';
import '../Apartment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import apartment1 from '../../../../resources/images/apartment1.png';
import { Link } from 'react-router-dom';

const SingleApt = (props) => {
    console.log(props.aptInfo)
    return (
        <div className="card apartment-info">
            <img className="card-img-top" src={apartment1} alt="" />
            <div className="card-body">
                <h5 className="card-title font-weight-bold" style={{ color: '#275A53' }}>{props.aptInfo.aptName}</h5>
                <p className="text-secondary"><FontAwesomeIcon icon={faMapMarker} className="mr-1" />{props.aptInfo.aptLocation}</p>
                <div className="d-flex justify-content-between">
                    <p className="text-secondary"><FontAwesomeIcon icon={faBed} className="mr-1" />{props.aptInfo.aptBedrooms} Bedrooms</p>
                    <p className="text-secondary"><FontAwesomeIcon icon={faBath} className="mr-1" />{props.aptInfo.aptBathroom} Bathrooms</p>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <h3 className="font-weight-bold" style={{ color: '#275A53' }}>${props.aptInfo.aptPrice}</h3>
                <Link to={`/apartmentDetails/${props.aptInfo.aptId}`}>
                    <button className="btn" style={{ background: '#275A53', color: '#ffffff' }}>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleApt;