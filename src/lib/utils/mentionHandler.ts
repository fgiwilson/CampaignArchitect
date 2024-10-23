import { World, Campaign, Secret } from '../models/models';

// ... existing imports and setup ...

async function handleMention(mentionType: string, mentionData: any): Promise<void> {
  try {
    switch (mentionType.toLowerCase()) {
      case 'world':
        await World.create(mentionData);
        break;
      case 'campaign':
        await Campaign.create(mentionData);
        break;
      case 'secret':
        await Secret.create(mentionData);
        break;
      // ... Add cases for other models ...
      default:
        console.log(`Unknown mention type: ${mentionType}`);
    }
    console.log(`Created new ${mentionType} record`);
  } catch (error) {
    console.error(`Error creating ${mentionType} record:`, error);
  }
}

// Function to parse text and extract mentions
function parseMentions(text: string): void {
  const mentionRegex = /@(\w+)\{([^}]+)\}/g;
  let match;

  while ((match = mentionRegex.exec(text)) !== null) {
    const [, mentionType, mentionDataString] = match;
    try {
      const mentionData = JSON.parse(mentionDataString);
      handleMention(mentionType, mentionData);
    } catch (error) {
      console.error(`Error parsing mention data for ${mentionType}:`, error);
    }
  }
}

// Example usage
const sampleText = "Create a new world @world{\"name\":\"Eldoria\", \"mainDesc\":\"A magical realm\"} and a campaign @campaign{\"name\":\"The Lost Artifacts\", \"world\":\"60a1234b5678c90defghijkl\"}";
parseMentions(sampleText);

// ... rest of your code ...