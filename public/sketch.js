function setup() {
  // noCanvas();
  // const video = createCapture(VIDEO);
  // video.size(160, 120);
  let lat, lon;
  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
    const url = document.getElementById('url').value;
    const job_title = document.getElementById('mood2').value;
    const approute = document.getElementById('mood3').value;
    const company = document.getElementById('companyname').value;
    // video.loadPixels();
    // const image64 = video.canvas.toDataURL();
    const data = {  company, url, job_title, approute };  // last, lon, image64 removed.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
  });

  
}
