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
export type Blueprint = {
  name: string
  description: string
  repository?: string
  defaultSettings?: {
    runtime: JSRuntime
    packageManager: PackageManager
    codeEditor: CodeEditor
  }
  workflow: Workflow[]
}
export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun' | 'deno'
export type JSRuntime = 'nodejs' | 'bun' | 'deno'
export type CodeEditor = 'vscode' | 'zed'
export type CreateAction = {
  create: {
    package: MiniPackage
    params: ActionParams
  }
}
export type MiniPackage = {
  name: string
  version?: string
}
export type ActionParams = {
  content: string
  only?: PackageManager
}
export type Workflow = {
  
}