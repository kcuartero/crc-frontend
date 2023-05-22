updateVisitorCount();

async function updateVisitorCount() {
  try {
    const response = await fetch('https://kcuartero-gw-5u3b1jgg.uc.gateway.dev/count');
    const data = await response.json();
    console.log(data);
    document.getElementById('count').innerHTML = data.count;
  } catch (error) {
    console.error(error);
  }
}