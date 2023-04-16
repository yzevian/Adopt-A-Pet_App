import { Theme } from '../../types';
import { Navbar, Wrapper } from '..';
import * as S from './styles';
import { PetSearchForm } from '../PetSearchForm';

type PageHeaderProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export function PageHeader({ theme, toggleTheme }: PageHeaderProps) {
  return (
    <S.PageHeader>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <S.Jumbotron>
        <Wrapper>
          <div>
            <h1>I found my new best friend</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum, facilisis eu ornare quis,
              dignissim id sapien.
            </p>
            <PetSearchForm />
            <a href="/">Want to do an advanced search? click here</a>
          </div>
        </Wrapper>
      </S.Jumbotron>
    </S.PageHeader>
  );
}
