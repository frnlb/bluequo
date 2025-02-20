import { useEffect, useRef } from "react";
import { Card } from "@/components";
import type { CardData } from "@/interfaces/common";
import { useInfiniteImages } from "@/hooks/scroll";

function App() {
  const { loading, error, images, loadMore, hasNextPage } = useInfiniteImages(10);
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, loadMore]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {images.map((item: Partial<CardData>, index) => (
        <Card 
          key={`${item.id}-${index}`}
          alt={item.title ?? ""}
          src={item.picture ?? ""}
          artist={item.author ?? ""} 
          title={item.title ?? ""}   
        />
      ))}
      {hasNextPage && <div ref={loader}>Loading more...</div>}
    </div>
  );
}

export default App;
