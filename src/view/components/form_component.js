import React from 'react'
import { useForm } from "react-hook-form";

export default function FormComponent({ onSubmit, user }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <label className="col-md-2 col-form-label">Name</label>
                <div className="col-md-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The Name"
                        defaultValue={user?.name}
                        {...register("name", {
                            required: "The name field is required",
                            pattern: {
                                value: /^[a-z ]+$/i,
                                message: "Please enter valid name",
                            },
                        })}
                    />
                    {errors.name && (
                        <p className="col-12 error">{errors.name.message}</p>
                    )}
                </div>
            </div>
            <div className="row">
                <label className="col-md-2 col-form-label">Age</label>
                <div className="col-md-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The Age"
                        defaultValue={user?.age}
                        {...register("age", {
                            required: "The age field is required",
                            validate: (value) =>
                                (value > 0 && value < 150) || "The age should be 1 to 150",
                            pattern: {
                                value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                message: "Please enter valid age",
                            },
                        })}
                    />
                    {errors.age && <p className="col-12 error">{errors.age.message}</p>}
                </div>
            </div>
            <fieldset className="row">
                <legend className="col-form-label col-md-2 pt-0">Gender</legend>
                <div className="col-md-5">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="Male"
                            defaultChecked={user == null || user.gender === "Male" ? true : false}
                            {...register("gender")}
                        />
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="Female"
                            defaultChecked={user?.gender === "Female" ? true : false}
                            {...register("gender")}
                        />
                        <label className="form-check-label">Female</label>
                    </div>
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary col-7 m-auto">
                Edit User
            </button>
        </form>
    )
}
