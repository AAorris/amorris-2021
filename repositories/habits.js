import { SimpleAirtableService } from "services/airtable";

export default async function getHabits(habitService) {
  const service = new SimpleAirtableService("appH7qQBbNHSgIx6Q");
  return await service.mapAll((record) => record.fields);
}
