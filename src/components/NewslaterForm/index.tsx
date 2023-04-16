import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '..';
import * as S from './styles';

export function NewslaterForm() {
  return (
    <S.NewslaterForm action="">
      <fieldset>
        <legend className="visually-hidden">Newslater registration form</legend>

        <label htmlFor="email">
          <span className="visually-hidden">E-mail</span>
          <S.Input type="email" id="email" placeholder="Inform your email" />
        </label>

        <Button type="submit" title="Inscrever-se na newslater" isOutlined={false} isWhite={false}>
          <FontAwesomeIcon icon={solid('arrow-right')} />
        </Button>
      </fieldset>
    </S.NewslaterForm>
  );
}
