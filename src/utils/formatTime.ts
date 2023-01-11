// @time = integer
// time / 60 -> return
export const formatTime = (seconds: number) => {
  const totalInMinutes = seconds > 60 ? seconds / 60 : `0.${seconds}`

  const formattedTime = String(totalInMinutes)
    .split(".")
    .map((str) => {
      let unformattedString = str

      if (unformattedString.length !== 2) {
        unformattedString = unformattedString.padStart(2, "0")
      }

      return unformattedString.slice(0, 2)
    })
    .join(":")

  return formattedTime
}
