import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Wrapper, Button, ToggleThemeButton } from '..';
import { Theme } from '../../types';
import * as S from './styles';
import logoImg from '../../assets/images/Logo.png';

type NavbarProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <S.Navbar>
      <Wrapper>
        <img src={logoImg} width="120px" height="auto" alt="Adopt A Pet website logo" />

        <S.MenuOptions>
          <ul className="hidden-when-lg">
            <li>
              <Link to="/">Start</Link>
            </li>
            <li>
              <Link to="/Adotar">Adopt</Link>
            </li>
            <li>
              <Link to="/Ajudar">Help</Link>
            </li>
            <li>
              <Link to="/Sobre">About</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contatos">Contacts</Link>
            </li>
          </ul>

          <ToggleThemeButton theme={theme} onClick={toggleTheme} />

          <S.OpenNavbarButton title="Abrir menu lateral" className="display-when-lg">
            <FontAwesomeIcon icon={solid('bars')} />
          </S.OpenNavbarButton>

          <S.LoginButtons className="hidden-when-md">
            <Button isOutlined isWhite>
              Login
            </Button>
            <Button isOutlined={false} isWhite={false}>
              Register
            </Button>
          </S.LoginButtons>
        </S.MenuOptions>
      </Wrapper>
    </S.Navbar>
  );
}
