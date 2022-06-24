{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo1(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  type VideoMeatadata = Pick<Video, "id" | "title">;
  // 기존 타입에서 원하는 속성과 값 가져올때 -> pick
  // 제한적인 타입 만들 때 사용
  function getVideoMetadata1(id: string): VideoMeatadata {
    return {
      id: id,
      title: "title",
    };
  }
}
