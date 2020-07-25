import React from "react";

import { useComments } from "use-comments";

import { AddComment } from "components/AddComment";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  if (Math.floor(seconds) === 0) {
    return "now";
  }
  return Math.floor(seconds) + " seconds ago";
};

const formatStatus = (status) => {
  switch (status) {
    case "sending":
      return "✉️";
    default:
      return "👌";
  }
};

export const Comments = ({ postId }) => {
  const { comments, addComment, count, loading } = useComments(
    "https://amorris-hasura-1217.herokuapp.com/v1/graphql",
    postId
  );

  return (
    <section className="w-full max-w-xs p-4">
      <AddComment onSubmit={addComment} />
      <h3 className="font-bold text-xm">
        {count === 1 ? "1 comment" : `${count} comments`}
      </h3>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {comments.map(({ author, content, created_at, status }) => (
            <article
              key={created_at}
              className="max-w-sm bg-white rounded overflow-hidden shadow-lg my-6"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xm mb-2">
                  {author} ・ {formatDate(created_at)}{" "}
                  {status && `・ ${formatStatus(status)}`}
                </div>
                <p className="text-gray-700 text-base">{content}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

const Page = () => <Comments postId="comments" />;

export default Page;
