import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    BETTER_AUTH_SECRET: z.string().min(32).max(128),
    BETTER_AUTH_URL: z.url(),
    GOOGLE_CLIENT_SECRET: z.string().min(32).max(128),
  },

  client: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.url(),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
});
