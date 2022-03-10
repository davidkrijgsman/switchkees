export default (expression: any) => {
  let matches = 0
  const clauses: any[] = []

  return {
    Kees(clause: any, exec?: () => any) {
      clauses.push(clause)
      if (clauses.some(c => c === expression)) {
        matches += 1
        if (exec) {
          exec()
          this.break()
        }
      }
      return this
    },
    do(exec: () => any) {
      if (clauses.some(c => c === expression)) {
        exec()
      }
      return this
    },
    break() {
      clauses.length = 0
      return this
    },
    default(exec: () => any) {
      if (matches === 0 || clauses.length > 0) {
        exec()
      }
    }
  }
}