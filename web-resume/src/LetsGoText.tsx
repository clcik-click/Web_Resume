const LetsGoText = () => {
  const text = "Let's go!";

  return (
    <div className="group inline-flex text-4xl font-bold text-pink-500 cursor-pointer gap-[2px]">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};


export default LetsGoText;
