import React, { useEffect, useState } from 'react';
//import ButtonComponent from "./ButtonComponent";
import '../styles.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styled from 'styled-components';
//import Modal from "antd/lib/modal/Modal";
//import { Input } from "antd";
//import { Alert } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { contactListAction } from '../Actions/contactListAction';
//import { addContactAction } from "../Actions/addContactAction";
import Loading from './Loading';
import { Alert } from 'antd';
import { addToFavouriteAction } from '../Actions/addToFavouriteAction';
import { contactDetailsAction } from '../Actions/contactDetailsAction';

const Icon = styled.i`
	color: white;
	font-size: 1rem;
	padding: 0rem 0.5rem;
	cursor: pointer;
`;
const DIV = styled.div`
	display: block;
	height: 3rem;
	margin-top: 2rem;
`;
const DIVWrapper = styled.div`display: block;`;
const PlaceHolder = styled.div`
	padding: 0.3rem 1rem;
	background-color: #e41f7b;
	font-size: 1rem;
	margin: 0.2rem;
	color: white;
	width: 20rem;
	height: 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: left;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
`;
// const AddIcon = styled.i`
//   color: #ff847c;
//   font-size: 3rem;
//   margin: 0rem 2rem;
//   cursor: pointer;
//   transition: all 0.2s ease-in;
//   &:hover {
//     color: #e7305b;
//   }
// `;

export default function HomeScreen({ location, history }) {
	const [ fav, setFav ] = useState(false);
	const [ ID, setID ] = useState();

	const dispatch = useDispatch();

	const contactList = useSelector((state) => state.contactList);
	const { loading, error, contacts } = contactList;

	const addContact = useSelector((state) => state.addContact);
	const { contact: adContact } = addContact;

	const editContact = useSelector((state) => state.editContact);
	const { edited } = editContact;

	useEffect(
		() => {
			dispatch(contactListAction());
		},
		[ dispatch, adContact, fav, edited ]
	);

	const handleFav = (id) => {
		if (fav === false) {
			setFav(true);
		}
		else if (fav === true) {
			setFav(false);
		}
		dispatch(addToFavouriteAction(id, fav));
		setID(id);
	};
	const handleEdit = (id) => {
		history.push(`/details/${id}`);
	};
	return (
		<div className='App'>
			<DIVWrapper>
				{error ? <Alert type='error' message='Something went wrong!' /> : null}
				{loading ? (
					<Loading />
				) : (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<DIV>
							{contacts.length === 0 ? <h1 style={{ color: 'white' }}>Empty Contacts</h1> : null}
							{contacts.map((contact) => {
								return (
									<PlaceHolder key={contact.Name}>
										<div>
											<div>
												<Icon className='fas fa-user' />
												{contact.Name}
											</div>
										</div>
										<div>
											{contact.Favourite === true ? (
												<Icon
													onClick={() => handleFav(contact.id)}
													className='fas fa-heart'
													style={{ color: 'white' }}
												/>
											) : (
												<Icon onClick={() => handleFav(contact.id)} className='far fa-heart' />
											)}

											<Icon onClick={() => handleEdit(contact.id)} className='far fa-edit' />
										</div>
									</PlaceHolder>
								);
							})}
							{/* <ButtonComponent type="primary">
              <Icon className="far fa-edit" />
            </ButtonComponent>
            <ButtonComponent type="danger">
              <Icon className="fas fa-trash" />
            </ButtonComponent> */}
						</DIV>
					</div>
				)}
			</DIVWrapper>
		</div>
	);
}
