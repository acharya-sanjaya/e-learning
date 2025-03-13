import Icon from "~/Icons";

export default function Portfolio() {
  return (
    <div className="page-root flex flex-col">
      {/* Header */}
      <div className="bg-yellow-400 text-black">
        <div className="flex w-fit flex-col items-center bg-red-500 p-1">
          <Icon iconName="hamburger" className="h-10 w-10" />
          <div className="text-lg font-bold">Menu</div>
        </div>
      </div>
      {/* Header */}
      {/* Cards */}
      <div className="h-fit w-full bg-gray-800 p-4">
        <div className="relative flex w-fit flex-col items-center rounded-xl bg-yellow-500 px-6 py-4 text-xl font-bold">
          <div></div>
          <div>Hiragana</div>
          <div>&</div>
          <div>Katakana</div>
        </div>
      </div>
      {/* Cards */}
      {/* primary: [#FEF7E5] */}
      {/* bg: [#FFE168] */}
      {/* secondary: [#3B3A3A] */}
      {/* text: [010000] */}
    </div>
  );
}

/*
Kanji
Vocabulary
Grammar
Listening
*/
