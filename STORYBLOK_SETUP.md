# Storyblok Setup Guide for HeroBanner Component

## 1. Create a HeroBanner Content Type

In your Storyblok space, create a new content type called "Hero Banner" with the following fields:

### Field Configuration:

1. **Title** (Text field)
   - Name: `title`
   - Required: Yes
   - Default: "Discover Amazing"

2. **Subtitle** (Text field)
   - Name: `subtitle`
   - Required: Yes
   - Default: "Destinations"

3. **Description** (Textarea field)
   - Name: `description`
   - Required: Yes
   - Default: "Embark on unforgettable journeys to the world's most beautiful places. From tropical paradises to mountain adventures, we've got your perfect escape."

4. **Primary Button Text** (Text field)
   - Name: `primary_button_text`
   - Required: Yes
   - Default: "Explore Tours"

5. **Primary Button Link** (Link field)
   - Name: `primary_button_link`
   - Required: Yes
   - Default: "/tours"

6. **Secondary Button Text** (Text field)
   - Name: `secondary_button_text`
   - Required: Yes
   - Default: "Learn More"

7. **Secondary Button Link** (Link field)
   - Name: `secondary_button_link`
   - Required: Yes
   - Default: "#about"

8. **Background Image** (Asset field)
   - Name: `background_image`
   - Required: No
   - Allowed file types: Images only

## 2. Create a Hero Banner Story

1. Go to "Content" in your Storyblok space
2. Click "Create new" → "Hero Banner"
3. Fill in the content with your desired values
4. Save and publish the story
5. Note the story slug (should be "hero-banner" or update the code accordingly)

## 3. Environment Variables

Make sure you have your Storyblok access token set in your environment variables:

```bash
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_access_token_here
```

## 4. Testing

The component will now:
- Fetch data from your Storyblok space
- Display the content dynamically
- Fall back to default values if the data is not available
- Support background images with overlay

## 5. Content Management

You can now manage your hero banner content directly from Storyblok:
- Change text content
- Update button links
- Add/change background images
- All changes will be reflected on your website

## 6. Production Considerations

For production, change the version from 'draft' to 'published' in the `getHeroBannerData` function:

```typescript
const { data } = await storyblokApi.get('cdn/stories/hero-banner', {
  version: 'published', // Changed from 'draft'
});
```
