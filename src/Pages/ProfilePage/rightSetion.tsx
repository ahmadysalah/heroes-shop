import React from "react";
import Button from "../../Components/Elements/Buttons";
import Typography from "../../Components/Typography";
import Avater from "./avater";
import { UserData } from "./interface";
import {
  RightProfile,
  RightProfileAvaterSection,
  RightProfileSecion,
  RightProfileSecionOne,
  RightProfileuserDate,
  RightProfileuserDateButton,
  RightProfileuserDatem,
} from "./profile.style";

interface IProps {
  UserProileData: UserData[];
}

const RightSetion = ({ UserProileData }: IProps) => {
  return (
    <RightProfile>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        My Profile
      </Typography>
      <RightProfileSecion>
        <RightProfileSecionOne>
          <RightProfileuserDate>
            <RightProfileuserDatem>
              <Typography
                children={"First Name"}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                }}
              />
              <Typography
                children={"Last Name"}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                }}
              />
              <Typography
                children={"Email"}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                }}
              />
              <Typography
                children={"Birthday"}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                  marginBottom: "3rem",
                }}
              />
            </RightProfileuserDatem>
            <RightProfileuserDatem>
              <Typography
                children={UserProileData[0].firstName}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                }}
              />

              <Typography
                children={UserProileData[0].lastName}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                }}
              />

              <Typography
                children={UserProileData[0].email}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                }}
              />
              <Typography
                children={UserProileData[0].brithday}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                }}
              />
            </RightProfileuserDatem>
          </RightProfileuserDate>{" "}
          <RightProfileuserDateButton>
            <Button
              backgroundColor={"#FCDD06"}
              padding={"1rem 1.5rem"}
              fontSize={"12px"}
              backgroundColorHover={"#ffc107"}
            >
              Change Password
            </Button>
          </RightProfileuserDateButton>
        </RightProfileSecionOne>

        <RightProfileAvaterSection>
          <Avater
            width={"150px"}
            height={"150px"}
            src={UserProileData[0].image}
          />
          <RightProfileuserDateButton>
            <Button
              backgroundColor={"#FCDD06"}
              padding={"1rem 1.5rem"}
              fontSize={"12px"}
              backgroundColorHover={"#ffc107"}
            >
              Upload new photo
            </Button>
          </RightProfileuserDateButton>
        </RightProfileAvaterSection>
      </RightProfileSecion>
    </RightProfile>
  );
};

export default RightSetion;
