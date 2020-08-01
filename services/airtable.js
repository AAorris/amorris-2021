export class SimpleAirtableService {
  constructor(base, table) {
    this.base = require("airtable").base(base)(table);
  }
  mapAll(fn) {
    const result = [];
    return this.base
      .select({})
      .eachPage((records, next) => {
        for (let record of records) {
          result.push(fn(record));
        }
        next();
      })
      .then(() => result);
  }
  selectAllFields() {
    return this.mapAll((item) => item.fields);
  }
}
