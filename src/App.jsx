import { useState, Suspense } from "react";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import PostsSkeletion from "./components/skeletons/PostsSkeletion";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  const [currentUserId, setCurrentUserId] = useState(0);
  const content =
    currentUserId === 0 ? (
      <h1 className="message">Select an Employee to view posts</h1>
    ) : (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setCurrentUserId(0)}
        resetKeys={[currentUserId]}
      >
        <Suspense fallback={<PostsSkeletion />}>
          <PostsList currentUserId={currentUserId} />
        </Suspense>
      </ErrorBoundary>
    );
  return (
    <>
      <Header
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      {content}
    </>
  );
}

export default App;
