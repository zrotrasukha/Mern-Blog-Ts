import { Post } from "../components/Post";

export default function IndexPage() {
  return (
    <div className="my-10 flex flex-col gap-5">
      <Post />
      <Post />
      <Post />
    </div>
  );
}
