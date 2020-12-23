import { Alert } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { contactListAction } from "../Actions/contactListAction";
import ButtonComponent from "./ButtonComponent";
import Loading from "./Loading";

const Icon = styled.i`
  color: white;
  font-size: 1rem;
`;
const PlaceHolder = styled.div`
  padding: 0.3rem 1rem;
  background-color: #e41f7b;
  font-size: 1rem;
  margin: 0.2rem;
  color: white;
  width: 20rem;
  height: 3rem;
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
`;
const DIV = styled.div`
  display: block;
  height: 3rem;
  margin-top: 2rem;
`;
const FavouriteScreen = ({ history, location }) => {
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contactList);
  const { loading, error, contacts } = contactList;

  useEffect(() => {
    dispatch(contactListAction());
  }, [dispatch]);
  const list = contacts.filter((contact) => contact.Favourite === true);

  const handleDetails = (id) => {
    history.push(`/details/${id}`);
  };

  console.log(list);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {error ? (
        <Alert type="errpr" message="Oops! Something went wrong." />
      ) : null}
      {loading ? (
        <Loading />
      ) : (
        <DIV>
          <h2 style={{ color: "white" }}>Favourite Contacts</h2>
          <h2 style={{ color: "white" }}>
            {list.length === 0 ? "Empty List" : null}
          </h2>

          {list.map((contact) => {
            return (
              <PlaceHolder
                onClick={() => handleDetails(contact.id)}
                key={contact.id}
              >
                {contact.Name}
              </PlaceHolder>
            );
          })}
          <ButtonComponent onClick={() => history.push("/")}>
            <Icon style={{ color: "black" }} className="fas fa-chevron-left" />
          </ButtonComponent>
        </DIV>
      )}
    </div>
  );
};
export default FavouriteScreen;
