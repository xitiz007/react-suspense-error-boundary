import SkeletonPost from "./SkeletonPost";

const PostsSkeletion = () => {
  return [...Array(5).keys()].map((index) => <SkeletonPost key={index} />);
};

export default PostsSkeletion;
