import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AddReview from "../../../Components/AddReview";
import Button from "../../../Components/Elements/Buttons";
import Rate from "../../../Components/Elements/Rating";
import Typography from "../../../Components/Typography";
import { IProduct } from "../../../Store/Types";
import {
  Padding,
  Pragraph,
  Pragraphdate,
  Review,
  Technical,
  Title,
} from "../product.style";

interface IProps {
  productById: IProduct;
  isAuth: boolean | null;
}
const Reviews = ({ productById, isAuth }: IProps) => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState(productById.reviews);
  const [uploadImagedModalDisplay, setUploadImagedModalDisplay] =
    useState<boolean>(false);

  const handleOpenReviewDialog = () => {
    setUploadImagedModalDisplay(true);

  };
  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return (
    <>
      <Title>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {" "}
          Reviews
        </Typography>
      </Title>

      <Technical>
        <Review>
          {reviews?.length !== 0 ? (
            reviews?.map((row) => (
              <Padding key={row._id}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "rem",
                  }}
                >
                  {" "}
                  {row.name}
                </Typography>
                <Pragraphdate>
                  <Rate rating={row.rating} onRating={() => { }} />
                  <Typography style={{ fontSize: "12px" }}>
                    {" "}
                    {row.createdAt?.slice(0, 10)}
                  </Typography>
                </Pragraphdate>
                <Pragraph>
                  <Typography style={{ fontSize: "12px" }}>
                    {" "}
                    {row.comment}
                  </Typography>
                </Pragraph>
              </Padding>
            ))
          ) : (
            <>
              <Padding>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "rem",
                  }}
                >
                  No Reviews
                </Typography>
              </Padding>
            </>
          )}
        </Review>
        {isAuth ? (
          <Button onClick={handleOpenReviewDialog}>Add Review</Button>
        ) : (
          <Button onClick={() => navigate("/login")}>
            Login to Add Review
          </Button>
        )}
      </Technical>
      {uploadImagedModalDisplay && (
        <AddReview
          productId={productById._id}
          rate={Math.round(productById.rating)}
          modalDisplay={uploadImagedModalDisplay}
          setModalDisplay={setUploadImagedModalDisplay}
        />
      )}
    </>
  );
};

export default Reviews;
