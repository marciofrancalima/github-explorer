import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </S.Form>

      <S.Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/43963755?s=460&v=4"
            alt="Márcio França Lima"
          />

          <div>
            <strong>marciofrancalima/mysite</strong>
            <p>My personal website created with Gatsby</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/43963755?s=460&v=4"
            alt="Márcio França Lima"
          />

          <div>
            <strong>marciofrancalima/mysite</strong>
            <p>My personal website created with Gatsby</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/43963755?s=460&v=4"
            alt="Márcio França Lima"
          />

          <div>
            <strong>marciofrancalima/mysite</strong>
            <p>My personal website created with Gatsby</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </S.Repositories>
    </>
  );
};

export default Dashboard;
