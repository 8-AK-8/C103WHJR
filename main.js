Webcam.set({
  height: 300,
  width: 400,
  dest_height: 300,
  dest_width:400,
  image_format: "png",
  png_quality: 90,
  });
  
  Webcam.attach('#div_webcam')
  
  function take_snapshot(){
    Webcam.snap(function(data_uri){
      document.getElementById("div_image").innerHTML = '<img id="img_capture" src="'+data_uri+'">'
    });
  }
  
  
  console.log('ml5 version:', ml5.version);
  
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AKjFdM2eF/model.json', modelLoaded)
  
  function modelLoaded(){
    console.log('Model Loaded!')
  }
  
  function check(){
    img = document.getElementById('img_capture')
    classifier.classify(img, gotResults);
  }
  
  function gotResults(error, results){
  if(error){
    console.log(error);
  }
  else{
    console.log(results);
    document.getElementById('h3_object').innerHTML = results[0].label;
    document.getElementById('h3_accuracy').innerHTML = (results[0].confidence*100).toFixed(3)+"%";
  
  }
  }