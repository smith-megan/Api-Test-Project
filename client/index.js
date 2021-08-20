document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:5000/api/compliment/")
      .then(function (response) {
        const data = response.data;
        let compliment=document.getElementById('compliment')
        compliment.textContent=data
      });
};

document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:5000/api/fortune/")
      .then(function (response) {
        const fortuneData = response.data;
        let fortune=document.getElementById('fortune')
        fortune.textContent=fortuneData
      });
};
document.getElementById("punButton").onclick = function () {
  axios.get("http://localhost:5000/api/pun/")
      .then(function (response) {
        const punData = response.data;
        let pun=document.getElementById('pun')
        pun.textContent=punData
      });
};

document.getElementById("rateGood").onclick=function () {
  let answer=document.getElementById('answer')
        answer.textContent="Keep it up!"
        let imgTag=document.createElement('img')
        imgTag.src="explode.png"
        imgTag.classList="rateImg"
        answer.append(imgTag)
}
document.getElementById("rateMeh").onclick=function () {
  let answer=document.getElementById('answer')
        answer.textContent="Try your best to make it a better day!"
        let imgTag=document.createElement('img')
        imgTag.src="rain.png"
        imgTag.classList="rateImg"
        answer.append(imgTag)
}
document.getElementById("rateBad").onclick=function () {
  let answer=document.getElementById('answer')
        answer.textContent="It's okay, things can get better."
        let imgTag=document.createElement('img')
        imgTag.src="wish.png"
        imgTag.classList="rateImg"
        answer.append(imgTag)
}

document.getElementById("spaceButton").onclick = function () {
  let day = Math.floor(Math.random() * 30) + 1
  let month =Math.floor(Math.random() * 12) +1
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-${month}-${day}`)
      .then(function (response) {
        const spaceData = response.data.hdurl;
        let space=document.createElement('img')
        space.src=spaceData
        space.classList="space"
        let perspective=document.getElementById('perspective')
        perspective.append(space)
      });
};