"use client";

import "reactjs-popup/dist/index.css";
import { Input } from "antd";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";
import {
  deleteAnswers,
  addAttributionLink,
} from "@/app/AppState/Features/admin/adminSlice";

function Pill({ cellLabel, movie }) {
  const dispatch = useDispatch();

  const onAttrLinkChange = (position, link) =>
    dispatch(addAttributionLink(cellLabel, movie, link));

  return (
    <div className="Pill">
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
          onChange={(e) => onAttrLinkChange(cellLabel, e.target.value)}
          className="Pill-attribution-link-input"
          placeholder="Enter attribution link"
        />
      </Popup>
    </div>
  );
}

export default Pill;
