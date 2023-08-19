"use client";

import "react-day-picker/dist/style.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Button, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { DayPicker } from "react-day-picker";
import axios from "axios";
import {
  updateDate,
  updateLabel,
  updateImgUrl,
  updateAttrLink,
  resetPuzzle,
} from "@/app/AppState/Features/admin/adminSlice";
import Grid from "@/components/admin/Grid";

function NewPuzzle() {
  const dispatch = useDispatch();

  const puzzle = useSelector((state) => state.admin.puzzle);

  const [selected, setSelected] = useState();

  const onLabelChange = (position, val) =>
    dispatch(updateLabel({ position, val }));

  const onImgUrlChange = (position, val) =>
    dispatch(updateImgUrl({ position, val }));

  const onAttrLinkChange = (position, val) =>
    dispatch(updateAttrLink({ position, val }));

  const onPuzzleSave = () => {
    axios
      .post("https://fill-m-next-ts-app.vercel.app/api/puzzles", puzzle)
      .then((response) => {
        if (response.data.success) {
          dispatch(resetPuzzle());
          toast.success("Puzzle created!");
        }
      })
      .catch((error) => console.error(error));
  };

  const renderSaveButton = () => {
    const { date, labels, answers } = puzzle;

    return date !== "" &&
      (labels.x1.label || (labels.x1.image && labels.x1.attributionLink)) &&
      (labels.x2.label || (labels.x2.image && labels.x2.attributionLink)) &&
      (labels.x3.label || (labels.x3.image && labels.x3.attributionLink)) &&
      (labels.y1.label || (labels.y1.image && labels.y1.attributionLink)) &&
      (labels.y2.label || (labels.y2.image && labels.y2.attributionLink)) &&
      (labels.y3.label || (labels.y3.image && labels.y3.attributionLink)) &&
      answers.A.length > 0 &&
      answers.B.length > 0 &&
      answers.C.length > 0 &&
      answers.D.length > 0 &&
      answers.E.length > 0 &&
      answers.F.length > 0 &&
      answers.G.length > 0 &&
      answers.H.length > 0 &&
      answers.I.length > 0 ? (
      <Button onClick={onPuzzleSave} type="primary">
        Save
      </Button>
    ) : null;
  };

  console.log(selected);
  return (
    <section className="NewPuzzle">
      <div className="NewPuzzle-left-col">
        <div className="NewPuzzle-left-col-inputs-section">
          <div className="NewPuzzle-left-col-inputs-section-day-picker">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                const dateStr = `${date.getDate()}-${
                  date.getMonth() + 1
                }-${date.getFullYear()}`;
                dispatch(updateDate(dateStr));
                setSelected(date);
              }}
            />
          </div>
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (X₁)</p>
          <Input
            onChange={(e) => onLabelChange("x1", e.target.value)}
            className="form-input"
            placeholder="Enter the label"
          />

          <p className="form-input-label">Image (X₁)</p>
          <Input
            onChange={(e) => onImgUrlChange("x1", e.target.value)}
            className="form-input"
            placeholder="Enter image url"
          />

          <p className="form-input-label">Attribution link (X₁)</p>
          <Input
            onChange={(e) => onAttrLinkChange("x1", e.target.value)}
            className="form-input"
            placeholder="Enter link"
          />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (X₂)</p>
          <Input
            onChange={(e) => onLabelChange("x2", e.target.value)}
            className="form-input"
            placeholder="Enter the label"
          />

          <p className="form-input-label">Image (X₂)</p>
          <Input
            onChange={(e) => onImgUrlChange("x2", e.target.value)}
            className="form-input"
            placeholder="Enter image url"
          />

          <p className="form-input-label">Attribution link (X₂)</p>
          <Input
            onChange={(e) => onAttrLinkChange("x2", e.target.value)}
            className="form-input"
            placeholder="Enter link"
          />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (X₃)</p>
          <Input
            onChange={(e) => onLabelChange("x3", e.target.value)}
            className="form-input"
            placeholder="Enter the label"
          />

          <p className="form-input-label">Image (X₃)</p>
          <Input
            onChange={(e) => onImgUrlChange("x3", e.target.value)}
            className="form-input"
            placeholder="Enter image url"
          />

          <p className="form-input-label">Attribution link (X₃)</p>
          <Input
            onChange={(e) => onAttrLinkChange("x3", e.target.value)}
            className="form-input"
            placeholder="Enter link"
          />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (Y₁)</p>
          <Input
            onChange={(e) => onLabelChange("y1", e.target.value)}
            className="form-input"
            placeholder="Enter the label"
          />

          <p className="form-input-label">Image (Y₁)</p>
          <Input
            onChange={(e) => onImgUrlChange("y1", e.target.value)}
            className="form-input"
            placeholder="Enter image url"
          />

          <p className="form-input-label">Attribution link (Y₁)</p>
          <Input
            onChange={(e) => onAttrLinkChange("y1", e.target.value)}
            className="form-input"
            placeholder="Enter link"
          />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (Y₂)</p>
          <Input
            onChange={(e) => onLabelChange("y2", e.target.value)}
            className="form-input"
            placeholder="Enter the label"
          />

          <p className="form-input-label">Image (Y₂)</p>
          <Input
            onChange={(e) => onImgUrlChange("y2", e.target.value)}
            className="form-input"
            placeholder="Enter image url"
          />

          <p className="form-input-label">Attribution link (Y₂)</p>
          <Input
            onChange={(e) => onAttrLinkChange("y2", e.target.value)}
            className="form-input"
            placeholder="Enter link"
          />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (Y₃)</p>
          <Input
            onChange={(e) => onLabelChange("y3", e.target.value)}
            className="form-input"
            placeholder="Enter the label"
          />

          <p className="form-input-label">Image (Y₃)</p>
          <Input
            onChange={(e) => onImgUrlChange("y3", e.target.value)}
            className="form-input"
            placeholder="Enter image url"
          />

          <p className="form-input-label">Attribution link (Y₃)</p>
          <Input
            onChange={(e) => onAttrLinkChange("y3", e.target.value)}
            className="form-input"
            placeholder="Enter link"
          />
        </div>
      </div>

      <div className="NewPuzzle-right-col">
        <Grid />
      </div>

      <div className="NewPuzzle-save-btn-wrapper">{renderSaveButton()}</div>
      <ToastContainer />
    </section>
  );
}

export default NewPuzzle;
