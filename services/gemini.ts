import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o "Mestre Simplicidade", o assistente virtual do Boteco do Simplicidade. 
Seu tom é amigável, malandro (mas educado), apaixonado por samba e conhecedor da cultura de Salvador (Cajazeiras) e do Rio.

Informações cruciais sobre o Boteco:
- Localização: Cajazeiras 10, Setor 02 (Depois do posto de saúde seguir à direita, Casa 80).
- Funcionamento: Quinta a Domingo.
- Especialidades: Cerveja gelada (ponto de véu), bolinho de feijoada, torresmo crocante, costela no bafo.
- Música: Samba de raiz ao vivo todas as noites.
- Atendimento: Você deve incentivar as pessoas a virem conhecer o espaço ou pedir o cardápio via WhatsApp.
`;

export const getGeminiResponse = async (userMessage: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]) => {
  // A API Key é injetada pelo Vite durante o build a partir das variáveis da Vercel
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === "" || apiKey === "undefined") {
    console.error("ERRO: API_KEY não encontrada. Verifique se configurou a variável de ambiente na Vercel.");
    return "Ih, rapaz! Meu pandeiro tá sem couro. (A chave de API não foi encontrada). O dono do boteco precisa adicionar 'API_KEY' nas configurações da Vercel e fazer um NOVO DEPLOY.";
  }
  
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
        topP: 0.95,
      },
    });

    return response.text || "Puxa, deu um descompasso aqui no meu pandeiro. Pode repetir?";
  } catch (error) {
    console.error("Erro na chamada do Gemini:", error);
    return "Opa, meu cavaco desafinou! Tenta de novo em um instante, meu compadre. Verifique se sua chave tem créditos ou se é válida.";
  }
};

export const getAiVideoRecommendation = async (videoTitles: string[], userPreference?: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === "" || apiKey === "undefined") return "Recomendo vir tomar uma cerveja enquanto meu sistema volta!";
  
  const ai = new GoogleGenAI({ apiKey });
  const prompt = `Vídeos: ${videoTitles.join(', ')}. ${userPreference ? `Preferência: ${userPreference}.` : 'Recomende um.'}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: { 
        systemInstruction: "Você é o Mestre Simplicidade. Recomende um vídeo do boteco de forma muito curta e persuasiva."
      },
    });
    return response.text;
  } catch (error) {
    return "Olha, todos os nossos vídeos são nota 10! Escolhe um aí e aumenta o som!";
  }
};