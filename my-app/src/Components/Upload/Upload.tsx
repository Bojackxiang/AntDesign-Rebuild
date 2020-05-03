import React, { useEffect, useRef, ChangeEvent, useState } from "react";
import axios from "axios";

interface UploadProps {
  action: string;
  beforeUpload?: (file: File) => boolean | Promise<File>; // 在每次上传之前要进行的操作
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
}

const Upload: React.FC<UploadProps> = (props) => {
  const { action, beforeUpload, onProgress, onSuccess, onError } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [Percentage, setPercentage] = useState<Number>(0)

  const _onClickHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const _fileChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    uploadFile(files);

    if (inputRef.current !== null) {
      inputRef.current.value = "";
    }
  };

  const uploadFile = (file: FileList) => {
    const postFiles = Array.from(file);
    const readyToPostFiles = postFiles[0]
    if(beforeUpload){
      beforeUpload(readyToPostFiles);
    }
    post(readyToPostFiles)
  };

  const post = (file: File) => {
    axios
      .post(action, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          console.log(`Percentage: ${(e.loaded * 100) / e.total} loaded ...`);
          setPercentage((prevState) => {
            const newPercentage = e.loaded * 100 / e.total
            console.log('prevState is ', prevState, 'current is ', newPercentage);
            return newPercentage;
          })
        }
      })
      .then((resp) => {
        if (onSuccess) {
          onSuccess(resp.data, file);
        }
        console.log(resp.data, file);
      })
      .catch((ex) => console.log(ex.message));
  };

  return (
    <div>
      <p>uploading percentage {Percentage}</p>
      <button onClick={_onClickHandler}>uploading</button>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={(e) => {
          _fileChangeHandler(e);
        }}
      />
    </div>
  );
};

export default Upload;
