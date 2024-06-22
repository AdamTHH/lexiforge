async function generateImage(prompt: string) {
    console.log("generating image: " + prompt);
    const myHeaders = new Headers();
    myHeaders.append("apikey", "XZ_aB9QwhsxSWqMiuqn4tw");
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      "prompt": prompt,
      "params": {
        "sampler_name": "k_euler",
        "cfg_scale": 5,
        "denoising_strength": 1,
        "height": 512,
        "width": 512,
        "seed_variation": 1,
        "karras": false,
        "tiling": false,
        "hires_fix": false,
        "clip_skip": 1,
        "return_control_map": false,
        "steps": 25,
        "n": 1
      },
      "nsfw": true,
      "trusted_workers": false,
      "slow_workers": true,
      "censor_nsfw": false,
      "worker_blacklist": false,
      "models": [
        "Deliberate"
      ],
    });
  
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
  
    let sendRequest:any;
    try {
      sendRequest = await fetch("https://stablehorde.net/api/v2/generate/async", requestOptions)
    }
    catch {
      console.log("Error while fetching StableHorde")
      return "error"
    }
  
    if (!sendRequest.ok) {
      console.log("Error while fetching StableHorde")
      return "error"
    }
  
    const data = await sendRequest.json();
    console.log(data)
  
    const answer = await listenOnRequest(data.id)
  
    console.log("FINALLY:", answer)
  
    if (answer == "error")
      return "error"
  
    const converted = await toDataURLPromise(answer)
    return converted
  }
  
  async function listenOnRequest(id: string) {
    const statusUrl = `https://stablehorde.net/api/v2/generate/status/${id}`;
  
    try {
      const response = await fetch(statusUrl);
      const data = await response.json();
  
      if (data.finished === 0) {
        // Generation is not finished yet
        console.log('Generating - WAIT TIME: ' + data.wait_time + "s");
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 5000));
  
        const retry: any = await listenOnRequest(id)
        return retry
      } else {
        // Generation is finished
        const imageUrl = data.generations[0].img;
        return imageUrl;
      }
    } catch (error) {
      console.error('Error checking generation status:', error);
      return "error"
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