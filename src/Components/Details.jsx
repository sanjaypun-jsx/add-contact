import { Alert, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';
import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { contactDetailsAction } from '../Actions/contactDetailsAction';
import { deleteContactAction } from '../Actions/deleteContactAction';
import { addToFavouriteAction } from '../Actions/addToFavouriteAction';
import { editContactAction } from '../Actions/editContactAction';
import Loading from './Loading';

const Icon = styled.i`
	color: white;
	font-size: 1rem;
	padding: 0rem 0.5rem;
`;
const PlaceHolder = styled.div`
	margin-top: 0.5rem;
	padding: 0.3rem 1rem;
	background-color: #e41f7b;
	font-size: 1rem;
	color: white;
	width: 20rem;
	height: 3rem;
	display: flex;
	align-items: center;
	text-align: left;
	cursor: pointer;
`;
const DIV = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	margin-top: 4rem;
`;
const INPUT = styled(Input)`
  margin-top: 0.5rem;
  width: 20rem;
  padding: 0.3rem 1rem;
  display: block;
`;
const Details = ({ history, match }) => {
	const [ fav, setFav ] = useState(false);
	const [ edit, setEdit ] = useState(false);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState();

	const id = match.params.id;

	const dispatch = useDispatch();

	const contactDetails = useSelector((state) => state.contactDetails);
	const { loading, error, contact } = contactDetails;

	const editContact = useSelector((state) => state.editContact);
	const { loading: editLoading, error: editError, edited } = editContact;

	const addToFavourite = useSelector((state) => state.addToFavourite);
	const { updatedContact } = addToFavourite;

	useEffect(
		() => {
			dispatch(contactDetailsAction(id));
			initialValue();
		},
		[ dispatch, updatedContact, fav, edit, edited, id ]
	);

	const initialValue = () => {
		if (contact) {
			setName(contact.Name);
			setEmail(contact.Email);
			setPhone(contact.Phone);
		}
	};

	const handleFavourite = () => {
		if (fav === false) {
			setFav(true);
		}
		else if (fav === true) {
			setFav(false);
		}
		dispatch(addToFavouriteAction(id, fav));
	};

	const handleEdit = () => {
		setEdit(true);
	};
	const handleSave = () => {
		setEdit(false);
		dispatch(editContactAction(id, name, email, phone));
	};
	function confirm() {
		console.log('success');
		dispatch(deleteContactAction(id));
		history.push('/');
	}

	function cancel() {
		console.log('error');
	}
	return (
		<div>
			{error ? <Alert type='error' message='Oops! something went wrong.' /> : null}
			{editLoading ? <Loading /> : null}
			{editError ? <Alert type='error' message='Oops! something went wrong.' /> : null}
			{loading ? (
				<Loading />
			) : (
				<div>
					<h1 style={{ color: 'white' }}>{contact.Name}</h1>
					<DIV>
						<div style={{ display: 'block' }}>
							{edit ? (
								<div style={{ display: 'block' }}>
									<INPUT
										type='text'
										placeholder={contact.Name}
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
									<INPUT
										type='text'
										placeholder={contact.Email}
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<INPUT
										type='text'
										placeholder={contact.Phone}
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
							) : (
								<div>
									<PlaceHolder>
										<Icon className='fas fa-user' />Name: {contact.Name}
									</PlaceHolder>
									<PlaceHolder>
										<Icon className='fas fa-envelope' />Email: {contact.Email}
									</PlaceHolder>
									<PlaceHolder>
										<Icon className='fas fa-phone-alt' />Phone: {contact.Phone}
									</PlaceHolder>
								</div>
							)}
						</div>
					</DIV>
					<div style={{ marginTop: '5rem' }}>
						<ButtonComponent onClick={() => history.push('/')}>
							<Icon style={{ color: 'black' }} className='fas fa-chevron-left' />
						</ButtonComponent>
						{edit ? (
							<ButtonComponent onClick={handleSave} type='primary'>
								<Icon className='far fa-save' />
							</ButtonComponent>
						) : (
							<ButtonComponent onClick={handleEdit} type='primary'>
								<Icon className='far fa-edit' />
							</ButtonComponent>
						)}

						{contact.Favourite === true ? (
							<ButtonComponent onClick={handleFavourite} bgcolor='white'>
								<Icon className='fas fa-heart' style={{ color: '#e7305b' }} />
							</ButtonComponent>
						) : (
							<ButtonComponent onClick={handleFavourite} bgcolor='white'>
								<Icon className='far fa-heart' style={{ color: 'black' }} />
							</ButtonComponent>
						)}
						<Popconfirm
							title='Are you sure to delete this contact?'
							onConfirm={confirm}
							onCancel={cancel}
							okText='Yes'
							cancelText='No'
						>
							<ButtonComponent type='danger'>
								<Icon className='fas fa-trash' />
							</ButtonComponent>
						</Popconfirm>
					</div>
				</div>
			)}
		</div>
	);
};
export default Details;
