// lib/storyblok.js
"use client";

import { apiPlugin, storyblokInit } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export function getStoryblokApi() {
  const { getStoryblokApi } = require("@storyblok/react");
  return getStoryblokApi();
}
