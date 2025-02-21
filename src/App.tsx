import { useEffect, useRef } from "react";
import { CardsWrapper, CaseCard, PageHeader } from "@/components";
import type { CardData } from "@/interfaces/common";
import { useInfiniteImages } from "@/hooks/useInfiniteImages";

function App() {
  const { loading, error, images, loadMore, hasNextPage, search, handleLike } = useInfiniteImages(10);
  const loader = useRef(null);

  const handleSearch = (searchTerm: string) => {
    search(searchTerm);
  };

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
    <>
      <PageHeader handleSearch={handleSearch}/>
      <CardsWrapper>
        {images.map((item: Partial<CardData>, index) => (
          <CaseCard 
            key={`${item.id}-${index}`}
            alt={item.title ?? ""}
            src={item.picture ?? ""}
            artist={item.author ?? ""}
            title={item.title ?? ""} 
            visit={0}
            like={item.likesCount ?? 0}
            handleLike={async () => {
              if (item.id) {
                return await handleLike(item.id);
              }
              return null;
            }}
            handleVisit={() => console.log("visit here")} 
            liked={false} 
          />
        ))}
        {hasNextPage && <div ref={loader}>Loading more...</div>}
      </CardsWrapper>
    </>
  );
}

export default App;
