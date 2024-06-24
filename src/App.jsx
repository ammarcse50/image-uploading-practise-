import { useState } from "react";

import "./App.css";

function App() {
  const [image, setImage] = useState(""); // images always string

  const handleImg = (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    console.log(file);

    setImage(file);
  };
  const handleClick =e=>{
      
    document.getElementById('uploadIcon').addEventListener('click', function() {
      document.getElementById('fileInput').click();
    });

  }

  return (
    <>
      <div onClick={handleClick}>
        {image ? <img src={ URL.createObjectURL(image)} width={120} alt="" />:  <img id="uploadIcon"  src={'/upload.png'}/>}

      </div>

      <form action="">
        <input type="file" id="fileInput" onChange={handleImg} />
      </form>

      <h3>Image Posts</h3>
    </>
  );
}

export default App;
