// Server-side Storyblok API
import StoryblokClient from 'storyblok-js-client';

const storyblokClient = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
});

export async function getStoryblokData(path, options = {}) {
  try {
    const response = await storyblokClient.get(path, {
      version: 'draft',
      ...options
    });
    return response.data;
  } catch (error) {
    console.error('Storyblok API Error:', error);
    throw error;
  }
}
