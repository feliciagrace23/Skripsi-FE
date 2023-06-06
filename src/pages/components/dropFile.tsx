import React, { useState, useEffect} from "react";
import { DropzoneArea } from "material-ui-dropzone";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Box, Button } from "@material-ui/core";
import Image from "../../../public/img_pref/2Dsample.jpg";

// import axios from 'axios';
// import {failedToast, successToast} from "@helper";
// import sample from "../../../public/img_pref/2Dsample.jpg";


import styles from "src/styles/Home.module.css";
import { Stack } from "@mui/material";

interface FileObject {
  file: File;
  url: string;
  naturalWidth: number;
  naturalHeight: number;
}

type FileObjectResponse = {
  data: string;
  sizes: any[];
  naturalWidth: number;
  naturalHeight: number;
};

function MyDropzone() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<FileObject[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [segmen, setSegmen] = useState<FileObjectResponse[]>([]);

  const handleDrop = (newFiles: File[]) => {
    const fileObjects = newFiles.map((file) => ({
      file: file,
      url: URL.createObjectURL(file),
      naturalWidth: 0,
      naturalHeight: 0,
    }));
    setFiles([...files, ...newFiles]);
    setUploadedFiles([...uploadedFiles, ...fileObjects]);
  };

  function sendData(data :any) {
    setSegmen( [
      ...segmen,
      {
        ...data,
        naturalWidth: 0,
        naturalHeight: 0
      }
    ]);
  }

  function getRealTime() {
    var currentTime = new Date();
    var options = { hour12: false };
    var currentTimeString = currentTime.toLocaleTimeString("en-US", options);
    return currentTimeString;
  }

  const handleButtonClick = async() => {
    console.log(getRealTime(), "Data Uploaded");
    const formData = new FormData();
    formData.append('file', files[0])

    fetch('http://localhost:5000/segmentation/predict/mrcnn', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      method: 'POST',
      body: formData,
    })
      .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json()
      })
      .then(data => {
        sendData(data);
        console.log(data);
        console.log(getRealTime(), "Data Response");
      setIsSubmitted(true);
      })
      .catch(error => {
        console.error('There was a problem with the file processing:', error);
      });
  };


  return (
    <div className={styles.box_drop}>
    <p className={styles.font_normal}> Drop your Pict: </p>
      <DropzoneArea
        acceptedFiles={["image/*"]}
        dropzoneText="Drag and drop a file here or click"
        filesLimit={10}
        onDrop={handleDrop}
      />

<a href={Image.src} download>
  <u className={styles.font_normal}>Download Sample Pict</u>
</a>
      
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        className={styles.btn_submit}
      >
        Submit
      </Button>
      {isSubmitted && segmen.length > 0 && (
        <div>
          <br />
          <h3 className={styles.font_normal}>Uploaded files:</h3>
          <br/>
        <div style={{ textAlign: 'center' }}> 
          <ul >
            {segmen.map((fileObject, index) => (
              <li key={index}>
                <Stack direction="row" spacing={8}> 
                <img src={fileObject.data} alt="Image" className={styles.img_result}/>
                <Box className={styles.size_result}>
                  <p className={styles.font_normal}> Hasil Perhitungan (pixel) </p>
                  {fileObject.sizes.map((data) => (
                    <p key={data} className={styles.font_normal}> {data[0]} : {data[1]} {data[2]} </p>
                  ))}
                </Box>
                </Stack>
                <br />
              </li>
            
            ))}
          </ul></div>
        </div>
      )}
    </div>
  );
}

export default MyDropzone;


// https://rapidapi.com/guides/how-to-use-fetch-api-in-next-js

