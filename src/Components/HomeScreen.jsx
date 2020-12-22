import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import "../styles.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import styled from "styled-components";
import Modal from "antd/lib/modal/Modal";
import { Input } from "antd";
import { Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { contactListAction } from "../Actions/contactListAction";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { addContactAction } from "../Actions/addContactAction";

const Icon = styled.i`
  color: white;
  font-size: 1rem;
`;
const DIV = styled.div`
  display: block;
  height: 3rem;
  margin-top: 2rem;
`;
const DIVWrapper = styled.div`
  display: block;
`;
const PlaceHolder = styled.div`
  padding: 0.3rem 1rem;
  background-color: #092532;
  font-size: 1rem;
  margin: 0.2rem;
  color: white;
  width: 15rem;
  text-align: left;
  cursor: pointer;
`;
const AddIcon = styled.i`
  color: #ff847c;
  font-size: 2rem;
  margin: 0rem 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    color: #e7305b;
  }
`;
const INPUT = styled(Input)`
  margin-top: 0.5rem;
`;
export default function HomeScreen({ location, history }) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [ok, setOk] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const dispatch = useDispatch();

  const contactList = useSelector((state) => state.contactList);
  const { loading, error, contacts } = contactList;

  const addContact = useSelector((state) => state.addContact);
  const { loading: addLoading, error: errorLoading, contact } = addContact;

  console.log(contacts);

  useEffect(() => {
    dispatch(contactListAction());
  }, [dispatch, refetch]);

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
    setTimeout(() => {
      setVisible(false);
    }, 2000);
    dispatch(addContactAction(name, email, phone));
    setRefetch(!refetch);
  };

  const handleDetails = (id) => {
    //history.push(`/detail/${id}`);
    console.log(id);
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="App">
      <DIVWrapper>
        <h1>My Contacts</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          Add Contact
          <AddIcon onClick={showModel} className="fas fa-plus-circle" />
        </div>
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
        {loading ? (
          <Spin indicator={antIcon} />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <DIV>
              {contacts.map((contact) => {
                return (
                  <PlaceHolder
                    onClick={() => handleDetails(contact.id)}
                    key={contact.id}
                  >
                    {contact.Name}
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
