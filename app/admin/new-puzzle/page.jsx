"use client";

import "react-day-picker/dist/style.css";
import { useState } from "react";
import { Form, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { DayPicker } from "react-day-picker";
import { ToastContainer, toast } from "react-toastify";
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
  const puzzle = useSelector((state) => state.admin.puzzle);

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [selected, setSelected] = useState();

  const onLabelChange = (position, val) =>
    dispatch(updateLabel({ position, val }));

  const onImgUrlChange = (position, val) =>
    dispatch(updateImgUrl({ position, val }));

  const onAttrLinkChange = (position, val) =>
    dispatch(updateAttrLink({ position, val }));

  const guesses = {
    A: {},
    B: {},
    C: {},
    D: {},
    E: {},
    F: {},
    G: {},
    H: {},
    I: {},
  };

  const puzzleAnswers = puzzle.answers;
  Object.keys(puzzleAnswers).forEach((label) => {
    puzzleAnswers[label].forEach((answer) => {
      const { id, movie, image, attributionLink } = answer;

      const record = {
        movie,
        image,
        attributionLink,
        count: 0,
      };

      guesses[label][id] = record;
    });
    guesses[label].notGuessed = 0;
  });

  const statsInitialState = {
    score: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    },
    guesses,
  };

  const onPuzzleSave = () => {
    axios
      .post("https://fill-m-next-ts-app.vercel.app/api/puzzles", {
        ...puzzle,
        stats: statsInitialState,
      })
      // .post("http://localhost:3000/api/puzzles", {
      //   ...puzzle,
      //   stats: statsInitialState,
      // })
      .then((response) => {
        if (response.data.success) {
          dispatch(resetPuzzle());
          form.resetFields();
          toast.success("Puzzle created!");
        }
      })
      .catch((error) => console.error(error));
  };

  const renderSaveButton = () => {
    const { date, labels, answers } = puzzle;

    const cellLabels = Object.keys(answers);

    const recordsFound = [];

    cellLabels.forEach((cellLabel) => {
      if (answers[cellLabel].length > 0) {
        const recordsFoundArr = answers[cellLabel].filter(
          (answer) =>
            answer.attributionLink === "" ||
            (answer.attributionLink &&
              answer.attributionLink.slice(0, 4) !== "http")
        );

        recordsFound.push(...recordsFoundArr);
      }
    });

    return date !== "" &&
      (labels.x1.label || (labels.x1.image && labels.x1.attributionLink)) &&
      (labels.x2.label || (labels.x2.image && labels.x2.attributionLink)) &&
      (labels.x3.label || (labels.x3.image && labels.x3.attributionLink)) &&
      (labels.y1.label || (labels.y1.image && labels.y1.attributionLink)) &&
      (labels.y2.label || (labels.y2.image && labels.y2.attributionLink)) &&
      (labels.y3.label || (labels.y3.image && labels.y3.attributionLink)) &&
      recordsFound.length === 0 ? (
      <Button onClick={onPuzzleSave} type="primary">
        Save
      </Button>
    ) : null;
  };

  return (
    <section className="NewPuzzle">
      <div className="NewPuzzle-left-col">
        <div className="NewPuzzle-left-col-inputs-section">
          <div className="NewPuzzle-left-col-inputs-section-day-picker">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                const dateStr = `${
                  date.getMonth() + 1
                }-${date.getDate()}-${date.getFullYear()}`;
                dispatch(updateDate(dateStr));
                setSelected(date);
              }}
            />
          </div>
        </div>

        <Form name="new-puzzle-form" form={form}>
          <div className="NewPuzzle-left-col-inputs-section">
            <p className="form-input-label">Label (X₁)</p>
            <Form.Item name="labelX1">
              <Input
                onChange={(e) => onLabelChange("x1", e.target.value)}
                className="form-input"
                placeholder="Enter the label"
              />
            </Form.Item>

            <p className="form-input-label">Image (X₁)</p>
            <Form.Item name="imageX1">
              <Input
                onChange={(e) => onImgUrlChange("x1", e.target.value)}
                className="form-input"
                placeholder="Enter image url"
              />
            </Form.Item>

            <p className="form-input-label">Attribution link (X₁)</p>
            <Form.Item name="attributionX1">
              <Input
                onChange={(e) => onAttrLinkChange("x1", e.target.value)}
                className="form-input"
                placeholder="Enter link"
              />
            </Form.Item>
          </div>

          <div className="NewPuzzle-left-col-inputs-section">
            <p className="form-input-label">Label (X₂)</p>
            <Form.Item name="labelX2">
              <Input
                onChange={(e) => onLabelChange("x2", e.target.value)}
                className="form-input"
                placeholder="Enter the label"
              />
            </Form.Item>

            <p className="form-input-label">Image (X₂)</p>
            <Form.Item name="imageX2">
              <Input
                onChange={(e) => onImgUrlChange("x2", e.target.value)}
                className="form-input"
                placeholder="Enter image url"
              />
            </Form.Item>

            <p className="form-input-label">Attribution link (X₂)</p>
            <Form.Item name="attributionX2">
              <Input
                onChange={(e) => onAttrLinkChange("x2", e.target.value)}
                className="form-input"
                placeholder="Enter link"
              />
            </Form.Item>
          </div>

          <div className="NewPuzzle-left-col-inputs-section">
            <p className="form-input-label">Label (X₃)</p>
            <Form.Item name="labelX3">
              <Input
                onChange={(e) => onLabelChange("x3", e.target.value)}
                className="form-input"
                placeholder="Enter the label"
              />
            </Form.Item>

            <p className="form-input-label">Image (X₃)</p>
            <Form.Item name="imageX3">
              <Input
                onChange={(e) => onImgUrlChange("x3", e.target.value)}
                className="form-input"
                placeholder="Enter image url"
              />
            </Form.Item>

            <p className="form-input-label">Attribution link (X₃)</p>
            <Form.Item name="attributionX3">
              <Input
                onChange={(e) => onAttrLinkChange("x3", e.target.value)}
                className="form-input"
                placeholder="Enter link"
              />
            </Form.Item>
          </div>

          <div className="NewPuzzle-left-col-inputs-section">
            <p className="form-input-label">Label (Y₁)</p>
            <Form.Item name="labelY1">
              <Input
                onChange={(e) => onLabelChange("y1", e.target.value)}
                className="form-input"
                placeholder="Enter the label"
              />
            </Form.Item>

            <p className="form-input-label">Image (Y₁)</p>
            <Form.Item name="imageY1">
              <Input
                onChange={(e) => onImgUrlChange("y1", e.target.value)}
                className="form-input"
                placeholder="Enter image url"
              />
            </Form.Item>

            <p className="form-input-label">Attribution link (Y₁)</p>
            <Form.Item name="attributionY1">
              <Input
                onChange={(e) => onAttrLinkChange("y1", e.target.value)}
                className="form-input"
                placeholder="Enter link"
              />
            </Form.Item>
          </div>

          <div className="NewPuzzle-left-col-inputs-section">
            <p className="form-input-label">Label (Y₂)</p>
            <Form.Item name="labelY2">
              <Input
                onChange={(e) => onLabelChange("y2", e.target.value)}
                className="form-input"
                placeholder="Enter the label"
              />
            </Form.Item>

            <p className="form-input-label">Image (Y₂)</p>
            <Form.Item name="imageY2">
              <Input
                onChange={(e) => onImgUrlChange("y2", e.target.value)}
                className="form-input"
                placeholder="Enter image url"
              />
            </Form.Item>

            <p className="form-input-label">Attribution link (Y₂)</p>
            <Form.Item name="attributionY2">
              <Input
                onChange={(e) => onAttrLinkChange("y2", e.target.value)}
                className="form-input"
                placeholder="Enter link"
              />
            </Form.Item>
          </div>

          <div className="NewPuzzle-left-col-inputs-section">
            <p className="form-input-label">Label (Y₃)</p>
            <Form.Item name="labelY3">
              <Input
                onChange={(e) => onLabelChange("y3", e.target.value)}
                className="form-input"
                placeholder="Enter the label"
              />
            </Form.Item>

            <p className="form-input-label">Image (Y₃)</p>
            <Form.Item name="imageY3">
              <Input
                onChange={(e) => onImgUrlChange("y3", e.target.value)}
                className="form-input"
                placeholder="Enter image url"
              />
            </Form.Item>

            <p className="form-input-label">Attribution link (Y₃)</p>
            <Form.Item name="attributionY3">
              <Input
                onChange={(e) => onAttrLinkChange("y3", e.target.value)}
                className="form-input"
                placeholder="Enter link"
              />
            </Form.Item>
          </div>
        </Form>
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
