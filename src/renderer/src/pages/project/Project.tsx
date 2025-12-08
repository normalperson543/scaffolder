import { JSX } from 'react/jsx-runtime'
import reactLogo from '@renderer/assets/logos/react-logo.svg'
import { Button } from '@renderer/components/ui/button'
import {
  DownloadIcon,
  FolderInput,
  GitBranchIcon,
  PlayIcon,
  PuzzleIcon,
  SaveIcon,
  SquareArrowUpRightIcon
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@renderer/components/ui/tabs'
import { Separator } from '@renderer/components/ui/separator'
import { columns } from '@renderer/components/ui/packages/columns'
import { packagesPlaceholder } from '@renderer/lib/placeholders'
import PackagesTable from '@renderer/components/ui/packages/packages-table'
import { Item, ItemContent, ItemHeader, ItemMedia } from '@renderer/components/ui/item'
import { Field, FieldDescription, FieldLabel, FieldSet } from '@renderer/components/ui/field'
import { Input } from '@renderer/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from '@renderer/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@renderer/components/ui/select'
function Project(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <Tabs defaultValue="packages" className="w-full">
        <div className="flex flex-col gap-2 h-32 sticky top-0 z-10 bg-background shadow-background shadow-md">
          <div className="p-3 flex flex-row w-full gap-4 items-center">
            <img src={reactLogo} width={24} height={24} />
            <div className="flex flex-col gap-1 w-full flex-1">
              <p className="font-bold text-lg">MyProject</p>
              <p className="text-gray-300">React + TypeScript + Vite</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Button variant="outline" size="icon-sm">
                <GitBranchIcon width={8} height={8} />
              </Button>
              <Button variant="outline" size="icon-sm">
                <PlayIcon width={8} height={8} />
              </Button>
              <Button>
                <SquareArrowUpRightIcon width={12} height={12} />
                Open
              </Button>
            </div>
          </div>
          <Separator />
          <div className="pl-3 pr-3 pb-1">
            <TabsList>
              <TabsTrigger value="packages">Packages</TabsTrigger>
              <TabsTrigger value="scripts">Scripts</TabsTrigger>
              <TabsTrigger value="plugins">Plugins</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="packages">
          <div className="flex flex-col gap-1 pt-1 pb-1 pl-3 pr-3 w-full">
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-lg font-bold">Packages</p>
                <p>
                  Fetched from your <code>package.json</code> file.
                </p>
              </div>
              <Button variant="secondary">Update</Button>
              <Button variant="secondary">Reinstall</Button>
              <Button>
                <DownloadIcon width={12} height={12} />
                Install
              </Button>
            </div>
            <PackagesTable columns={columns} data={packagesPlaceholder} />
          </div>
        </TabsContent>
        <TabsContent value="preview">
          <div className="flex flex-col gap-1 pt-1 pb-1 pl-3 pr-3 w-full h-full">
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-lg font-bold">Preview</p>
                <p>
                  Run a development server and see how your project looks, without going into your
                  code editor.
                </p>
              </div>
              <Button>
                <PlayIcon width={12} height={12} />
                Preview
              </Button>
            </div>
            <p className="font-mono text-gray-600">Output</p>
            <div className="w-full h-full bg-gray-800 p-2 font-mono overflow-y-scroll">
              kjkljkljjlj
            </div>
          </div>
        </TabsContent>
        <TabsContent value="plugins">
          <div className="flex flex-col gap-1 pt-1 pb-1 pl-3 pr-3 w-full">
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-lg font-bold">Plugins</p>
                <p>Extend your project with community-made plugins.</p>
              </div>
              <Button variant="secondary">Update</Button>
              <Button variant="secondary">Reinstall</Button>
            </div>
            <Item variant="outline" asChild>
              <a href="#">
                <ItemMedia variant="icon">
                  <PuzzleIcon width={12} height={12} />
                </ItemMedia>
                <ItemContent>
                  <ItemHeader>
                    <p className="font-bold">Install Tailwind CSS</p>
                  </ItemHeader>
                  <p>
                    Installs Tailwind CSS v4 into your project. Not made or endorsed by the Tailwind
                    CSS developers.
                  </p>
                </ItemContent>
              </a>
            </Item>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="flex flex-col gap-1 pt-1 pb-1 pl-3 pr-3 w-full h-full">
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-lg font-bold">Settings</p>
              </div>
            </div>
            <FieldSet>
              <Field>
                <FieldLabel>Project name</FieldLabel>
                <Input type="text" maxLength={32} />
              </Field>
              <Field>
                <FieldLabel>Project location</FieldLabel>
                <InputGroup>
                  <InputGroupInput type="text" className="font-mono" />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton size="xs">
                      <FolderInput width={12} height={12} />
                      Choose location
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel>JavaScript runtime</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a JavaScript runtime" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Runtimes</SelectLabel>
                      <SelectItem value="nodejs">Node.js</SelectItem>
                      <SelectItem value="deno">Deno</SelectItem>
                      <SelectItem value="bun">Bun</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectItem value="none">No runtime</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>Package manager</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a package manager" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="npm">npm</SelectItem>
                      <SelectItem value="pnpm">pnpm</SelectItem>
                      <SelectItem value="yarn">yarn</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectItem value="none">No package manager</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>Code editor</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a code editor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="vscode">Visual Studio Code</SelectItem>
                      <SelectItem value="zed">Zed</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectItem value="none">No code editor</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </FieldSet>
            <Button>
              <SaveIcon width={12} height={12} />
              Save
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default Project
