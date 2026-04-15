import { db } from "../db";
import { UserInsert, users, UserSelect } from "../db/schema";

export async function createUser(data: UserInsert): Promise<UserSelect> {
  const [user] = await db.insert(users).values(data).returning();
  return user;
}

