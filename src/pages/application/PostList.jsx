import { useSelector } from "react-redux";
import PostItem from "../../components/application/PostItem";
function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  return (
    <div className="row d-flex justify-content-center mt-2">
      <div className="col-6">
        {posts.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              skills={post.skills}
              project={post.project}
            ></PostItem>
          );
        })}
      </div>
    </div>
  );
}

export default PostList;
