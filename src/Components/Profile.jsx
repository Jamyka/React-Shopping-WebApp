import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import usersAction from "../Redux/actions/usersActions";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  let navigate = useNavigate();

  let params = useParams();
  let { users, getUsersList } = props;
  let [userID, setID] = useState(params.id);
  useEffect(() => {
    getUsersList();
  }, []);

  let user = users.filter((usr) => {
    return usr.id == userID;
  });

  let goToProfiles = () => {
    navigate("/users");
  };
  return (
    <div>
      {user &&
        user.map((user, index) => {
          return (
            <div
              className="justify-content-center align-items-center d-flex"
              key={index}
            >
              <div
                className="card m-3 col-12 justify-content-center align-items-center rounded-3"
                style={{ width: "20rem" }}
              >
                <img
                  src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                  className="card-img-top"
                  style={{ width: 150, height: 150 }}
                  alt="Avatar"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <span style={{ fontWeight: "bold", color: "red" }}>
                      UserName:
                    </span>{" "}
                    {user.name}
                  </h5>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold", color: "red" }}>
                      UserEmail:
                    </span>{" "}
                    {user.email}
                  </p>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold", color: "red" }}>
                      UserPhone:
                    </span>{" "}
                    {user.phone}
                  </p>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold", color: "red" }}>
                      UserWebsite:
                    </span>{" "}
                    {user.website}
                  </p>

                  <button
                    className="btn btn-success m-3"
                    onClick={goToProfiles}
                  >
                    Back to Profiles
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    users: state.usersList,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getUsersList: () => dispatch(usersAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
