// levels.js（ぢ/ヂ/づ/ヅ/Di/Du/ヲ を削除済）

const level1 = [
  { q: "a", a: "あ" }, { q: "i", a: "い" }, { q: "u", a: "う" }, { q: "e", a: "え" }, { q: "o", a: "お" },
  { q: "ka", a: "か" }, { q: "ki", a: "き" }, { q: "ku", a: "く" }, { q: "ke", a: "け" }, { q: "ko", a: "こ" },
  { q: "sa", a: "さ" }, { q: "shi", a: "し" }, { q: "su", a: "す" }, { q: "se", a: "せ" }, { q: "so", a: "そ" },
  { q: "ta", a: "た" }, { q: "chi", a: "ち" }, { q: "tsu", a: "つ" }, { q: "te", a: "て" }, { q: "to", a: "と" },
  { q: "na", a: "な" }, { q: "ni", a: "に" }, { q: "nu", a: "ぬ" }, { q: "ne", a: "ね" }, { q: "no", a: "の" },
  { q: "ha", a: "は" }, { q: "hi", a: "ひ" }, { q: "fu", a: "ふ" }, { q: "he", a: "へ" }, { q: "ho", a: "ほ" },
  { q: "ma", a: "ま" }, { q: "mi", a: "み" }, { q: "mu", a: "む" }, { q: "me", a: "め" }, { q: "mo", a: "も" },
  { q: "ya", a: "や" }, { q: "yu", a: "ゆ" }, { q: "yo", a: "よ" },
  { q: "ra", a: "ら" }, { q: "ri", a: "り" }, { q: "ru", a: "る" }, { q: "re", a: "れ" }, { q: "ro", a: "ろ" },
  { q: "wa", a: "わ" }, { q: "n", a: "ん" }
];

const level2 = [
  { q: "a", a: "ア" }, { q: "i", a: "イ" }, { q: "u", a: "ウ" }, { q: "e", a: "エ" }, { q: "o", a: "オ" },
  { q: "ka", a: "カ" }, { q: "ki", a: "キ" }, { q: "ku", a: "ク" }, { q: "ke", a: "ケ" }, { q: "ko", a: "コ" },
  { q: "sa", a: "サ" }, { q: "shi", a: "シ" }, { q: "su", a: "ス" }, { q: "se", a: "セ" }, { q: "so", a: "ソ" },
  { q: "ta", a: "タ" }, { q: "chi", a: "チ" }, { q: "tsu", a: "ツ" }, { q: "te", a: "テ" }, { q: "to", a: "ト" },
  { q: "na", a: "ナ" }, { q: "ni", a: "ニ" }, { q: "nu", a: "ヌ" }, { q: "ne", a: "ネ" }, { q: "no", a: "ノ" },
  { q: "ha", a: "ハ" }, { q: "hi", a: "ヒ" }, { q: "fu", a: "フ" }, { q: "he", a: "ヘ" }, { q: "ho", a: "ホ" },
  { q: "ma", a: "マ" }, { q: "mi", a: "ミ" }, { q: "mu", a: "ム" }, { q: "me", a: "メ" }, { q: "mo", a: "モ" },
  { q: "ya", a: "ヤ" }, { q: "yu", a: "ユ" }, { q: "yo", a: "ヨ" },
  { q: "ra", a: "ラ" }, { q: "ri", a: "リ" }, { q: "ru", a: "ル" }, { q: "re", a: "レ" }, { q: "ro", a: "ロ" },
  { q: "wa", a: "ワ" }, { q: "n", a: "ン" }
];

const level3 = [
  { q: "ga", a: "が" }, { q: "gi", a: "ぎ" }, { q: "gu", a: "ぐ" }, { q: "ge", a: "げ" }, { q: "go", a: "ご" },
  { q: "za", a: "ざ" }, { q: "ji", a: "じ" }, { q: "zu", a: "ず" }, { q: "ze", a: "ぜ" }, { q: "zo", a: "ぞ" },
  { q: "da", a: "だ" }, { q: "de", a: "で" }, { q: "do", a: "ど" },
  { q: "ba", a: "ば" }, { q: "bi", a: "び" }, { q: "bu", a: "ぶ" }, { q: "be", a: "べ" }, { q: "bo", a: "ぼ" },
  { q: "pa", a: "ぱ" }, { q: "pi", a: "ぴ" }, { q: "pu", a: "ぷ" }, { q: "pe", a: "ぺ" }, { q: "po", a: "ぽ" },
  { q: "kya", a: "きゃ" }, { q: "kyu", a: "きゅ" }, { q: "kyo", a: "きょ" },
  { q: "sha", a: "しゃ" }, { q: "shu", a: "しゅ" }, { q: "sho", a: "しょ" },
  { q: "cha", a: "ちゃ" }, { q: "chu", a: "ちゅ" }, { q: "cho", a: "ちょ" },
  { q: "nya", a: "にゃ" }, { q: "nyu", a: "にゅ" }, { q: "nyo", a: "にょ" },
  { q: "hya", a: "ひゃ" }, { q: "hyu", a: "ひゅ" }, { q: "hyo", a: "ひょ" },
  { q: "mya", a: "みゃ" }, { q: "myu", a: "みゅ" }, { q: "myo", a: "みょ" },
  { q: "rya", a: "りゃ" }, { q: "ryu", a: "りゅ" }, { q: "ryo", a: "りょ" }
];

const level4 = [
  { q: "ga", a: "ガ" }, { q: "gi", a: "ギ" }, { q: "gu", a: "グ" }, { q: "ge", a: "ゲ" }, { q: "go", a: "ゴ" },
  { q: "za", a: "ザ" }, { q: "ji", a: "ジ" }, { q: "zu", a: "ズ" }, { q: "ze", a: "ゼ" }, { q: "zo", a: "ゾ" },
  { q: "da", a: "ダ" }, { q: "de", a: "デ" }, { q: "do", a: "ド" },
  { q: "ba", a: "バ" }, { q: "bi", a: "ビ" }, { q: "bu", a: "ブ" }, { q: "be", a: "ベ" }, { q: "bo", a: "ボ" },
  { q: "pa", a: "パ" }, { q: "pi", a: "ピ" }, { q: "pu", a: "プ" }, { q: "pe", a: "ペ" }, { q: "po", a: "ポ" },
  { q: "kya", a: "キャ" }, { q: "kyu", a: "キュ" }, { q: "kyo", a: "キョ" },
  { q: "sha", a: "シャ" }, { q: "shu", a: "シュ" }, { q: "sho", a: "ショ" },
  { q: "cha", a: "チャ" }, { q: "chu", a: "チュ" }, { q: "cho", a: "チョ" },
  { q: "nya", a: "ニャ" }, { q: "nyu", a: "ニュ" }, { q: "nyo", a: "ニョ" },
  { q: "hya", a: "ヒャ" }, { q: "hyu", a: "ヒュ" }, { q: "hyo", a: "ヒョ" },
  { q: "mya", a: "ミャ" }, { q: "myu", a: "ミュ" }, { q: "myo", a: "ミョ" },
  { q: "rya", a: "リャ" }, { q: "ryu", a: "リュ" }, { q: "ryo", a: "リョ" }
];

function getLevelQuestions(level) {
  switch (parseInt(level)) {
    case 1: return level1;
    case 2: return level2;
    case 3: return level3;
    case 4: return level4;
    default: return [];
  }
}
