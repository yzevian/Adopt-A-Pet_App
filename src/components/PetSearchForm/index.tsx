import { Button } from '..';
import * as S from './styles';

export function PetSearchForm() {
  return (
    <S.PetSearchForm action="">
      <fieldset>
        <legend className="visually-hidden">Pet Inquiry Form</legend>

        <label htmlFor="local" className="localLabel">
          <span className="visually-hidden">Location</span>
          <S.Input type="search" id="local" placeholder="Inform the location" />
        </label>

        <label htmlFor="species">
          <span className="visually-hidden">Species</span>
          <S.Select id="species" name="species">
            <option value="">Species</option>
            <option value="gatos">Cats</option>
            <option value="cachorros">Puppies</option>
            <option value="roedores">Rodents</option>
            <option value="repteis">Reptiles</option>
          </S.Select>
        </label>

        <Button type="submit" isOutlined={false} isWhite={false}>
          Search
        </Button>
      </fieldset>
    </S.PetSearchForm>
  );
}
