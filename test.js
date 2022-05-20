let imgElement = document.getElementById("imageSrc")
let inputElement = document.getElementById("fileInput");
inputElement.addEventListener("change", (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

imgElement.onload = function () {
  makeImageVariation();
  // let mat = cv.imread(imgElement);
  // cv.imshow('canvasOutput', mat);
  // mat.delete();
};

function onOpenCvReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}

function makeImageVariation() {
  const src = cv.imread(imgElement);
  const img = new cv.Mat();
  const low = new cv.Mat(src.rows, src.cols, src.type(), [190, 190, 190, 190]);
  const high = new cv.Mat(src.rows, src.cols, src.type(), [255, 255, 255, 255]);
  // cv.cvtColor(src, img, cv.COLOR_BGR2RGB)
  // console.log(cv.split(img));

  const mask = new cv.Mat();
  cv.inRange(src, low, high, mask);
  console.log(img)
  console.log(mask)
  img[mask != 255] = (255, 0, 0)
  cv.imshow('canvasOutput', img);
}