import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>Probably this course does not exist in the CoS description, or more rarely, exist but is not present on the website. 
        Please create an issue of Github in case of latter</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
