function setup() {
  
  const button = document.getElementById('submit');
  console.log(button)
  button.addEventListener('click', async event => {
    console.log('trying event');
    const url = document.getElementById('url').value;
    const job_title = document.getElementById('mood2').value;
    const approute = document.getElementById('mood3').value;
    const company = document.getElementById('companyname').value;
    const data = {  company, url, job_title, approute };  
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
    document.getElementById('success').textContent = job_title + " added!"
  });  
}

console.log('js initiated'); 