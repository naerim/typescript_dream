{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  type VideoMeatadata = Omit<Video, "url" | "data">;
  // 기존 타입에서 빼고 싶은 값 설정하기
  // 다른 어떤 종류의 키도 가능
  function getVideoMetadata(id: string): VideoMeatadata {
    return {
      id: id,
      title: "title",
    };
  }
}
