import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import "../style/view.css";
import { DELETE_USER } from "../../redux/types";
import { useNavigate } from "react-router-dom";
import { EDIT_PAGE_ROUTE } from "../../utils/constants";

export default function ViewPage() {
  const userRed = useSelector((state) => state.userRed);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {userRed.users.length > 0 ? (
        <Table bordered hover className="container">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {userRed.users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>
                  <Button
                    variant="primary"
                    className="col-12 col-md-5"
                    onClick={() => navigate(EDIT_PAGE_ROUTE, { state: { user, index } })}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="ms-md-2 mt-2 mt-md-0 col-12 col-md-5"
                    onClick={() =>
                      dispatch({ type: DELETE_USER, payload: index })
                    }
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="placholder">
          <p>No Users yet</p>
          <p>Please create some users first .</p>
        </div>
      )}
    </>
  );
}
