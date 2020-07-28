import Head from "next/head";
import Link from "next/link";
import TodoRepository, { ago } from "repositories/todos";
import getHabits from "repositories/habits";

function NowPage({ todos, habits }) {
  return (
    <main>
      <Head>
        <title>Todos | Aaron Morris </title>
      </Head>
      <table
        className="dailies text-white p-10 mx-auto"
        style={{ width: "max-content" }}
      >
        <thead>
          <th>6A</th>
          <th>7A</th>
          <th>8A</th>
          <th>W1</th>
          <th>W2</th>
          <th>W3</th>
          <th>C1</th>
          <th>C2</th>
          <th>C3</th>
          <th>EX</th>
          <th>AL</th>
          <th>OD</th>
          <th>9P</th>
          <th>0P</th>
          <th>1P</th>
        </thead>
        <tbody>
          {habits.map((item) => (
            <tr key={item.Day}>
              <td>
                <input
                  type="checkbox"
                  checked={item.WU6}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.WU7}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.WU8}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.WA1}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.WA2}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.WA3}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.C1}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.C2}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.C3}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.EX}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.ALC}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.OO}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.BT9}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.BT10}
                  className="m-1 block mx-auto"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.BT11}
                  className="m-1 block mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="todos-outer text-white">
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
          font-size: 15px;
          width: max-content;
          max-width: 64ch;
          margin: auto;
          padding-top: 3rem;
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
          padding: 0.3rem;
          font-weight: 300;
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps() {
  const todos = await new TodoRepository().getAllTodos();
  const habits = await getHabits();
  const props = { todos, habits };
  return { props, unstable_revalidate: 10 };
}

export default NowPage;
