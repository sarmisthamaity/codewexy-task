import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./actions/cartAction";

export default function Head_tail() {

    const data = useSelector(state => state.combinations)
    const dispatch = useDispatch()
    const [value, setValue] = useState("");
    function submitValue() {
        if (value) {
            dispatch(addItem(value))
            setValue("")
        } else {
            alert("Please select value from dropdown");
        }
    }
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <h3>Please Select Head Or Tail</h3>&nbsp;
                    <select
                        className="form-control mb-2"
                        defaultValue={value}
                        onChange={(e) => setValue(e.target.value)}
                    >
                        <option selected={value === ""} value="">Select Value</option>
                        <option selected={value === "H"} value="H">Head</option>
                        <option selected={value === "T"} value="T">Tail</option>
                    </select>
                    <button className="btn btn-success btn-xs" onClick={submitValue}>
                        Submit
                    </button>
                </div>
            </div>
            <br />
            <div className="row d-flex justify-content-center">
                {
                    data.map((d, idx) => {
                        return (
                            <div className="col-1">
                                <div key={`row_${idx}`} className="row" style={{ flexDirection: 'column' }}>
                                    {
                                        d.map((item, itemIdx) => {
                                            return (
                                                <div className="col-4" key={`col_${itemIdx}`}>
                                                    {item}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                {data.length === 0 && <>
                    <br />
                    <center>No data to show</center>
                </>}
            </div>
        </>
    );
}