export default async function generateNewWord(prompt:string) {

    const url = 'https://thingproxy.freeboard.io/fetch/https://api.anthropic.com/v1/messages';
    //dev: https://thingproxy.freeboard.io/fetch/https://api.anthropic.com/v1/messages

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "",
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: 'claude-3-haiku-20240307',
            max_tokens: 1024,
            system: "Your job is to combine the given words into a third element. This should be either a real life object or something made up based on those 2 words. You must not concatenate the words ('A+B' must not equal 'AB'). Generate Stable Diffusion prompt based on the new word (max 20 words). Reply ONLY with a JSON like:\"\n{\"newWord\":\"\",\"isARealWord\": true/false,\"sdprompt\":\"\"}\n\"",
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ]
        })
    })

    if (!response.ok) {
        throw new Error('An error happened while fetching Claude');
    }
    
    const data = await response.json();
    return data;
}