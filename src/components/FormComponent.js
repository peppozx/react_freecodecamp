import React from "react";

export default function FormComponent(props) {
  return (
    <div>
      <main>
        <form className="myForm">
          <input
            type="text"
            name="name"
            onChange={props.handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="lastname"
            onChange={props.handleChange}
            placeholder="Last name"
          />
          <input
            type="tel"
            name="phone"
            onChange={props.handleChange}
            placeholder="Phone"
          />
          <input
            type="checkbox"
            value="STNEENEN?"
            name="checked"
            onChange={props.handleChange}
          />
        </form>
        <br />
        <span>{props.data.name}</span>
        <br />
        <span>{props.data.lastname}</span>
        <br />
        <span>{props.data.phone}</span>
        <br />
        <span>{props.data.checked ? "YES" : "NO"}</span>
      </main>
    </div>
  );
}
