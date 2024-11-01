import { Icon } from "../Icon/Icon";
import { StyledNavbar } from "./Navbar.styles";

const NAVBAR_TITLE = "Oompa Loompa's Crew";

export const Navbar = () =>
    <StyledNavbar>
        <Icon name="oompaloompa" />
        {NAVBAR_TITLE}
    </StyledNavbar>
