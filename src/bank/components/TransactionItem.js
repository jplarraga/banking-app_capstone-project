import React, {useState, useContext } from "react";
import './TransactionItem.css';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from "../../shared/context/auth-context";

const TransactionItem = props => {

    const auth = useContext(AuthContext);
    const[showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    const showProceedWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };
    
    const confirmDeleteHandler = () => {
        console.log('CANCELING TRANSACTION...');
    };

    return( 

        <React.Fragment>
            <Modal 
            show={showMap} 
            onCancel={closeMapHandler} 
            header={props.location} 
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>Close</Button>}
            >
                <div className="map-container">
                    <Map center={props.coordinates} zoom={16}/>
                </div>    
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Confirmation Notification" 
                footerClass="place-item__modal-actions" 
                footer={
                <React.Fragment>
                    <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                    <Button danger onClick={confirmDeleteHandler}>PROCEED</Button>
                    
                </React.Fragment>
                 }
            >
                <p>Do you want to proceed with the transaction?</p>
            </Modal>
            <li className="place-item">
                <Card>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.location}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>View the transaction location</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default TransactionItem;