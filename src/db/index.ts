import { drizzle } from "drizzle-orm/node-postgres";

// importar los schemas
import * as authSchema from "./schema/auth";
import * as communitiesSchema from "./schema/community";

// importar las relaciones
import * as relations from "./relations";

const schema = { ...authSchema, ...communitiesSchema, ...relations };

export const db = drizzle(process.env.DATABASE_URL!, {
  schema,
});
