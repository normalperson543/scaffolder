export type Package = {
  name: string
  keywords: string[]
  version: string
  description: string
  sanitized_name: string
  publisher: {
    email: string
    actor: { name: string; type: string; email: string }
    username: string
  }
  maintainers: { email: string; username: string }[]
  license: string
  date: string
  links: {
    homepage: string
    repository: string
    bugs: string
    npm: string
  }
}
