type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

// 한 page딩 pageInfo를 연결시킬 수 있음
const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

// 기타
// 대문자로 사용 가능
type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog
