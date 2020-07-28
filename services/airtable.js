export class SimpleAirtableService {
  constructor(base) {
    this.base = require("airtable").base(base);
  }
  mapAll(fn) {
    const result = [];
    return this.base("dailies")
      .select({})
      .eachPage((records, next) => {
        for (let record of records) {
          result.push(fn(record));
        }
        next();
      })
      .then(() => result);
  }
}
