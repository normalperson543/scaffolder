import { Button } from '@renderer/components/ui/button'
import CreateHeader from '@renderer/components/ui/create-header'
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet
} from '@renderer/components/ui/field'
import { Input } from '@renderer/components/ui/input'
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
import { FolderInput } from 'lucide-react'
import { useState } from 'react'
function CreateStep2(): React.JSX.Element {
  const [projectName, setProjectName] = useState('')
  const [projectLocation, setProjectLocation] = useState('')
  return (
    <div className="flex flex-col gap-4 p-16 justify-between w-full h-full">
      <CreateHeader
        step={2}
        title="Customize your project settings"
        description="Here you can change your settings like project name, development tools and Git repositories."
      />
      <div className="flex flex-col gap-2 justify-center items-center">
        <Item variant="outline" className="w-full">
          <ItemContent>
            <FieldSet>
              <FieldLegend>Project Settings</FieldLegend>
              <FieldDescription>Change the settings for your project</FieldDescription>
              <Field>
                <FieldLabel>Project name</FieldLabel>
                <Input
                  type="text"
                  onChange={(e) => setProjectName(e.target.value)}
                  maxLength={32}
                />
                <FieldDescription>Your project will be named {projectName}</FieldDescription>
              </Field>
              <Field>
                <FieldLabel>Project location</FieldLabel>
                <Input type="text" onChange={(e) => setProjectLocation(e.target.value)} />
                <Button>
                  <FolderInput width={12} height={12} />
                  Choose location
                </Button>
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
                  </SelectContent>
                </Select>
              </Field>
            </FieldSet>
          </ItemContent>
        </Item>
      </div>
    </div>
  )
}

export default CreateStep2
