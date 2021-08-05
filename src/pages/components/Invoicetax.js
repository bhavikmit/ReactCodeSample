import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Invoicetax = (props) => {
  const myStyle = {
    padding: "3px",
  };

  return props.fieldList.map((val, idx) => {
    return (
      <>
        <tr key={val.index}>
          {props.columnHeader.map((o, i) => {
            let fieldName = o.replace(/ /g, "").toLowerCase();

            let dynamicName = fieldName + "-" + idx;
            let valueOfObject = val[fieldName];

            return (
              <td>
                {fieldName !== "action" ? (
                  <>
                    {fieldName === "itemname" || fieldName === "description" ? (
                      <>
                        {fieldName === "itemname" ? (
                          <>
                            <select
                              name={fieldName}
                              data-id={idx}
                              id={dynamicName}
                              value={val.itemId}
                              className="form-control"
                              onChange={props.handlerChange}
                              data-name={o}
                            >
                              <option value={val.itemId}>
                                Select item name
                              </option>
                              {valueOfObject.map((o) => {
                                return (
                                  <option value={o.itemId}>{o.itemName}</option>
                                );
                              })}
                            </select>
                          </>
                        ) : (
                          <>
                            <input
                              type="text"
                              name={fieldName}
                              data-id={idx}
                              id={dynamicName}
                              className="form-control"
                              value={valueOfObject}
                              onChange={props.handlerChange}
                              data-name={o}
                            />
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <input
                          type="number"
                          name={fieldName}
                          data-id={idx}
                          id={dynamicName}
                          className="form-control"
                          value={valueOfObject}
                          onChange={props.handlerChange}
                          data-name={o}
                          readOnly={
                            fieldName === "quantity" || fieldName === "rate"
                              ? false
                              : true
                          }
                        />
                      </>
                    )}
                    <span className="errorMessage">
                      {val.errors[fieldName]}
                    </span>
                  </>
                ) : (
                  <>
                    {idx === 0 ? (
                      <button
                        onClick={() => props.add()}
                        type="button"
                        className="btn btn-primary text-center"
                      >
                        <i className="fa fa-plus circle" area-hidden="true"></i>
                      </button>
                    ) : (
                      <button
                        onClick={() => props.delete(val.index)}
                        type="button"
                        className="btn btn-danger"
                      >
                        <i className="fa fa-minus" area-hidden="true"></i>
                      </button>
                    )}
                  </>
                )}
              </td>
            );
          })}
          {/* <td style={myStyle}>
            {idx === 0 ? (
              <button
                onClick={() => props.add()}
                type="button"
                className="btn btn-primary text-center"
              >
                <i className="fa fa-plus circle" area-hidden="true"></i>
              </button>
            ) : (
              <button
                onClick={() => props.delete(val.index)}
                type="button"
                className="btn btn-danger"
              >
                <i className="fa fa-minus" area-hidden="true"></i>
              </button>
            )}
          </td> */}
        </tr>

        {/*<tr key={val.index}>
          <td style={myStyle}>
             <input
              type="text"
              name="itemName"
              data-id={idx}
              id={itemName}
              className="form-control"
              value={val.itemName}
              onChange={props.handlerChange}
            />
            <span className="errorMessage">{val.errors.itemName}</span> 
          </td>

          <td style={myStyle}>
            <input
              type="number"
              name="quantity"
              data-id={idx}
              id={quantity}
              className="form-control"
              value={val.quantity}
              onChange={props.handlerChange}
            />
            <span className="errorMessage">{val.errors.quantity}</span>
          </td>
          <td style={myStyle}>
            <input
              type="number"
              name="rate"
              data-id={idx}
              id={rate}
              className="form-control"
              value={val.rate}
              onChange={props.handlerChange}
            />
            <span className="errorMessage">{val.errors.rate}</span>
          </td>

          <td style={myStyle}>
            <input
              type="number"
              name="taxPercentage"
              data-id={idx}
              id={taxPercentage}
              className="form-control"
              value={val.taxPercentage}
              onChange={props.handlerChange}
            />
            <span className="errorMessage">{val.errors.taxPercentage}</span>
          </td>
          <td style={myStyle}>
            <input
              type="number"
              name="tax"
              data-id={idx}
              id={tax}
              className="form-control"
              readOnly
              value={val.tax}
            />
          </td>
          <td style={myStyle}>
            <input
              type="text"
              name="amount"
              data-id={idx}
              id={amount}
              className="form-control"
              readOnly
              value={val.amount}
            />
          </td>
          <td style={{ width: "50%", padding: "3px" }}>
            <input
              type="text"
              name="description"
              data-id={idx}
              id={description}
              className="form-control"
              placeholder="Enter your description..."
              value={val.description}
              onChange={props.handlerChange}
            />
            <span className="errorMessage">{val.errors.description}</span>
          </td>
          <td style={myStyle}>
            {idx === 0 ? (
              <button
                onClick={() => props.add()}
                type="button"
                className="btn btn-primary text-center"
              >
                <i className="fa fa-plus circle" area-hidden="true"></i>
              </button>
            ) : (
              <button
                onClick={() => props.delete(val.index)}
                type="button"
                className="btn btn-danger"
              >
                <i className="fa fa-minus" area-hidden="true"></i>
              </button>
            )}
          </td> 
        </tr>*/}
      </>
    );
  });
};
