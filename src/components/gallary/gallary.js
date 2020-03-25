// import React from 'react';
// import Dropzone from 'react-dropzone';
// import superagent from 'superagent';

// const CLOUDINARY_UPLOAD_PRESET = 'your_upload_preset_id';
// const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_URL;


// class Gallary extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       uploadedFileCloudinaryUrl: ''
//     }}


//     onImageDrop(files) {
//       this.setState({
//         uploadedFile: files[0]
//       });
  
//       this.handleImageUpload(files[0]);
//     }
    
//   handleImageUpload(file) {
//     let upload = superagent.post(CLOUDINARY_UPLOAD_URL)
//                         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
//                         .field('file', file);

//     upload.end((err, response) => {
//       if (err) {
//         console.error(err);
//       }

//       if (response.body.secure_url !== '') {
//         this.setState({
//           uploadedFileCloudinaryUrl: response.body.secure_url
//         });
//       }
//     });
//   }


//   render() {
// return(
//   <>
  
//   <Dropzone
//   onDrop={() => this.onImageDrop.bind(this)}
//   accept="image/*"
//   multiple={false}>
//     {({getRootProps, getInputProps}) => {
//       return (
//         <div
//           {...getRootProps()}
//         >
//           <input {...getInputProps()} />
//           {
//           <p>Try dropping some files here, or click to select files to upload.</p>
//           }
//         </div>
//       )
//   }}

  
// </Dropzone>
// <div>
     

//       <div>
//         {this.state.uploadedFileCloudinaryUrl === '' ? null :
//         <div>
//           <p>{this.state.uploadedFile.name} {console.log('eeeeeeeee',this.state.uploadedFileCloudinaryUrl)
//           }</p>
//           <img src={this.state.uploadedFileCloudinaryUrl} />
//         </div>}
//       </div>
//     </div>

// </>
// )
//   }

// }

import React, {useState, useEffect} from 'react';
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "./CloudinaryService.js";
// import './App.css';

function Gallary() {
  const [images, setImages] = useState([])

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "dus3du5fr",
      tags: [tag, 'anImage'],
      uploadPreset: "jordan-explorer"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if(photos.event === 'success'){
          
          setImages([...images, photos.info.url])
          console.log('mmmmmmmmmm', photos.info.url);
        }
      } else {
        console.log(error);
      }
    })
  }

  useEffect( () => {
    fetchPhotos("image", setImages);
  }, [])

  return (
   <CloudinaryContext cloudName="dus3du5fr">
      <div className="App">
        <button onClick={() => beginUpload("image")}>Upload Image</button>
      {/* <section>
        {console.log('gggggggggggg', images)}
        {images.map(i => <Image
              key={i}
              publicId={i}
              fetch-format="auto"
              quality="auto"
            />)}
      </section> */}
    </div>
   </CloudinaryContext>
  );
}





export default Gallary