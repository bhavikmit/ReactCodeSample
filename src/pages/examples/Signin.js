import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { Routes } from "../../navigation/routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import userServices from "../../services/userServices";
import storage from "../../storage";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function Signin(props) {
  debugger;
  const [type, setType] = useState("password");

  const rme = storage.GetItem("rememberme");
  const uname = storage.GetItem("username");
  const pwd = storage.GetItem("pwd");
  const [username, setUsername] = useState(
    rme === (null || "false") ? "" : uname === null ? "" : uname
  );
  const [password, setPassword] = useState(
    rme === (null || "false") ? "" : pwd === null ? "" : storage.Decrypt(pwd)
  );
  const [remeberMe, setRememberMe] = useState(
    rme === null ? false : rme === "false" ? false : true
  );

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      EmailID: e.target["email"].value,
      Password: e.target["password"].value,
    };

    userServices.authentication(obj).then((res) => {
      if (res.status === 200) {
        const item = [
          { key: "username", value: obj.EmailID },
          { key: "pwd", value: storage.Encrypt(obj.Password) },
          { key: "rememberme", value: remeberMe },
          { key: "LoggedIn", value: storage.Encrypt("true") },
          {
            key: "access_token",
            value: storage.Encrypt(res.data.result.token),
          },
        ];
        storage.SetMultiItem(item);
        history.push("/Transcation/UploadExcel");
      } else {
        swal({
          title: "Error",
          text: res.data.responseMessage,
          icon: "error",
        });
      }
    });
  };

  const rememberMe = (e) => {
    const value = e.target.checked;
    setRememberMe(value);
  };

  const logout = () => {
    localStorage.clear("token");
    this.props.history.push("/login");
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link
              as={Link}
              to={Routes.DashboardOverview.path}
              className="text-gray-700"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
              homepage
            </Card.Link>
          </p>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form className="mt-4" onSubmit={handleSubmit}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        type="email"
                        name="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="example@company.com"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          required
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input
                          id="RememberMe"
                          name="remberme"
                          checked={remeberMe}
                          onChange={(e) => rememberMe(e)}
                          className="me-2"
                        />
                        <FormCheck.Label
                          htmlFor="defaultCheck5"
                          className="mb-0"
                        >
                          Remember me
                        </FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">
                        Lost password?
                      </Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or login with</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-facebook me-2"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-twitter me-2"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pil text-dark"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link
                      as={Link}
                      to={Routes.Signup.path}
                      className="fw-bold"
                    >
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Signin;
