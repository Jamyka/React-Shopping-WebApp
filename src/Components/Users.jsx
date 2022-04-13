import React, { useEffect } from "react";
import { connect } from "react-redux";
import usersAction from "../Redux/actions/usersActions";
import { useNavigate } from "react-router-dom";
function Users(props) {
  let navigate = useNavigate();
  let { users, getUsersList } = props;
  useEffect(() => {
    getUsersList();
  }, []);

  let goToHomePage = () => {
    navigate("/home");
  };
  let goToUserProfile = (id) => {
    navigate(`/profile/${id}`);
  };
  return (
    <>
      <div className="p-5">
        <h1 className="text-center">Users List</h1>
        <div className="d-flex justify-content-center align-items-center col-12 flex-wrap">
          {users &&
            users.map((user, index) => {
              return (
                <div
                  className="card m-3 col-3 justify-content-center align-items-center rounded-3"
                  id="card"
                  style={{ width: "20rem" }}
                  key={index}
                >
                  <img
                    src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                    className="card-img-top"
                    style={{ width: 150, height: 150 }}
                    alt="Avatar"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.phone}</p>
                    <button
                      className="btn btn-success m-3"
                      onClick={() => {
                        goToUserProfile(user.id);
                      }}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <button className="btn btn-danger m-3" onClick={goToHomePage}>
          Go To Home Page
        </button>
      </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
