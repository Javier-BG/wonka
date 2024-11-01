import { Icon } from "../Icon/Icon"
import { StyledFilterInput } from "./FilterInput.styles"

const INPUT_PLACEHOLDER = "Search"

export const FilterInput = ({ onChange }) => {
    return <StyledFilterInput>
        <div>
            <input type="text" onChange={onChange} placeholder={INPUT_PLACEHOLDER} />
            <Icon name="search" />
        </div>
    </StyledFilterInput>
}