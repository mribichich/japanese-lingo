export type SpanishWord = { spanish: string };

export type EnglishWord = { english: string };

export type Word = ((SpanishWord & Partial<EnglishWord>) | (EnglishWord & Partial<SpanishWord>)) & {
  module?: string;
  furigana: string;
  kanji?: string;
};

export type Words = {
  languages: Word[];
  vocabulary: Word[];
  verbs: Word[];
  daysOfWeek: Word[];
  adjetives: Word[];
  colors: Word[];
};

const words: Words = {
  languages: [
    { module: '1', spanish: 'ingles', furigana: 'えいご', kanji: '' },
    { spanish: 'ingles', furigana: 'えいご', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
  ],
  vocabulary: [
    { module: '1', spanish: 'lapicera', furigana: 'ボウルペン', kanji: '' },
    { module: '1', spanish: 'lapiz', furigana: 'えんぴつ', kanji: '' },
    { module: '1', spanish: 'saca puntas', furigana: 'えんぴつけずり', kanji: '鉛筆削り' },
    { module: '1', spanish: 'bolso, cartera', furigana: 'かばん', kanji: '' },
    { module: 'general', spanish: 'pelicula', furigana: 'えいが', kanji: '' },
    { module: 'general', spanish: 'todos los dias', furigana: 'まいにち', kanji: '' },
    { module: 'general', spanish: 'diario', furigana: 'しんぶん', kanji: '' },
    { module: '', spanish: 'beisbol', furigana: 'やきゅう', kanji: '' },
    { module: '', spanish: 'agua', furigana: 'みず', kanji: '水' },
    { module: '', spanish: 'yo', furigana: 'わたし', kanji: '私' },
    { module: '', spanish: 'yo femenino', furigana: 'あたし', kanji: '' },
    { module: '', spanish: 'el', english: 'him', furigana: 'かれ', kanji: '彼' },
    { module: '', spanish: 'casa', furigana: 'いえ', kanji: '' },
    { module: '', spanish: 'hogar', furigana: 'うち', kanji: '' },
    { module: '', spanish: 'vecino', furigana: 'となりのひと', kanji: '' },
    { module: '', spanish: 'mi familia', furigana: 'かぞく', kanji: '' },
    { module: '', spanish: 'nada/todo', english: 'nothing/everything', furigana: 'なにも', kanji: '' },
    { module: '', spanish: 'nadie/todos', english: 'nobory/everybody', furigana: 'だれも', kanji: '' },
    { spanish: 'en nigun lado/en todos lados', english: 'anywhere/everywhere', furigana: 'どこも' },
    { module: '', spanish: 'nunca/siempre', english: 'never/always', furigana: 'いつも', kanji: '' },
    { module: '', spanish: 'este año', furigana: 'ことし', kanji: '' },
    { module: '', spanish: 'año que viene', furigana: 'らいねん', kanji: '' },
    { module: '', spanish: 'año pasado', furigana: 'きょねん', kanji: '' },
    { module: '', spanish: 'nos vemos', furigana: 'またね', kanji: '' },
    { module: '', spanish: 'despues de', furigana: 'のあとで', kanji: '' },
    { module: '', spanish: 'solamente', furigana: 'たけ', kanji: '' },
    { module: '', spanish: 'beisbol', furigana: 'やきゅう', kanji: '' },
    { module: '', spanish: 'fin de semana', furigana: 'しゅうまつ', kanji: '' },
    { module: '', spanish: 'año', furigana: 'ねん', kanji: '' },
    { module: '', spanish: 'cumpleaños', furigana: 'おたんじょうび', kanji: '' },
    { module: '', spanish: 'cuando', furigana: 'いつ', kanji: '' },
    { module: '', spanish: 'amigo', furigana: 'ともだち', kanji: '' },
    { module: '', spanish: 'derecha', furigana: 'みぎ', kanji: '' },
    { module: '', spanish: 'izquierda', furigana: 'ひだり', kanji: '' },
    { module: '', spanish: 'enfrente', furigana: 'まえ', kanji: '' },
    { module: '', spanish: 'detras', furigana: 'うしろ', kanji: '' },
    { module: '', spanish: 'arriba', furigana: 'うえ', kanji: '上' },
    { module: '', spanish: 'debajo', furigana: 'した', kanji: '下' },
    { module: '', spanish: 'adentro', furigana: 'なか', kanji: '中' },
    { module: '', spanish: 'afuera', furigana: 'そと', kanji: '' },
    { module: '', spanish: 'cerca', furigana: 'そば', kanji: '' },
    { module: '', spanish: 'cerca', furigana: 'ちかく', kanji: '' },
    { module: '', spanish: 'al lado', furigana: 'となり', kanji: '' },
    { module: '', spanish: 'en medio de', furigana: 'あいだ', kanji: '' },
    { module: '', spanish: 'lluvia', furigana: 'あめ', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
  ],
  verbs: [
    { module: '1', spanish: 'comer', furigana: 'たべます', kanji: '' },
    { module: '1', spanish: 'tomar', furigana: 'のみます', kanji: '' },
    { module: '1', spanish: 'estudiar', furigana: 'ベんきょうします', kanji: '' },
    { module: '1', spanish: 'hacer', furigana: 'します', kanji: '' },
    { module: '1', spanish: 'leer', furigana: 'よみます', kanji: '' },
    { module: '1', spanish: 'mirar', furigana: 'みます', kanji: '' },
    { module: '1', spanish: 'escuchar', furigana: 'ききます', kanji: '' },
    { module: '2', spanish: 'ir', furigana: 'いきます', kanji: '行きます' },
    { module: '2', spanish: 'venir', furigana: 'きます', kanji: '来ます' },
    { module: '2', spanish: 'volver', furigana: 'かえります', kanji: '' },
    { module: '', spanish: 'to meet', furigana: 'あいます', kanji: '会います' },
    { module: '', spanish: 'to take / to steal', furigana: 'とります', kanji: '摂ります' },
    { module: '', spanish: 'to write', furigana: 'かきます', kanji: '' },
    { module: '', spanish: 'to work', furigana: 'はたらきます', kanji: '' },
    { module: '', spanish: 'despertar', furigana: 'おきます', kanji: '' },
    { module: '', spanish: 'dormir', furigana: 'ねます', kanji: '' },
    { module: '', spanish: 'dar', furigana: 'あげます', kanji: '' },
    { module: '', spanish: 'recibir', furigana: 'もらいます', kanji: '' },
    { module: '', spanish: 'enseñar', furigana: 'おしえます', kanji: '' },
    { module: '', spanish: 'aprender', furigana: 'ならいます', kanji: '' },
    { module: '', spanish: 'prestar', furigana: 'かします', kanji: '' },
    { module: '', spanish: 'tomar prestado', furigana: 'かります', kanji: '' },
    { module: '', spanish: 'hablar', furigana: 'はなします', kanji: '' },
    { module: '', spanish: 'descansar / faltar', furigana: 'やすみます', kanji: '' },
    { module: '', spanish: 'comprar', furigana: 'かいます', kanji: '買います' },
    { module: '', spanish: 'llover', furigana: 'あめがふります', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
  ],
  daysOfWeek: [
    { module: '', spanish: 'domingo', furigana: 'にちようび', kanji: '日曜日' },
    { module: '', spanish: 'lunes', furigana: 'げすようび', kanji: '月曜日' },
    { module: '', spanish: 'martes', furigana: 'かようび', kanji: '火曜日' },
    { module: '', spanish: 'miercoles', furigana: 'すいようび', kanji: '水曜日' },
    { module: '', spanish: 'jueves', furigana: 'もくようび', kanji: '木曜日' },
    { module: '', spanish: 'viernes', furigana: 'きんようび', kanji: '金曜日' },
    { module: '', spanish: 'sabado', furigana: 'どようび', kanji: '土曜日' },
  ],
  adjetives: [
    { spanish: 'grande', furigana: 'おおきい', kanji: '' },
    { spanish: 'chiquito', furigana: 'ちいさい', kanji: '' },
    { spanish: 'rico (sabor)', furigana: 'おいしい', kanji: '' },
    { spanish: 'feo (sabor)', furigana: 'まずい', kanji: '' },
    { spanish: 'dificil', furigana: 'むずかしい', kanji: '' },
    { spanish: 'facil', english: 'easy, kind', furigana: 'やさしい', kanji: '' },
    { spanish: 'caliente', english: 'hot', furigana: 'あつい', kanji: '' },
    { spanish: 'frio (de clima)', furigana: 'さむい', kanji: '' },
    { spanish: 'frio (tangible)', furigana: 'つめたい', kanji: '' },
    { spanish: 'largo (tiempo y espacio)', furigana: 'ながい', kanji: '長い' },
    { spanish: 'corto (tiempo y espacio)', english: 'short', furigana: 'みじかい', kanji: '' },
    { spanish: 'divertido', furigana: 'たのしい', kanji: '' },
    { spanish: 'aburrido', furigana: 'つまらない', kanji: '' },
    { spanish: 'interesante', furigana: 'おもしろい', kanji: '' },
    { spanish: 'hermoso (hombres)', english: 'handson', furigana: 'ハンサムな', kanji: '' },
    { spanish: 'hermoso o limpio (mujeres, paisajes, lugares)', furigana: 'きれいな', kanji: '' },
    { spanish: 'comodo, practico', furigana: 'べんりな', kanji: '' },
    { spanish: 'incomodo, impractico', furigana: 'ふべんな', kanji: '' },
    { spanish: 'amable', furigana: 'しんせつな', kanji: '' },
    { spanish: 'importante, vital', furigana: 'だいじな', kanji: '' },
    { spanish: 'tener tiempo libre, estar libre, no tener nada q hacer, estar al pedo', furigana: 'ひまな', kanji: '' },
    { spanish: 'saludable, que tiene mucha energia', furigana: 'げんきな', kanji: '' },
    { spanish: 'con sueño', english: 'sleepy', furigana: 'ねむい', kanji: '' },
    { spanish: 'adorable, lindo', furigana: 'すてきな', kanji: '' },
    { spanish: 'nuevo', furigana: 'あたらしい', kanji: '' },
    { spanish: 'viejo', furigana: 'ふるい', kanji: '' },
    { spanish: 'malo', furigana: 'わるい', kanji: '' },
    { spanish: 'barato', furigana: 'やすい', kanji: '' },
    { spanish: 'caro', furigana: 'たかい', kanji: '' },
    { spanish: 'bajo', furigana: 'ひくい', kanji: '' },
    { spanish: 'ocupado', furigana: 'いそがしい', kanji: '' },
    { spanish: 'bullilloso, lugar con vida', english: 'busy', furigana: 'にぎやか', kanji: '' },
    { spanish: 'bueno, bien', furigana: 'いい', kanji: '' },
    { english: 'near', furigana: 'ちかい', kanji: '' },
    { english: 'far', furigana: 'とおい', kanji: '' },
    { english: 'heavy', furigana: 'おもい' },
    { english: 'light', furigana: 'かるい' },
    { english: 'bright, light', furigana: 'あかるい' },
    { english: 'dark', furigana: 'くらい' },
    { english: 'dangerous', furigana: 'あぶない' },
    { english: 'wide, spacious', furigana: 'ひろい' },
    { english: 'narrow', furigana: 'せまい' },
    { english: 'hot, spicy', furigana: 'からい' },
    { english: 'noisy', furigana: 'うるさい' },
    { english: 'strong', furigana: 'つよい' },
    { english: 'weak', furigana: 'よわい' },
    { english: 'many, a lot', furigana: 'おおい' },
    { english: 'few, a little', furigana: 'すくない' },
    { english: 'thick (cylindrical object)', furigana: 'ふとい' },
    { english: 'thin (cylindrical object)', furigana: 'ほそい' },
    { english: 'thick (flat object)', furigana: 'あつい' },
    { english: 'thin (flat object)', furigana: 'うすい' },
    { english: 'lovely, cute', furigana: 'かわいい' },
    { english: 'painful', furigana: 'いたい' },
    { english: 'happy, glad', furigana: 'うれしい' },
    { english: 'sad', furigana: 'かなしい' },
    { english: 'young', furigana: 'わかい' },
    { english: 'fast, early', furigana: 'はやい' },
    { english: 'slow, late', furigana: 'おそい' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
    // { module: '', spanish: '',  furigana: '', kanji: '' },
  ],
  colors: [
    { english: 'color', furigana: 'いろ', kanji: '色' },
    { english: 'orange', furigana: 'オレンジ', kanji: '' },
    { english: 'yellow', furigana: 'きいろ', kanji: '黄色' },
    { english: 'blue', furigana: 'あお', kanji: '青' },
    { english: 'red', furigana: 'あか', kanji: '赤' },
    { english: 'green', furigana: 'みどり', kanji: '緑' },
    { english: 'black', furigana: 'くろ', kanji: '黒' },
    { english: 'brown', furigana: 'ちゃいろ', kanji: '茶色' },
    { english: 'pink', furigana: 'ピンク', kanji: '' },
    { english: 'purple', furigana: 'むらさき', kanji: '紫' },
    { english: 'white', furigana: 'しろ', kanji: '白' },
    { english: 'gray', furigana: 'はいいろ', kanji: '灰色' },
    { english: 'gold', furigana: 'きんいろ', kanji: '金色' },
    { english: 'silver', furigana: 'ぎんいろ', kanji: '銀色' },
    // { spanish: '', furigana: '', kanji: '' },
    // { spanish: '', furigana: '', kanji: '' },
  ],
};

export default words;
