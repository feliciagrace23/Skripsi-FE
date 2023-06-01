import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Button } from "@material-ui/core";

function MyDropzone() {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (newFiles: File[]) => {
    setFiles([...files, ...newFiles]);
  };

  const handleButtonClick = () => {
    console.log("hhh");
    console.log(files);
  };

  return (
    <div>
      <DropzoneArea
        acceptedFiles={["image/*"]}
        dropzoneText="Drag and drop a file here or click"
        filesLimit={10}
        onDrop={handleDrop}
      />

      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Submit
      </Button>
    </div>
  );
}

export default MyDropzone;
