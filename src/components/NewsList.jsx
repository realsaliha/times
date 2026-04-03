import NewsItems from "./NewsItems";

export default function NewsList({news}){
  const newsHandler = news.map((item) => (
      
     <NewsItems key={item.id} item={item} />
     ))
  return(
    <>
     {newsHandler}
    </>
  );
}