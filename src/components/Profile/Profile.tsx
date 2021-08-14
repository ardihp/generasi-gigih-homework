import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { login } from "../../Redux/tokenSlice";
import { getCurrentUser } from "../../Util/Services";
import { Button, Box } from "@chakra-ui/react";
import { getToken } from "../../Redux/tokenSlice";

import Style from "./style.module.css";

function Profile() {
  const User = useAppSelector(state => state.token.user);
  const Token = useAppSelector(state => state.token.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCurrentUser(Token).then(data => dispatch(login(data)));
  }, [dispatch, Token]);

  const handleLogout = () => {
    dispatch(getToken([]));
    window.location.href = "/";
  };

  return (
    <div className={Style.container}>
      <div className={Style.profile}>
        {User.images && (
          <>
            <div className={Style.image}>
              <img src={User.images[0].url} alt={User.display_name} />
            </div>
            <p>{User.display_name}</p>
          </>
        )}
      </div>
      <Box ml="10px">
        <Button
          background="rgb(179, 181, 219)"
          color="white"
          borderRadius="full"
          size="sm"
          fontWeight="700"
          onClick={() => handleLogout()}
        >
          <i className="fas fa-sign-out-alt"></i>
        </Button>
      </Box>
    </div>
  );
}

export default Profile;
