Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri + '">';
    })
}

console.log("ml5 version:", ml5.version);

classifier = ml5.classify("https://teachablemachine.withgoogle.com/models/dd9TvXH-1/",model_loaded());

function model_loaded(){
    console.log("model loaded");
}

function speak(){
    var synth= window.speechSynthesis;
    var speak_data_1 = "the first pridictiction is"+ Prediction_1;
    var speak_data_2 = "and the second pridictiction is"+ Prediction_2; 
    var utter_this= new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utter_this);
}