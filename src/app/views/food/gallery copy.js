import React from "react";
import Gallerys from "react-photo-gallery";

const photo = [
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  
];

const Content = {
  height: "700px",
  display: "inline-flex",
  float: "left",
  width: "auto",
  overflowX: "scroll",
  img: {
    borderRadius: "30px"
  }
};
function Picture() {
  
    return (
      <div className="flex space-x-3 overflow-y-scroll scrollbar-hide p-3 -ml-3">
        <Gallerys direction={"row"} margin={40} photos={photo} />
      </div>
    );

}

export default Picture;
