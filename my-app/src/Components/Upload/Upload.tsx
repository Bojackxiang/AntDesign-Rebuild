import React, { useEffect, useRef, ChangeEvent } from "react";
import axios from "axios";

interface UploadProps {
  action: string;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
}

const Upload: React.FC<UploadProps> = (props) => {
  const { action, onProgress, onSuccess, onError } = props;

  const inputRef = useRef<HTMLInputElement>(null);

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
    postFiles.forEach((file) => {
      let fd = new FormData();
      fd.append(file.name, file);
      axios
        .post(action, fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (e) => {
            console.log(`Percentage: ${e.loaded * 100 / e.total} loaded ...`)
          },
        })
        .then((resp) => {
          if (onSuccess) {
            onSuccess(resp.data, file);
          }
          console.log(resp.data, file)
        })
        .catch((ex) => console.log(ex.message));
    });
  };

  return (
    <div>
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
