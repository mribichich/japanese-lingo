import { flatten, ifElse, map, pipe, sortBy } from 'ramda';
import React, { useState } from 'react';
import styled from 'styled-components';
import { shuffle } from './utils';
import words, { Word, Words } from './words';

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
  const [section, setSection] = useState<keyof Words | undefined>(undefined);
  const [wordsToUse, setWordsToUse] = useState(shuffle(flatten(Object.values(words))));

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

  function handleOnSectionChange(section: keyof Words | undefined) {
    return () => {
      setSection(section);
      setWordsToUse(
        pipe<keyof Words | undefined, Word[], Word[]>(
          ifElse(
            m => !m,
            () => flatten(Object.values(words)),
            (m: keyof Words) => words[m]
          ),
          shuffle
        )(section)
      );
      setCurrentWordIndex(0);
    };
  }

  const wordToUse = wordsToUse[currentWordIndex];

  const translations = sortBy(Boolean, [wordToUse.spanish, wordToUse.english]);

  return (
    <Container>
      <br />
      <br />
      <div>
        <SectionButton current={!section} onClick={handleOnSectionChange(undefined)}>
          all
        </SectionButton>
        &nbsp;
        {Object.keys(words).map(m => (
          <span key={m}>
            <SectionButton current={section === m} onClick={handleOnSectionChange(m as keyof Words)}>
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
      <WordContainer>{wordToUse.furigana}</WordContainer>
      {map(
        m => (
          <>
            <br />
            <MeaningWord>{showTranslation && m}</MeaningWord>
          </>
        ),
        translations
      )}
      <br />
      <br />
      <ControlsButton onClick={prevWord}>prev</ControlsButton>&nbsp;
      <ControlsButton onClick={() => setShowTranslation(true)}>show</ControlsButton>&nbsp;
      <ControlsButton onClick={nextWord}>next</ControlsButton>
    </Container>
  );
};

export default App;
