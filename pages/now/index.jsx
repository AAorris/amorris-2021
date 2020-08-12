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
      if (item === true) {
        return (
          <span
            className="bg-green-600 text-green-600 mx-auto block"
            style={{ width: 24, height: 24 }}
          >
            &nbsp;x&nbsp;
          </span>
        );
      } else {
        return (
          <span
            className="bg-gray-900 mx-auto block"
            style={{ width: 24, height: 24 }}
          >
            &nbsp;&nbsp;&nbsp;
          </span>
        );
      }
    case "string":
      return <span>{item}</span>;
    case "number":
      return (
        <code
          className="bg-green-500 text-green-500 block"
          style={{
            opacity: item,
            width: 24,
            height: 24,
          }}
        >
          &nbsp;{Math.floor(item * 10)}&nbsp;
        </code>
      );
    default:
      return <></>;
  }
}

function Table({ habits }) {
  const habitKeys = "6A 7A 8A 9A C1 C2 C3 W1 W2 W3 EX LV FT OD AL 1P 2P 3P YH YE YM YI".split(
    " "
  );
  return (
    <pre
      className="block dailies text-white my-3 py-3 px-1 mx-auto"
      style={{ width: "max-content" }}
    >
      <div>
        <div>
          <div className="text-left text-gray-600" colSpan="40">
            Hydration, sleep, exercise, and other daily things.
          </div>
        </div>
        <div className="text-gray-500">
          {habitKeys.map((name) => (
            <code key={name}>{name}&nbsp;</code>
          ))}
        </div>
      </div>
      <section>
        {habits.map((item) => (
          <div key={item.Day}>
            {habitKeys.map((key) => {
              return (
                <span
                  key={key}
                  style={{ width: "3ch", display: "inline-block" }}
                >
                  {renderItem(item[key] || false)}
                </span>
              );
            })}
          </div>
        ))}
      </section>
    </pre>
  );
}

function NowPage({ todos, habits, notes }) {
  return (
    <main>
      <Head>
        <title>Todos | Aaron Morris </title>
      </Head>
      <Table habits={habits} />
      <hr />
      <div className="text-sm text-gray-300 mx-auto" style={{ width: "64ch" }}>
        <p className="mb-3 text-gray-600">
          <br />
          Latest from feed.amorris.ca/hallway.txt
        </p>
        {notes.map((item) => {
          const [timestamp, note] = item.split("\t");
          return (
            <p key={timestamp} className="mb-3">
              <span className="text-gray-600">
                {ago(new Date(timestamp))} ago
              </span>
              <br />
              {note}
            </p>
          );
        })}
      </div>
      <hr />
      <div className="todos-outer text-sm text-white pt-3">
        <p className="mb-3 text-gray-600">Todos</p>
        <ul style={{ width: "100%" }}>
          {todos
            .sort((l, r) => Number(l.order) - Number(r.order))
            .map(({ id, order, content, completed, created, due }) => {
              return (
                <li className="todo-outer" key={id}>
                  <div className="todo-inner">
                    <span className="block">
                      <span className="content">
                        #{order} {content}
                      </span>
                      <span className="block"></span>
                      <span className="created">
                        &nbsp;- Created {ago(new Date(created).getTime())} ago
                      </span>
                      &nbsp;
                      <span className="due">
                        {due &&
                          ((ago) =>
                            ago[0] === "-"
                              ? `- Due in ${ago.slice(1)}`
                              : `- Due within ${ago}`)(ago(new Date(due.date)))}
                      </span>
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>
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
