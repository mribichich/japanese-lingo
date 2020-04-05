import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { all, filter, flatten, map, pipe, sortBy } from 'ramda';
import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import { SectionsSelection } from './components/Menu/Menu';
import { shuffle } from './utils';
import words, { Word, Words } from './words';

const Container = styled.div`
  text-align: center;
`;

const WordContainer = styled.div`
  font-size: 60px;
  height: 100px;
`;

const MeaningWord = styled.div`
  font-size: 30px;
  height: 50px;
`;

const showWord = (show: boolean) => (word: string | undefined) => {
  return show && word;
};

const defaultSectionsSelection = () =>
  Object.fromEntries(map(m => [m, false], Object.keys(words))) as SectionsSelection;

const App: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [selectedSections, setSelectedSections] = useState(defaultSectionsSelection());
  const [wordsToUse, setWordsToUse] = useState(shuffle(flatten(Object.values(words))));
  const [japaneseLanguage, setJapaneseLanguage] = useState(true);

  function prevWord() {
    setCurrentWordIndex(currentWordIndex !== 0 ? currentWordIndex - 1 : wordsToUse.length - 1);
    setShowTranslation(false);
  }

  function nextWord() {
    setShowTranslation(true);

    setTimeout(
      () => {
        setCurrentWordIndex(currentWordIndex !== wordsToUse.length - 1 ? currentWordIndex + 1 : 0);
        setShowTranslation(false);
      },
      japaneseLanguage ? 1500 : 3000
    );
  }

  function handleClearSectionsSelectionsChange() {
    setSelectedSections(defaultSectionsSelection());
    setWordsToUse(shuffle(flatten(Object.values(words))));
    setCurrentWordIndex(0);
  }

  function handleSectionSelectionChange(section: keyof Words) {
    return () => {
      const newSelection = { ...selectedSections, [section]: !selectedSections[section] };
      setSelectedSections(newSelection);

      const noneSelected = all(a => !a, Object.values(newSelection));

      const valuesToUse = noneSelected
        ? Object.values(words)
        : pipe(
            filter(f => f[1]) as (list: readonly [keyof Words, boolean][]) => [keyof Words, boolean][],
            map(m => m[0]),
            map(m => words[m])
          )(Object.entries(newSelection) as [keyof Words, boolean][]);

      const newWordsToUse = pipe(flatten as (list: Word[][]) => Word[], shuffle)(valuesToUse);

      setWordsToUse(newWordsToUse);
      setCurrentWordIndex(0);
    };
  }

  function handleLanguageChange(event: React.ChangeEvent<HTMLInputElement>, value: string) {
    setJapaneseLanguage(value === 'true');
  }

  const wordToUse = wordsToUse[currentWordIndex];

  const translations = sortBy(Boolean, [wordToUse.spanish, wordToUse.english]);

  const showJapaneseWord = showWord(japaneseLanguage || showTranslation);
  const showSpanishWord = showWord(!japaneseLanguage || showTranslation);

  return (
    <Container>
      <br />
      <FormControl component="fieldset">
        <RadioGroup row aria-label="language" value={japaneseLanguage} onChange={handleLanguageChange}>
          <FormControlLabel value={true} control={<Radio />} label="Japanese" />
          <FormControlLabel value={false} control={<Radio />} label="Spanish" />
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <Menu
        options={Object.keys(words) as (keyof Words)[]}
        selected={selectedSections}
        onClear={handleClearSectionsSelectionsChange}
        onSelection={handleSectionSelectionChange}
      />
      <br />
      <br />
      <WordContainer>{showJapaneseWord(wordToUse.kanji)}</WordContainer>
      <br />
      <WordContainer>{showJapaneseWord(wordToUse.furigana)}</WordContainer>
      {map(
        m => (
          <div key={m}>
            <br />
            <MeaningWord>{showSpanishWord(m)}</MeaningWord>
          </div>
        ),
        translations
      )}
      <br />
      <br />
      <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={prevWord}>
        prev
      </Button>
      &nbsp;
      <Button variant="outlined" onClick={() => setShowTranslation(true)}>
        show
      </Button>
      &nbsp;
      <Button variant="outlined" endIcon={<ArrowForwardIosIcon />} onClick={nextWord}>
        next
      </Button>
    </Container>
  );
};

export default App;
