import Head from "next/head";
import Link from "next/link";
import TodoService, { ago } from "services/todos";

function Notes({ todos }) {
  return (
    <main>
      <Head>
        <title>Todos | Aaron Morris </title>
      </Head>
      <div className="todos-outer">
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
      `}</style>
    </main>
  );
}

export async function getStaticProps() {
  const todos = await new TodoService().getAllTodos();
  const props = { todos };
  return { props, unstable_revalidate: 10 };
}

export default Notes;
