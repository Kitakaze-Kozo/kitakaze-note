/* 共通マスターデータベース */
const allArticles = [
  {
    id: "kajin",
    title: "佳人",
    date: "2026.08.21",
    length: "9,500文字",
    popularRank: 1,
    genre: "red", // blue: 評論風, green: 随筆, red: 小説, yellow: 詩歌
    type: "novel", // novel: 縦書きリーダー使用, standard: 通常ページ
    file: "txt/kajin.txt",
    url: "novel-cover.html?id=kajin"
  },
  {
    id: "kouzou",
    title: "恐怖の構造",
    date: "2026.08.21",
    length: "14,296文字",
    popularRank: 2,
    genre: "blue",
    type: "standard",
    url: "article2.html"
  },
  {
    id: "hajimene",
    title: "はじめに",
    date: "2026.04.29",
    length: "56,213文字",
    popularRank: 3,
    genre: "green",
    type: "standard",
    url: "hajimene.html"
  },
  {
    id: "generalization",
    title: "一般化の罠",
    date: "2026.08.14",
    length: "23,412文字",
    popularRank: 4,
    genre: "blue",
    type: "standard",
    url: "article3.html"
  },
  {
    id: "shitto",
    title: "嫉妬",
    date: "2026.07.14",
    length: "21,432文字",
    popularRank: 5,
    genre: "yellow",
    type: "standard",
    url: "article5.html"
  }
];

// ジャンル名マッピング
const genreNames = {
  blue: "評論風",
  green: "随筆",
  red: "小説",
  yellow: "詩歌"
};
