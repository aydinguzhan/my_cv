import { PageButton } from "../component/PageButton";
import { goBack } from "../helper/buttonGroup";
import Form from "react-bootstrap/Form";
import CreaterCode from "../component/CreaterCode";
import { inputStr } from "../dummyData/dummyData";

export interface ISearchPage {
  setPage: any;
}

export function SearchPage({ setPage }: ISearchPage) {
  const buttonArray = goBack(setPage);

  return (
    <>
      <div className="container text-white my-5">
        <div className="row">
          <div className="col-md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="bg-transparent"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-6">
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              className="bg-transparent"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Select
              aria-label="Default select example"
              className="bg-transparent "
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="col-md-6">
            <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Check this switch"
              />
              <Form.Check // prettier-ignore
                disabled
                type="switch"
                label="disabled switch"
                id="disabled-custom-switch"
              />
            </Form>
          </div>
        </div>
      </div>
      <div className="container text-white">
        <div className="row">
          <div className="col-md-12">
            <CreaterCode codeString={inputStr} />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <PageButton buttonArray={buttonArray} />
          </div>
        </div>
      </div>
    </>
  );
}
