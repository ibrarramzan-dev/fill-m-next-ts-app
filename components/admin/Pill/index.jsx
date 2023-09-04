"use client";

import { Input } from "antd";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import Popup from "reactjs-popup";
import cn from "classnames";
import {
  deleteAnswers,
  addAnswerMovieAttrLink,
} from "@/app/AppState/Features/admin/adminSlice";

function Pill({ cellLabel, movie }) {
  const answers = useSelector((state) => state.admin.puzzle.answers[cellLabel]);

  const { attributionLink } = answers.find((answer) => answer.movie === movie);

  const dispatch = useDispatch();

  const onAttrLinkChange = (link) => {
    console.log("here is the link : ", link);
    dispatch(addAnswerMovieAttrLink({ cellLabel, movie, link }));
  };

  return (
    <div
      className={cn("Pill", {
        "Pill-linked":
          attributionLink !== "" && attributionLink.slice(0, 4) === "http",
      })}
    >
      <Popup
        trigger={
          <div>
            <p className="Pill-movie-text">{movie}</p>
            <RxCross2
              onClick={() =>
                dispatch(deleteAnswers({ cellLabel, movieToDelete: movie }))
              }
              className="Pill-cross-icon"
            />
          </div>
        }
        position="left center"
      >
        <Input
          onChange={(e) => onAttrLinkChange(e.target.value)}
          value={attributionLink}
          placeholder="Enter attribution link"
          className="Pill-attribution-link-input"
        />
      </Popup>
    </div>
  );
}

export default Pill;
