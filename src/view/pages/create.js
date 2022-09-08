import React, { useState } from "react";
import "../style/user_form.css";
import { useDispatch } from "react-redux";
import { ADD_USER } from "../../redux/types";
import FormComponent from "../components/form_component";

export default function CreatePage() {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);

    const onSubmit = (data) => {
        dispatch({ type: ADD_USER, payload: data });
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    };

    return (
        <div className="container user-form">
            <h1>Create User</h1>
            <FormComponent onSubmit={onSubmit}/>
            <div
                className={`alert alert-success m-auto mt-5 col-md-4 ${!alert && "d-none"
                    }`}
                role="alert"
            >
                User Created Successfully!
            </div>
        </div>
    );
}
