async function generateImage(prompt: string) {
  const url = '/textToImage';

  const myHeaders = new Headers();
  myHeaders.append("secret", "rDv7[KpNGzwYTeQ~;d>*M@");
  myHeaders.append("Content-Type", "application/json");

  const body = {
    "prompt": prompt
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow"
    });

    if (response.ok) {
      const data = await response.json();
      const converted = await toDataURLPromise(data)
      return converted
    } else {
      console.error('Error:', await response.text());
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

function toDataURLPromise(answer: any) {
  return new Promise((resolve) => {
    toDataURL(answer, function (result: any) {
      resolve(result);
    });
  });
}

async function toDataURL(url: string, callback: any) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

export default generateImage;