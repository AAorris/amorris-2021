import Head from "next/head";
import Link from "next/link";
import TodoRepository, { ago } from "repositories/todos";
import { SimpleAirtableService } from "services/airtable";
import { SimpleTodoistService } from "services/todoist";
import getHabits from "repositories/habits";
import getAllTodos from "repositories/todos";

function renderItem(item) {
  switch (typeof item) {
    case "boolean":
      // return <input type="checkbox" checked={item} className="m-1 block mx-auto" />
      return (
        <div
          className="bg-green-600 mx-auto"
          style={{ opacity: item ? 1 : 0, width: 24, height: 24 }}
        ></div>
      );
    case "string":
      return <span>{item}</span>;
    case "number":
      return (
        <div
          className={`bg-${
            item < 0.5 ? "pink" : item > 0.6 ? "green" : "gray"
          }-500 mx-auto`}
          style={{ opacity: item, width: 24, height: 24 }}
        ></div>
      );
    default:
      return <></>;
  }
}

function NowPage({ todos, habits, notes }) {
  const habitKeys = "6A 7A 8A 9A C1 C2 C3 W1 W2 W3 EX LV FT OD AL 1P 2P 3P YH YE YM YI".split(
    " "
  );
  console.log(habits);
  return (
    <main>
      <Head>
        <title>Todos | Aaron Morris </title>
      </Head>
      <table
        className="block dailies text-white my-3 py-3 px-1 mx-auto border-gray-700 border-t-2 border-b-2"
        style={{ width: "max-content" }}
      >
        <thead>
          <tr>
            <th className="text-left text-gray-600" colSpan="40">
              Hydration, sleep, exercise, and other daily things.
            </th>
          </tr>
          <tr className="text-gray-500">
            {habitKeys.map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((item) => (
            <tr key={item.Day}>
              {habitKeys.map((key) => {
                // console.log(item[key])
                // return <td key={key}>{habitKeys.length}</td>
                return (
                  <td key={key}>{item[key] && renderItem(item[key] || "")}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="text-sm text-gray-300 mx-auto border-b-2 border-gray-600"
        style={{ width: "64ch" }}
      >
        <p className="mb-3 text-gray-600">
          Latest from feed.amorris.ca/hallway.txt
        </p>
        {notes.map((item) => {
          const [timestamp, note] = item.split("\t");
          return (
            <p className="mb-3">
              <span className="text-gray-600">
                {ago(new Date(timestamp))} ago
              </span>
              <br />
              {note}
            </p>
          );
        })}
      </div>
      <div
        className="todos-outer text-sm text-white pt-3"
        style={{ width: "64ch" }}
      >
        <p className="mb-3 text-gray-600">Todos</p>
        {todos
          .sort((l, r) => Number(l.order) - Number(r.order))
          .map(({ id, order, content, completed, created, due }) => {
            return (
              <div className="todo-outer" key={id}>
                <div className="todo-inner">
                  <div className="checkbox-outer">
                    <input type="checkbox" value={completed} />
                  </div>
                  <div>
                    <span className="content">{content}</span>
                    <br />
                    <span className="created">
                      #{order} Created {ago(new Date(created).getTime())} ago
                    </span>
                    &nbsp;
                    <span className="due">
                      {due && `| Due within ${ago(new Date(due.date))}`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <style jsx>{`
        .todos-outer {
          width: max-content;
          max-width: 64ch;
          margin: auto;
        }
        .todo-inner {
          display: flex;
        }
        .checkbox-outer {
          display: block;
          width: 24px;
          height: 24px;
          margin-right: 1rem;
        }
        input[type="checkbox"] {
          width: 24px;
          height: 24px;
        }
        .content {
          font-weight: bold;
        }
        .created,
        .due {
          font-size: 12px;
          opacity: 0.53;
        }
        .todo-outer {
          padding-bottom: 1rem;
        }

        th {
          padding: 0;
          font-size: 15px;
          font-weight: 300;
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps() {
  let todos_ = getAllTodos(new SimpleTodoistService("2240435802"));
  let habits_ = getHabits(
    new SimpleAirtableService("appH7qQBbNHSgIx6Q", "dailies")
  );
  let notes_ = fetch("https://feed.amorris.ca/hallway.txt")
    .then((r) => r.text())
    .then((text) => text.split(/\n/).slice(0, 3));
  const [todos, habits, notes] = await Promise.all([todos_, habits_, notes_]);
  return { props: { todos, habits, notes }, unstable_revalidate: 10 };
}

export default NowPage;
