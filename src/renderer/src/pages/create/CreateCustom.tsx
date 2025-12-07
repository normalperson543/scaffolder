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
import { ArrowRightIcon, SquareArrowOutUpRightIcon } from 'lucide-react'

function CreateCustom(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-4 justify-between w-full h-full">
      <CreateHeader
        step={1}
        title="Create a custom project"
        description="Select frameworks, build tools, or go fullstack. Make it yours. We won't judge."
      />
      <div className="flex flex-col gap-2 pt-42 pl-16 pr-16 pb-16">
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
                      <SelectLabel>Frameworks</SelectLabel>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vue">Vue</SelectItem>
                      <SelectItem value="svelte">Svelte</SelectItem>
                      <SelectItem value="angular">Angular</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Go fullstack</SelectLabel>
                      <SelectItem value="nextjs">Next.js</SelectItem>
                      <SelectItem value="nuxt">Nuxt</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Other options</SelectLabel>
                      <SelectItem value="vanilla">Vanilla (no framework)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>Build tools</FieldLabel>
                <FieldDescription>
                  Build tools allow you to compile stuff in your app, including packages.
                </FieldDescription>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a build tool" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Vite">Vite</SelectItem>
                      <SelectItem value="Parcel">Parcel</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectItem value="none">No buld tool (not recommended)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>Language</FieldLabel>
                <FieldDescription>
                  Choose the programming language that you'll use to make your project.
                </FieldDescription>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="js">JavaScript</SelectItem>
                      <SelectItem value="ts">TypeScript</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>Make a blueprint</FieldLabel>
                <FieldDescription>
                  You can optionally choose to turn this custom project configuration into a
                  blueprint, which will allow you to create new projects quickly based on this
                  configuration.
                </FieldDescription>
                <div className="flex flex-row gap-2 items-center">
                  <Checkbox />
                  <div className="flex flex-col gap-1">
                    <Label>Turn this into a blueprint</Label>
                  </div>
                </div>
              </Field>
              <Field>
                <FieldLabel>Blueprint name</FieldLabel>
                <Input type="text" maxLength={32} />
              </Field>
            </FieldSet>
            <Button>
              <ArrowRightIcon width={12} height={12} />
              Create custom project
            </Button>
          </ItemContent>
        </Item>
      </div>
    </div>
  )
}

export default CreateCustom
