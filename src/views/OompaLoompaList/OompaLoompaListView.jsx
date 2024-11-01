import { FilterInput } from "../../components/FilterInput/FilterInput";
import { Navbar } from "../../components/Navbar/Navbar";
import { StyledFilterInputContainer } from "./OompaLoompaList.styles";

export const OompaLoompaListView = () => <div>
    <Navbar />
    <StyledFilterInputContainer>
        <FilterInput />
    </StyledFilterInputContainer>
</div>
