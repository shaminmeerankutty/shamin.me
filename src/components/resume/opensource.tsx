/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const resumeOpenSourceStyles = css`
  .opensource__heading {
    margin-top: 0;
    margin-bottom: 5px;
  }
  .opensource__description {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .opensource__stacks {
    margin: 0px;
  }
`

export default function ResumeOpenSourceItem({
  data: { name, type = "", link, description, stacks },
}) {
  return (
    <li css={resumeOpenSourceStyles}>
      <h3 className="opensource__heading">
        {name}
        {type && <span>, {type}</span>}
      </h3>
      <a target="_blank" href={link}>{link}</a>
      <p className="opensource__description">{description}</p>
      <p className="opensource__stacks">
        <strong>Stacks Used : </strong>
        {stacks.join(", ")}
      </p>
    </li>
  )
}