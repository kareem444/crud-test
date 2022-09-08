import React, { useState } from "react";
import "../style/user_form.css";
import { useDispatch } from "react-redux";
import { EDIT_USER } from "../../redux/types";
import { useLocation } from "react-router-dom";
import FormComponent from "../components/form_component";

export default function EditPage() {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);

    const { state } = useLocation();

    const onSubmit = (data) => {
        dispatch({
            type: EDIT_USER,
            payload: { user: data, userIndex: state.index },
        });
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    };

    return (
        <div className="container user-form">
            <h1>Edit User</h1>
            <FormComponent onSubmit={onSubmit} user={state.user} />
            <div
                className={`alert alert-success m-auto mt-5 col-md-4 ${!alert && "d-none"
                    }`}
                role="alert"
            >
                User Updated Successfully!
            </div>
        </div>
    );
}
