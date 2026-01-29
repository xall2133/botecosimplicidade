import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o "Mestre Simplicidade", o assistente virtual do Boteco do Simplicidade. 
Seu tom é amigável, malandro (mas educado), apaixonado por samba e conhecedor da cultura carioca.

Informações sobre o Boteco:
- Localização: Cajazeiras 10, Setor 02 (Depois do posto de saúde seguir à direita, Casa 80).
- Funcionamento: Quinta a Domingo.
- Especialidades: Cerveja gelada (ponto de véu), bolinho de feijoada, torresmo crocante, costela no bafo.
- Música: Samba de raiz ao vivo todas as noites.
`;

export const getGeminiResponse = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]) => {
  // A inicialização deve ocorrer dentro da chamada para garantir que a chave esteja disponível no runtime do navegador
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "Estou sem voz agora (API Key ausente). Tenta mais tarde!";
  
  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });

    return response.text || "Puxa, deu um descompasso aqui no meu pandeiro. Pode repetir?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Opa, meu cavaco desafinou! Tenta de novo em um instante.";
  }
};

export const getAiVideoRecommendation = async (videoTitles: string[], userPreference?: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "Recomendo vir tomar uma cerveja enquanto meu sistema volta!";
  
  const ai = new GoogleGenAI({ apiKey });
  const prompt = `Aqui estão os títulos dos vídeos disponíveis: ${videoTitles.join(', ')}. ${userPreference ? `O usuário prefere algo tipo: ${userPreference}.` : 'Recomende o melhor vídeo para quem gosta de um bom samba e boteco.'} Responda apenas com a recomendação em 2 frases no estilo do Mestre Simplicidade.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: { 
        systemInstruction: SYSTEM_INSTRUCTION + "\nTarefa específica: Recomendar um vídeo de forma persuasiva."
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Recommendation Error:", error);
    return "Olha, todos são nota 10, mas escolhe o primeiro que é sucesso!";
  }
};