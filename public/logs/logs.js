getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('p');
    const url = document.createElement('div');
    const company = document.createElement('div');
    const job_title = document.createElement('div');
    const app_date = document.createElement('div');
    const date = document.createElement('div');

    url.textContent = `Job url: ${item.url}`;
    company.textContent = `Company:${item.company}`;
    job_title.textContent = `Job Title: ${item.job_title}`;
    const dateString = new Date(item.timestamp).toLocaleString();
    app_date.textContent = dateString;

    root.append(job_title, company, url, app_date );
    document.body.append(root);
  }
  console.log(data);
}
