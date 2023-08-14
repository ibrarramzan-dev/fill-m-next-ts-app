"use client";

import { useState } from "react";
import Grid from "@/components/admin/Grid";
import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Upload } from "antd";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function NewPuzzle() {
  const [date, setDate] = useState(null);

  console.log(date);
  return (
    <section className="NewPuzzle">
      <div className="NewPuzzle-left-col">
        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Select Date</p>
          <DatePicker
            className="form-input"
            onChange={(date) => setDate(date)}
          />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (X₁)</p>
          <Input className="form-input" placeholder="Enter the label" />

          <p className="form-input-label">Image (X₁)</p>
          <Upload {...props}>
            <Button className="form-input" icon={<UploadOutlined />}>
              Select Image
            </Button>
          </Upload>

          <p className="form-input-label">Attribution link (X₁)</p>
          <Input className="form-input" placeholder="Enter link" />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (X₂)</p>
          <Input className="form-input" placeholder="Enter the label" />

          <p className="form-input-label">Image (X₂)</p>
          <Upload {...props}>
            <Button className="form-input" icon={<UploadOutlined />}>
              Select Image
            </Button>
          </Upload>

          <p className="form-input-label">Attribution link (X₂)</p>
          <Input className="form-input" placeholder="Enter link" />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (X₃)</p>
          <Input className="form-input" placeholder="Enter the label" />

          <p className="form-input-label">Image (X₃)</p>
          <Upload {...props}>
            <Button className="form-input" icon={<UploadOutlined />}>
              Select Image
            </Button>
          </Upload>

          <p className="form-input-label">Attribution link (X₃)</p>
          <Input className="form-input" placeholder="Enter link" />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (Y₁)</p>
          <Input className="form-input" placeholder="Enter the label" />

          <p className="form-input-label">Image (Y₁)</p>
          <Upload {...props}>
            <Button className="form-input" icon={<UploadOutlined />}>
              Select Image
            </Button>
          </Upload>

          <p className="form-input-label">Attribution link (Y₁)</p>
          <Input className="form-input" placeholder="Enter link" />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (Y₂)</p>
          <Input className="form-input" placeholder="Enter the label" />

          <p className="form-input-label">Image (Y₂)</p>
          <Upload {...props}>
            <Button className="form-input" icon={<UploadOutlined />}>
              Select Image
            </Button>
          </Upload>

          <p className="form-input-label">Attribution link (Y₂)</p>
          <Input className="form-input" placeholder="Enter link" />
        </div>

        <div className="NewPuzzle-left-col-inputs-section">
          <p className="form-input-label">Label (Y₃)</p>
          <Input className="form-input" placeholder="Enter the label" />

          <p className="form-input-label">Image (Y₃)</p>
          <Upload {...props}>
            <Button className="form-input" icon={<UploadOutlined />}>
              Select Image
            </Button>
          </Upload>

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
