import { Alert, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addContactAction } from "../Actions/addContactAction";
import { withRouter } from "react-router-dom";

const AddIcon = styled.i`
  color: #ff847c;
  font-size: 1rem;
  margin: 0rem 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    color: #e7305b;
  }
`;
const INPUT = styled(Input)`
  margin-top: 0.5rem;
`;
const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  margin: 0rem 1rem;
  padding: 1rem;
`;
const Header = ({ history, location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [ok, setOk] = useState(false);
  const [favourite] = useState(false);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const showModel = () => {
    setVisible(true);
    setOk(false);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const handleOk = () => {
    console.log("OK clicked");
    setOk(true);
    setVisible(false);
    dispatch(addContactAction(name, email, phone, favourite));
  };
  return (
    <div>
      <Modal
        title="Add Contact"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {ok ? <Alert message="Saving Contact..." type="info" /> : null}
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
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Modal>
      <h1 style={{ color: "white" }} onClick={() => history.push("/")}>
        My Contacts
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <StyledButton onClick={() => history.push("/favourites")}>
          Favourites
          <AddIcon className="fas fa-heart" />
        </StyledButton>
        <StyledButton onClick={showModel}>
          New Contact
          <AddIcon className="fas fa-plus-circle" />
        </StyledButton>
      </div>
    </div>
  );
};
export default withRouter(Header);
