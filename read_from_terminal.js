const convertText = (text) => {
  const cyan = "\x1b[36m";
  const boldCyan = "\x1b[1;36m";
  const reset = "\x1b[0m";
  return text.split("").map((char) =>
    "aeiouAEIOU".includes(char) ? `${boldCyan}${char}${reset}` : char
  ).join("");
};

for await (const chunk of Deno.stdin.readable) {
  console.log("> chunk: ", chunk);
  const text = new TextDecoder().decode(chunk);
  console.log("> text: ", convertText(text));
  if (text.trim() === "exit") {
    ``;
    console.log("Exiting....");
    break;
  }
}
