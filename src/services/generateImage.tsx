async function generateImage(prompt: string) {
  const url = '/textToImage';

  const myHeaders = new Headers();
  myHeaders.append("secret", "rDv7[KpNGzwYTeQ~;d>*M@");
  myHeaders.append("Content-Type", "application/json");

  const body = {
    "prompt": prompt
  }

  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request timeout')), 300000) // 5 minute timeout
  );

  try {
    const response:any = await Promise.race([
      fetch(url, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
        redirect: "follow"
      }),
      timeout
    ]);

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
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Conversion timeout'));
    }, 300000); // 5 minute timeout

    toDataURL(answer, function (result: any) {
      clearTimeout(timeoutId);
      resolve(result);
    });
  });
}

async function toDataURL(url: string, callback: any) {
  var xhr = new XMLHttpRequest();
  xhr.timeout = 300000; // 5 minute timeout
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.ontimeout = function () {
    callback(new Error('XHR timeout'));
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

export default generateImage;