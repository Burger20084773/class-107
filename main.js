function StartClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/R9auOcA6Z/model.json', modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}