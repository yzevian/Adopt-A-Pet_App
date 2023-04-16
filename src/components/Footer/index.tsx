import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import * as S from './styles';
import logoImg from '../../assets/images/Logo.png';
import { Wrapper, NewslaterForm } from '..';

export function Footer() {
  return (
    <S.Footer>
      <Wrapper>
        <S.FooterColumn>
          <h2>
            <img src={logoImg} width="120px" height="auto" alt="AdoptPet logo" />
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum, facilisis eu ornare quis, dignissim
            id sapien.
          </p>

          <S.Address>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={solid('phone')} />
                </span>
                <a href="tel:+55###########" title="Phone" target="_blank" rel="noopener noreferrer">
                  +1 (###) ###-####
                </a>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={solid('envelope')} />
                </span>
                <a href="mailto:#######@#####.com" title="E-mail" target="_blank" rel="noopener noreferrer">
                  contatcts@AdoptAPetWeb.com
                </a>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={solid('location-dot')} />
                </span>
                <a href="/" title="Local" target="_blank" rel="noopener noreferrer">
                  Seattle, WA, US.
                </a>
              </li>
            </ul>
          </S.Address>
        </S.FooterColumn>

        <S.FooterColumn>
          <h2>Menu</h2>
          <ul>
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
              <Link to="/Contatos">Contact</Link>
            </li>
          </ul>
        </S.FooterColumn>

        <S.FooterColumn>
          <h2>Links</h2>
          <ul>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem ipsum</Link>
            </li>
          </ul>
        </S.FooterColumn>

        <S.FooterColumn>
          <h2>Newsletter</h2>

          <p>Sign up to receive all the news directly in your e-mail</p>

          <NewslaterForm />

          <S.SocialNetworks>
            <li>
              <S.SocialLink href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={brands('facebook-f')} />
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink
                href="https://www.instagram.com/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={brands('instagram')} />
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink href="https://twitter.com/" title="Twitter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={brands('twitter')} />
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink
                href="https://www.linkedin.com/in/"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={brands('linkedin-in')} />
              </S.SocialLink>
            </li>
          </S.SocialNetworks>
        </S.FooterColumn>
      </Wrapper>

      <S.Copy>
        <Wrapper>
          <small>
            Copyright &copy; 2023 Adopt A Pet | Evian Z | <a href="/">privacy policy</a>
          </small>
          <small>
            Designed by{' '}
            <a href="https://github.com/yzevian/Adopt-A-Pet_App.git" target="_blank" rel="noopener noreferrer">
              Evian Z
            </a>
          </small>
        </Wrapper>
      </S.Copy>
    </S.Footer>
  );
}
