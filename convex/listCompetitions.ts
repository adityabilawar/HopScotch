import { query } from "./_generated/server";

export default query(async ({ db }) => {
    return await db.table("competitions").order("desc").collect();
});
