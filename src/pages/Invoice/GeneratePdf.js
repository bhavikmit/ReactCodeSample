import React from "react";

export const GeneratePdf = (props) => {
  return (
    <>
      <html lang="en">
        <body
          style={{ margin: "0", fontfamily: "Arial, Helvetica, sans-serif" }}
        >
          <table
            id="printPDF"
            width="50%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
            style={{ border: "1px solid #efefef", padding: "28px" }}
          >
            <tbody>
              <tr>
                <td>
                  <table
                    width="100%"
                    border="0"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            fontweight: "600",
                            fontsize: "22px",
                            lineheight: "24px",
                            paddingbottom: "16px",
                          }}
                          width="76%"
                        >
                          <img alt="logo" src="images/logo.svg" width="330px" />
                        </td>
                        <td align="right" width="24%">
                          <p
                            style={{
                              fontweight: "700",
                              textalign: "center",
                              margin: "0",
                              fontsize: "21px",
                              paddingbottom: "16px",
                            }}
                          >
                            Invoice
                          </p>
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    paddingbottom: "6px",
                                    fontsize: "15px",
                                  }}
                                >
                                  Invoice
                                </td>
                                <td
                                  align="right"
                                  style={{
                                    paddingbottom: "6px",
                                    fontsize: "15px",
                                  }}
                                >
                                  SRN #1082
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    paddingbottom: "6px",
                                    fontsize: "15px",
                                  }}
                                >
                                  Invoice Date
                                </td>
                                <td
                                  align="right"
                                  style={{
                                    paddingbottom: "6px",
                                    fontsize: "15px",
                                  }}
                                >
                                  05-07-2021
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    paddingbottom: "6px",
                                    fontsize: "15px",
                                  }}
                                >
                                  Due Date
                                </td>
                                <td
                                  align="right"
                                  style={{
                                    paddingbottom: "6px",
                                    fontsize: "15px",
                                  }}
                                >
                                  05-07-2021
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    width="100%"
                    border="0"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style={{
                      border: "1px solid #dcdcdc",
                      margin: "0 0 26px 0px",
                    }}
                  >
                    <tbody>
                      <tr style={{ background: "#515151", color: "#fff" }}>
                        <td
                          width="50%"
                          style={{
                            padding: "10px",
                            fontsize: "17px",
                            fontweight: "500",
                          }}
                        >
                          Our Info:
                        </td>
                        <td
                          width="50%"
                          style={{
                            padding: "10px",
                            fontsize: "17px",
                            fontweight: "500",
                          }}
                        >
                          Customer:
                        </td>
                      </tr>
                      <tr>
                        <td
                          width="50%"
                          style={{
                            fontsize: "15px",
                            lineheight: "23px",
                            padding: "10px 0 10px 10px",
                          }}
                        >
                          <strong style={{ fontsize: "17px" }}>
                            ABC Company
                          </strong>
                          <br />
                          412 Example South Street,
                          <br />
                          Los Angeles, FL
                          <br /> USA -
                          <br />
                          <span>Phone:</span>410-987-89-60
                          <br />
                          <span>Email:</span>support@ultimatekode.com
                          <br />
                          <span>Tax ID:</span>ABCD133FF
                        </td>
                        <td
                          width="50%"
                          style={{
                            fontsize: "15px",
                            lineheight: "23px",
                            padding: "10px 0 10px 10px",
                          }}
                        >
                          <strong style={{ fontsize: "17px" }}>
                            Dun Mabone
                          </strong>
                          <br />
                          2613 Annamark Avenue
                          <br />
                          Laoqiao, Transport
                          <br />
                          China-49999-090
                          <br />
                          <span>Phone:</span>839-306-2156
                          <br />
                          <span>Email:</span>test@gmail.com
                          <p />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    width="100%"
                    border="0"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style={{
                      border: "1px solid #dcdcdc",
                      margin: "0 0 26px 0px",
                    }}
                  >
                    <thead>
                      <tr style={{ background: "#515151", color: "#fff" }}>
                        <th
                          align="left"
                          style={{
                            padding: "10px",
                            fontweight: "400",
                            fontsize: "16px",
                          }}
                        >
                          Description
                        </th>
                        <th
                          align="left"
                          style={{
                            padding: "10px",
                            fontweight: "400",
                            fontsize: "16px",
                          }}
                        >
                          Price
                        </th>
                        <th
                          align="left"
                          style={{
                            padding: "10px",
                            fontweight: "400",
                            fontsize: "16px",
                          }}
                        >
                          Qty
                        </th>
                        <th
                          align="right"
                          style={{
                            padding: "10px",
                            fontweight: "400",
                            fontsize: "16px",
                          }}
                        >
                          SubTotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ background: "#eeeeee" }}>
                        <td
                          style={{
                            borderright: "1px solid #b9b5b5",
                            padding: "6px",
                          }}
                        >
                          .
                        </td>
                        <td
                          style={{
                            borderright: "1px solid #b9b5b5",
                            padding: "6px",
                          }}
                        >
                          $ 0.00
                        </td>
                        <td
                          style={{
                            borderright: "1px solid #b9b5b5",
                            padding: "6px",
                          }}
                        >
                          1
                        </td>
                        <td align="right" style={{ background: "#eeeeee" }}>
                          $ 0.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    width="100%"
                    border="0"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style={{
                      border: "1px solid #dcdcdc",
                      marginbottom: "20px",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td width="50%" style={{ paddingtop: "26px" }}>
                          <p
                            style={{
                              margin: "0",
                              fontsize: "17px",
                              paddingbottom: "6px",
                              fontweight: "600",
                              paddingleft: "6px",
                            }}
                          >
                            <span style={{ paddingright: "5px" }}>Status:</span>
                            Due
                          </p>
                          <p
                            style={{
                              margin: "0",
                              fontsize: "17px",
                              paddingbottom: "6px",
                              fontweight: "600",
                              paddingleft: "6px",
                            }}
                          >
                            <span style={{ paddingright: "5px" }}>
                              Total Amount:
                            </span>
                            $0.00
                          </p>
                          <p
                            style={{
                              margin: "0",
                              fontsize: "17px",
                              paddingleft: "6px",
                            }}
                          >
                            <span style={{ paddingright: "5px" }}>
                              Paid Amount:
                            </span>
                            $0.00
                          </p>
                        </td>
                        <td
                          width="50%"
                          style={{ borderleft: "1px solid #dcdcdc" }}
                        >
                          <table
                            width="100%"
                            border="0"
                            align="center"
                            cellpadding="0"
                            cellspacing="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    fontsize: "17px",
                                    fontweight: "600",
                                    padding: "8px",
                                    border: "1px solid #dcdcdc",
                                    bordertop: "none",
                                    borderleft: "0",
                                  }}
                                  width="50%"
                                >
                                  Summary
                                </td>
                                <td
                                  style={{
                                    border: "1px solid #dcdcdc",
                                    bordertop: "none",
                                    borderleft: "0",
                                    borderright: "0",
                                  }}
                                  width="50%"
                                ></td>
                              </tr>
                              <tr>
                                <td
                                  width="50%"
                                  style={{
                                    fontsize: "17px",
                                    padding: "8px",
                                    border: "1px solid #dcdcdc",
                                    bordertop: "none",
                                    borderleft: "0",
                                  }}
                                >
                                  SubTotal
                                </td>
                                <td
                                  width="50%"
                                  style={{
                                    fontsize: "17px",
                                    padding: "8px",
                                    borderbottom: "1px solid #dcdcdc",
                                  }}
                                >
                                  $0.00
                                </td>
                              </tr>
                              <tr>
                                <td
                                  width="50%"
                                  style={{
                                    fontsize: "17px",
                                    padding: "8px",
                                    borderright: "1px solid #dcdcdc",
                                  }}
                                >
                                  Balance Due:
                                </td>
                                <td
                                  width="50%"
                                  style={{
                                    fontsize: "17px",
                                    fontweight: "600",
                                    padding: "8px",
                                  }}
                                >
                                  $0.00
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td
                  align="right"
                  style={{ margin: "0", paddingbottom: "14px" }}
                >
                  <p style={{ margin: "0", paddingbottom: "14px" }}>
                    Authorized person
                  </p>
                  <img alt="img" src="images/signature.png" width="150px" />
                  <h6 style={{ margin: "0" }}>(John Doe)</h6>
                  <p style={{ margin: 0 }}>Business Owner</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ border: "1px solid #000" }}></p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingbottom: "6px",
                    fontweight: "600",
                    fontsize: "14px",
                  }}
                >
                  <span>Terms:</span>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontweight: "600",
                    fontsize: "14px",
                    paddingbottom: "8px",
                  }}
                >
                  <span>Payment Due On Receipt:</span>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontweight: "600",
                    fontsize: "13px",
                    paddingbottom: "5px",
                  }}
                >
                  <span>1. Prices And Payment</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ margin: "0", fontsize: "16px" }}>
                    Payments are to be made in U.S funds. Unless otherwise
                    specified all invoices are due net 30 days from date of
                    Shipment.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    </>
  );
};
