const faunadb = require("faunadb");

// your secret hash
const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  if (req.method === "POST") {
    await client.query(
      q.Create(q.Collection("chat"), { data: { txt: req.body } })
    );
    res.status(201).json({ created: true });
    return;
  }
  try {
    const dbs = await client.query(
      q.Map(
        // iterate each item in result
        q.Paginate(
          // make paginatable
          q.Match(
            // query index
            q.Index("chat") // specify source
          )
        ),
        ref => q.Get(ref) // lookup each result by its reference
      )
    );
    // ok
    res.setHeader(
      "Cache-Control",
      "s-maxage=5, max-age=5, stale-while-revalidate, public"
    );
    res.status(200).json(dbs.data.map(msg => msg.data.txt));
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message });
  }
};
