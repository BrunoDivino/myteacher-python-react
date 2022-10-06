import { HeaderContainer, Logo } from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo src="/images/myteacher.png" />
            </div>

            <p>Meet your perfect teacher!</p>
        </HeaderContainer>
    )
}

export default Header;