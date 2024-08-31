export function day(date: Date) {
  if (date === undefined) {
    return;
  }
  let nice = "";
  let current = new Date();
  const u = current.getDate();
  console.log(u);
  const month = current.getMonth();
  const o = date.getDate();
  console.log(o);
  const createdMonth = date.getMonth();
  console.log(u - o);
  if (u === o) return (nice = "Today");
  else if (u - o === 1) return (nice = "Yesterday");
  else if (u - o === 2) return (nice = "DayBefore");
  else if (u - o > 2) {
    nice = `${u - o} days ago`;
    console.log(nice);
  } else if (month in [1, 3, 5, 7, 8, 10, 12] && u - o > 31)
    return (nice = `${createdMonth - month} months ago`);
  else if (month in [4, 6, 9, 11] && u - o > 30)
    return (nice = `${createdMonth - month} months ago`);
  // else if (
  //   (month in [2] &&
  //     u > 29 &&
  //     createdMonth % 4 === 0 &&
  //     createdMonth % 100 !== 0) ||
  //   createdMonth % 400 === 0
  // )
  //   return (nice = `${createdMonth - month} months ago`);
}
