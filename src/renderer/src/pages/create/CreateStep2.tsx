import { Button } from '@renderer/components/ui/button'
import { Checkbox } from '@renderer/components/ui/checkbox'
import CreateHeader from '@renderer/components/ui/create-header'
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet
} from '@renderer/components/ui/field'
import { Input } from '@renderer/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from '@renderer/components/ui/input-group'
import { Item, ItemContent } from '@renderer/components/ui/item'
import { Label } from '@renderer/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@renderer/components/ui/select'
import { ArrowRightIcon, FolderInput } from 'lucide-react'
import { useState } from 'react'
function CreateStep2(): React.JSX.Element {
  const [projectName, setProjectName] = useState('')
  const [projectLocation, setProjectLocation] = useState('')
  return (
    <div className="flex flex-col gap-4 justify-between w-full h-full">
      <CreateHeader
        step={2}
        title="Customize your project settings"
        description="Here you can change your settings like project name, development tools and Git repositories."
      />
      <div className="flex flex-col gap-2 justify-center items-center pt-42 pl-16 pr-16 pb-16">
        <Item variant="outline" className="w-full">
          <ItemContent>
            <FieldSet>
              <Field>
                <FieldLabel>Project name</FieldLabel>
                <Input
                  type="text"
                  onChange={(e) => setProjectName(e.target.value)}
                  value={projectName}
                  maxLength={32}
                />
                <FieldDescription>Your project will be named {projectName}</FieldDescription>
              </Field>
              <Field>
                <FieldLabel>Project location</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    type="text"
                    onChange={(e) => setProjectLocation(e.target.value)}
                    value={projectLocation}
                    className="font-mono"
                  />
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
                <FieldLabel>Git repository</FieldLabel>
                <FieldDescription>
                  Initializing Git will allow you to use source control, a way to keep a history of
                  the changes in your project.
                </FieldDescription>
                <div className="flex flex-row gap-2">
                  <Checkbox defaultChecked />
                  <div className="flex flex-col gap-1">
                    <Label>Initialize a Git repository</Label>
                  </div>
                </div>
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
              <ArrowRightIcon width={12} height={12} />
              Create project
            </Button>
          </ItemContent>
        </Item>
      </div>
    </div>
  )
}

export default CreateStep2
