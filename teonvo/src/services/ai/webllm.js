import * as webllm from "@mlc-ai/web-llm";
import { getFallbackResponse } from './fallbackAI';
import { teonvoKnowledge } from '../../data/teonvoKnowledge';

let engine = null;
let isInitializing = false;

export const initAI = async (onProgress) => {
  if (engine) return engine;
  if (isInitializing) return null;
  isInitializing = true;

  try {
    if (!navigator.gpu) {
      console.warn("WebGPU not supported. Using instant local AI.");
      return null;
    }

    // Using a smaller model for faster loading (Qwen 2.5 0.5B is much faster than Llama 1B)
    engine = await webllm.CreateMLCEngine(
      "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
      {
        initProgressCallback: (report) => {
          if (onProgress) onProgress(report.text);
        }
      }
    );
    return engine;
  } catch (error) {
    console.error("WebLLM failed to load:", error);
    return null;
  } finally {
    isInitializing = false;
  }
};

export const askAI = async (messages) => {
  const lastMessage = messages[messages.length - 1].content;

  // If engine isn't ready, use fallback INSTANTLY
  if (!engine) {
    // Simulate a tiny delay for realism
    await new Promise(r => setTimeout(r, 500));
    return getFallbackResponse(lastMessage);
  }

  try {
    const systemPrompt = `You are TEONVO's AI assistant. Be concise and professional. Knowledge: ${teonvoKnowledge}`;
    
    const response = await engine.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.slice(-4) // Keep context window small for speed
      ],
      temperature: 0.6,
      max_tokens: 100, // Keep responses short for speed
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("AI Generation error:", error);
    return getFallbackResponse(lastMessage);
  }
};

