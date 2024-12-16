export const convertTextToSpeech = async (voiceId: string, text: string): Promise<string> => {
    const API_URL = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
    const API_KEY = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;

    if (!API_KEY) {
        throw new Error('API key is missing. Please set NEXT_PUBLIC_ELEVENLABS_API_KEY in your environment variables.');
    }

    const requestBody = {
        text,
        model_id: 'eleven_multilingual_v1', // Replace with desired model
        voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5,
        },
    };

    const headers = {
        'Content-Type': 'application/json',
        'xi-api-key': API_KEY,
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${errorData?.detail || response.statusText}`);
        }

        const audioBlob = await response.blob();
        return URL.createObjectURL(audioBlob);
    } catch (error) {
        console.error('Error in convertTextToSpeech:', error);
        throw error;
    }
};
