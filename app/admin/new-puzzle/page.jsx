"use client";

import { useState, useEffect } from "react";
import Grid from "@/components/admin/Grid";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import moment from "moment";
import {
  updateDate,
  updateLabel,
  updateImgUrl,
} from "@/app/AppState/Features/admin/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function NewPuzzle() {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState();

  const onLabelChange = (position, val) =>
    dispatch(updateLabel({ position, val }));

  const onImgUrlChange = (position, val) =>
    dispatch(updateImgUrl({ position, val }));

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
          <Input className="form-input" placeholder="Enter link" />
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
          <Input className="form-input" placeholder="Enter link" />
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
          <Input className="form-input" placeholder="Enter link" />
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
          <Input className="form-input" placeholder="Enter link" />
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
          <Input className="form-input" placeholder="Enter link" />
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
          <Input className="form-input" placeholder="Enter link" />
        </div>
      </div>

      <div className="NewPuzzle-right-col">
        <Grid />
      </div>
    </section>
  );
}

export default NewPuzzle;
