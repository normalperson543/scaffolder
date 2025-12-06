import { JSX } from 'react/jsx-runtime'
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from './item'
import { ChevronRightIcon } from 'lucide-react'

function BlueprintItem({
  logo,
  title,
  description,
  href
}: {
  logo: string
  title: string
  description: string
  href?: string
}): JSX.Element {
  return (
    <Item variant="outline" asChild>
      <a href={href ?? '#'}>
        <ItemMedia>
          <img src={logo} width={24} height={24} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            <h3 className="font-bold">{title}</h3>
          </ItemTitle>
          <div className="flex flex-col gap-0 flex-1">
            <p>{description}</p>
          </div>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon width={12} height={12} />
        </ItemActions>
      </a>
    </Item>
  )
}
export default BlueprintItem
