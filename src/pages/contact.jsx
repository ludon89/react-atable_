import React from "react";

// Components importation
import Titre from "../components/Titre";
import Content from "../components/Content";
import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <Titre text="Contact" />
      <Content>
        <Form />
      </Content>
    </>
  );
};

export default Contact;
