import { Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import { Popconfirm, message } from "antd";

const Icon = styled.i`
  color: white;
  font-size: 1rem;
`;
const PlaceHolder = styled.div`
  margin-top: 0.5rem;
  padding: 0.3rem 1rem;
  background-color: #092532;
  font-size: 1rem;
  color: white;
  width: 15rem;
  text-align: left;
  cursor: pointer;
`;
const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-top: 2rem;
`;
const INPUT = styled(Input)`
  margin-top: 0.5rem;
  width: 15rem;
  padding: 0.3rem 1rem;
  display: block;
`;
const Details = () => {
  const [fav, setFav] = useState(false);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFavourite = () => {
    setFav(!fav);
  };
  const handleEdit = () => {
    setEdit(!edit);
  };

  function confirm() {
    console.log("success");
  }

  function cancel() {
    console.log("error");
  }
  return (
    <div>
      <h1>Details of name</h1>
      <DIV>
        <div style={{ display: "block" }}>
          {edit ? (
            <div style={{ display: "block" }}>
              <INPUT
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <INPUT
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <INPUT
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <PlaceHolder>Hello World</PlaceHolder>
              <PlaceHolder>Hello World</PlaceHolder>
              <PlaceHolder>Hello World</PlaceHolder>
            </div>
          )}
        </div>
      </DIV>
      <div style={{ marginTop: "3rem" }}>
        <ButtonComponent onClick={handleEdit} type="primary">
          {edit ? (
            <Icon className="far fa-save" />
          ) : (
            <Icon className="far fa-edit" />
          )}
        </ButtonComponent>

        <ButtonComponent onClick={handleFavourite} bgcolor="white">
          {fav === true ? (
            <Icon className="fas fa-heart" style={{ color: "#e7305b" }} />
          ) : (
            <Icon className="far fa-heart" style={{ color: "black" }} />
          )}
        </ButtonComponent>
        <Popconfirm
          title="Are you sure to delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <ButtonComponent type="danger">
            <Icon className="fas fa-trash" />
          </ButtonComponent>
        </Popconfirm>
      </div>
    </div>
  );
};
export default Details;
