export function convertErrorsToVeeValidate(errors) {
  errors = Object.entries(errors)
  errors = errors
    .map((error) => {
      const key = error[0]
      const value = error[1][0]
      return {
        [key]: value
      }
    })
    .reduce((acc, current) => {
      acc = Object.assign(acc, current)
      return acc
    })

  return errors
}
