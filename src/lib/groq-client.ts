import Groq from "groq-sdk";

type GroqMessage = {
  role: 'system' | 'user' | 'assistant',
  content: string | Array<
    | { type: 'text', text: string }
    | { type: 'image_url', image_url: { url: string } }
  >
};

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

// Mock database of freelance technicians (in real app, use a real database)
const technicians = {
  refrigerator: [
    { name: "John Appliance Pro", contact: "john@fixit.com", rating: "4.9", expertise: "Refrigerators & Freezers" },
  ],
  washingMachine: [
    { name: "Sarah Washer Expert", contact: "sarah@fixit.com", rating: "4.8", expertise: "Washing Machines & Dryers" },
  ],
  oven: [
    { name: "Mike Oven Specialist", contact: "mike@fixit.com", rating: "4.7", expertise: "Ovens & Stoves" },
  ],
};

export async function groqy(userQuery: string, imageBase64?: string) {
  try {
    const userContent: Array<
      | { type: 'text', text: string }
      | { type: 'image_url', image_url: { url: string } }
    > = [];

    if (userQuery) {
      userContent.push({ type: "text", text: userQuery });
    }

    if (imageBase64 && imageBase64.trim().length > 0) {
      userContent.push({
        type: "image_url",
        image_url: {
          url: `data:image/jpeg;base64,${imageBase64}`
        }
      });
    } else if (imageBase64) {
      console.error("Invalid image input: Base64 string is empty or corrupted.");
    }

    // Only include system message if there is NO image
    const messages: GroqMessage[] = imageBase64
      ? [{ role: "user", content: userContent }]
      : [
          {
            role: "system",
            content: `Analyze appliance issues from text and images. Follow this JSON format:
            {
              "applianceType": "...", 
              "problemDescription": "...",
              "possibleCauses": ["..."],
              "solutions": ["..."],
              "needsTechnician": boolean
            }`
          },
          { role: "user", content: userContent }
        ];

    const model = imageBase64 ? "llama-3.2-11b-vision-preview" : "llama-3.3-70b-versatile";
    console.log("Using Groq model:", model);

    const response = await groq.chat.completions.create({
      messages: messages as any, // Temporary workaround for SDK type issues
      model: model,
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 1024
    });

    console.log("Raw API Response:", JSON.stringify(response, null, 2));

    const parsed = parseResponse(response);
    return formatResponse(parsed);
  } catch (error) {
    console.error("Groq API Error:", error);
    throw new Error("Something went wrong while processing your request.");
  }
}

// Helper function to parse API response safely
function parseResponse(response) {
  try {
    const message = response?.choices?.[0]?.message?.content;
    if (!message) {
      throw new Error("Empty response from API.");
    }
    return JSON.parse(message);
  } catch (e) {
    console.error("Failed to parse JSON response:", e, response);
    return { error: "Failed to parse repair analysis. Please try again." };
  }
}

// Function to find a technician based on appliance type
function findTechnician(applianceType) {
  const category = applianceType.toLowerCase().replace(/\s+/g, '');
  return technicians[category]?.[0]; // Returns first matching technician
}

// Function to format response in a user-friendly way
function formatResponse(response) {
  if (response.error) {
    return `❌ Error: ${response.error}`;
  }

  let formatted = `🔧 ${response.applianceType} Issue\n`;
  formatted += `📝 ${response.problemDescription}\n\n`;
  formatted += "Possible Causes:\n" + response.possibleCauses.map(c => `• ${c}`).join('\n');
  formatted += "\n\nSuggested Fixes:\n" + response.solutions.map(s => `✓ ${s}`).join('\n');
  
  if (response.needsTechnician) {
    formatted += "\n\n🚨 Professional Help Recommended";
    const technician = findTechnician(response.applianceType);
    if (technician) {
      formatted += `\n👨‍🔧 Contact: ${technician.name} (${technician.expertise}) - 📧 ${technician.contact} (⭐ ${technician.rating})`;
    }
  }
  
  return formatted;
}

export default groqy;
