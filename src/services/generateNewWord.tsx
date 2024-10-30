

export default async function generateNewWord(prompt: string) {

    const url = '/claude';

    const headers = {
        'secret': "rDv7[KpNGzwYTeQ~;d>*M@"
    };
    const body = {
        "prompt":prompt
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });
        
        if (response.ok) {
            const data = await response.json();
            const jsonString = "{" + data.content[0].text;
            return JSON.parse(jsonString);
        } else {
            console.error('Error:', await response.text());
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}