import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledForm = styled.form`
  width: 100%;
  background: var(--white);
  box-shadow: var(--shadow-1);
  border-radius: var(--borderRadius);
  padding: 2rem;
  margin-bottom: 3rem;
  /* height: 100%; */
  letter-spacing: var(--letterSpacing);
  .form-group {
    display: flex;
    flex-direction: column;
    font-family: var(--bodyFont);
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  color: var(--grey-900);
  font-family: var(--bodyFont);
  margin-bottom: 0.75rem;
  font-size: 1.05rem;
  letter-spacing: 2px;
  font-weight: 400;
  font-size: var(--smallText);
  text-transform: capitalize;
`;
const Input = styled.input`
  border-radius: var(--borderRadius);
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-family: var(--bodyFont);
  text-transform: capitalize;

  background: var(--grey-0);
  /* border-color: transparent; */
  border: 1px solid var(--grey-300);
  ::placeholder {
    color: var(--grey-600);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
`;
const TextArea = styled.textarea`
  border-radius: var(--borderRadius);
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-family: var(--bodyFont);
  text-transform: capitalize;

  background: var(--grey-0);
  /* border-color: transparent; */
  border: 1px solid var(--grey-300);
  &::placeholder {
    color: var(--grey-600);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
`;
const Small = styled.small`
  color: var(--grey-800);
  font-family: var(--bodyFont);
  font-size: var(--smallText);
`;

const Form = () => (
  <StyledForm
    action="https://formspree.io/f/mqkwlqpk"
    method="POST"
    className="form"
  >
    <div className="form-group">
      <Label htmlFor="name">your Name</Label>
      <Input
        type="name"
        className="form-control"
        id="name"
        aria-describedby="emailHelp"
        placeholder="Name"
        name="name"
        required
      />
      {/* <Small id="nameHelp" className="form-text text-muted">
        We&apos;ll never share your details with anyone else.
      </Small> */}
    </div>

    <div className="form-group">
      <Label htmlFor="email">your Email address</Label>
      <Input
        type="email"
        className="form-control"
        id="email"
        aria-describedby="emailHelp"
        placeholder="email"
        name="email"
        required
      />
      {/* <Small id="emailHelp" className="form-text text-muted">
        We&apos;ll never share your email with anyone else.
      </Small> */}
    </div>

    <div className="form-group">
      <Label htmlFor="message">Message</Label>
      <TextArea
        type="email"
        className="form-control"
        id="message"
        aria-describedby="messageHelp"
        rows="5"
        placeholder="Message"
        name="message"
        required
      />
    </div>
    <Button>Submit</Button>
    <Small id="messageHelp" className="form-text text-muted">
      We&apos;ll never share your details with anyone else.
    </Small>
  </StyledForm>
);

export default Form;
