"use client";

import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export { getStoryblokApi };
