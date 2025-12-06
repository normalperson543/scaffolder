import { Button } from '@renderer/components/ui/button'
import { Checkbox } from '@renderer/components/ui/checkbox'
import CreateHeader from '@renderer/components/ui/create-header'
import { Field, FieldDescription, FieldLabel, FieldSet } from '@renderer/components/ui/field'
import { Input } from '@renderer/components/ui/input'
import { InputGroup, InputGroupInput } from '@renderer/components/ui/input-group'
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
import { SquareArrowOutUpRightIcon } from 'lucide-react'

function CreateCustom(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-4 justify-between w-full h-full">
      <CreateHeader
        step={1}
        title="Create a custom project"
        description="Select frameworks, build tools, or go fullstack. Make it yours. We won't judge."
      />
      <div className="flex flex-col gap-2 pt-40 pl-16 pr-16 pb-16">
        <Item variant="outline" className="w-full">
          <ItemContent>
            <FieldSet>
              <Field>
                <FieldLabel>Choose your framework</FieldLabel>
                <FieldDescription>
                  Frameworks allow you to build web-powered apps efficiently. Depending on your
                  framework, you'll also choose a build tool.
                </FieldDescription>
                <Button variant="ghost">
                  <SquareArrowOutUpRightIcon width={12} height={12} />
                  What's a framework?
                </Button>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Runtimes</SelectLabel>
                      <SelectItem value="nodejs">Node.js</SelectItem>
                      <SelectItem value="deno">Deno</SelectItem>
                      <SelectItem value="bun">Bun</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectItem value="none">Vanilla</SelectItem>
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
              <Field>
                <FieldLabel>Blueprint name</FieldLabel>
                <Input type="text" maxLength={32} />
              </Field>
            </FieldSet>
          </ItemContent>
        </Item>
      </div>
    </div>
  )
}

export default CreateCustom
