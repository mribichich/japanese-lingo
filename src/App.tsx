import React, { useState } from 'react';
import words, { Words, Word } from './words';
import styled from 'styled-components';
import { flatten } from 'ramda';
import { shuffle } from './utils';

const Container = styled.div`
  text-align: center;
`;

const SectionButton = styled.button<{ current?: boolean }>`
  font-size: 16px;
  font-weight: ${props => (props.current ? 'bold' : 'normal')};
`;

const WordContainer = styled.div`
  font-size: 60px;
  height: 100px;
`;

const MeaningWord = styled.div`
  font-size: 30px;
  height: 50px;
`;

const ControlsButton = styled.button`
  font-size: 16px;
`;

const App: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [section, setSection] = useState('all');
  const [wordsToUse, setWordsToUse] = useState(shuffle(flatten<Word>(Object.values(words))));

  function prevWord() {
    setCurrentWordIndex(currentWordIndex !== 0 ? currentWordIndex - 1 : wordsToUse.length - 1);
    setShowTranslation(false);
  }

  function nextWord() {
    setShowTranslation(true);

    setTimeout(() => {
      setCurrentWordIndex(currentWordIndex !== wordsToUse.length - 1 ? currentWordIndex + 1 : 0);
      setShowTranslation(false);
    }, 1500);
  }

  function handleOnSectionChange(section: string) {
    return () => {
      setSection(section);
      setWordsToUse(section === 'all' ? shuffle(flatten<Word>(Object.values(words))) : words[section]);
    };
  }

  const wordToUse = wordsToUse[currentWordIndex];

  return (
    <Container>
      <br />
      <br />
      <div>
        <SectionButton current={section === 'all'} onClick={handleOnSectionChange('all')}>
          all
        </SectionButton>
        &nbsp;
        {Object.keys(words).map(m => (
          <span key={m}>
            <SectionButton current={section === m} onClick={handleOnSectionChange(m)}>
              {m}
            </SectionButton>
            &nbsp;
          </span>
        ))}
      </div>
      <br />
      <br />
      <WordContainer>{wordToUse.kanji}</WordContainer>
      <br />
      <WordContainer>{wordToUse.furigana || wordToUse.romaji}</WordContainer>
      <br />
      <MeaningWord>{showTranslation && wordToUse.spanish}</MeaningWord>
      <br />
      <MeaningWord>{showTranslation && wordToUse.english}</MeaningWord>
      <br />
      <br />
      <ControlsButton onClick={prevWord}>prev</ControlsButton>&nbsp;
      <ControlsButton onClick={() => setShowTranslation(true)}>show</ControlsButton>&nbsp;
      <ControlsButton onClick={nextWord}>next</ControlsButton>
    </Container>
  );
};

export default App;
