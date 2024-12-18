import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "ikzdi2ov",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01"
});
