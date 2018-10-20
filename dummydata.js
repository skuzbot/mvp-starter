const dummyData = {
  "metadata": {
    "provider": "Oxford University Press"
  },
  "results": [{
    "id": "telephone",
    "language": "en",
    "lexicalEntries": [{
        "derivatives": [{
            "id": "telephoner",
            "text": "telephoner"
          },
          {
            "id": "telephonic",
            "text": "telephonic"
          }
        ],
        "entries": [{
          "etymologies": [
            "mid 19th century: from tele- + -phone"
          ],
          "grammaticalFeatures": [{
            "text": "Singular",
            "type": "Number"
          }],
          "homographNumber": "000",
          "senses": [{
              "definitions": [
                "a system for transmitting voices over a distance using wire or radio, by converting acoustic vibrations to electrical signals"
              ],
              "domains": [
                "Telecommunications"
              ],
              "examples": [{
                "text": "a telephone call"
              }],
              "id": "m_en_gbus1037280.005",
              "short_definitions": [
                "system for transmitting voices over distance using wire or radio"
              ],
              "subsenses": [{
                "definitions": [
                  "an instrument used as part of a telephone system, typically a single unit including a handset with a transmitting microphone and a set of numbered buttons by which a connection can be made to another such instrument"
                ],
                "domains": [
                  "Telecommunications"
                ],
                "examples": [{
                    "text": "a telephone receiver"
                  },
                  {
                    "text": "it was eight-thirty when the telephone rang, and I knew it was Chandler"
                  }
                ],
                "id": "m_en_gbus1037280.007",
                "short_definitions": [
                  "instrument used as part of telephone system"
                ],
                "thesaurusLinks": [{
                    "entry_id": "telephone",
                    "sense_id": "t_en_gb0014676.001"
                  },
                  {
                    "entry_id": "phone",
                    "sense_id": "t_en_gb0011037.002"
                  }
                ]
              }]
            },
            {
              "crossReferenceMarkers": [
                "Also called Chinese whispers"
              ],
              "crossReferences": [{
                "id": "chinese_whispers",
                "text": "Chinese whispers",
                "type": "see also"
              }],
              "definitions": [
                "a game in which a sentence or phrase becomes distorted by being passed along to the next person in a whisper."
              ],
              "domains": [
                "Games"
              ],
              "id": "m_en_gbus1037280.018",
              "regions": [
                "US"
              ],
              "short_definitions": [
                "game in which message is distorted by being passed around in whisper"
              ]
            }
          ]
        }],
        "language": "en",
        "lexicalCategory": "Noun",
        "pronunciations": [{
            "audioFile": "http://audio.oxforddictionaries.com/en/mp3/telephone_us_1.mp3",
            "dialects": [
              "American English"
            ],
            "phoneticNotation": "IPA",
            "phoneticSpelling": "ˈtɛləˌfoʊn"
          },
          {
            "dialects": [
              "American English"
            ],
            "phoneticNotation": "respell",
            "phoneticSpelling": "ˈteləˌfōn"
          }
        ],
        "text": "telephone"
      },
      {
        "derivatives": [{
            "id": "telephonic",
            "text": "telephonic"
          },
          {
            "id": "telephoner",
            "text": "telephoner"
          }
        ],
        "entries": [{
          "grammaticalFeatures": [{
              "text": "Transitive",
              "type": "Subcategorization"
            },
            {
              "text": "Present",
              "type": "Tense"
            }
          ],
          "homographNumber": "001",
          "senses": [{
            "definitions": [
              "contact (someone) using the telephone"
            ],
            "domains": [
              "Telecommunications"
            ],
            "examples": [{
              "text": "he telephoned his wife at 9.30"
            }],
            "id": "m_en_gbus1037280.020",
            "short_definitions": [
              "contact someone using telephone"
            ],
            "subsenses": [{
                "definitions": [
                  "make a telephone call"
                ],
                "examples": [{
                  "text": "she telephoned for help"
                }],
                "id": "m_en_gbus1037280.026",
                "notes": [{
                  "text": "no object",
                  "type": "grammaticalNote"
                }],
                "short_definitions": [
                  "make telephone call"
                ]
              },
              {
                "definitions": [
                  "send (a message) by telephone"
                ],
                "domains": [
                  "Telecommunications"
                ],
                "examples": [{
                  "text": "Barbara had telephoned the news"
                }],
                "id": "m_en_gbus1037280.027",
                "short_definitions": [
                  "send message by telephone"
                ]
              }
            ],
            "thesaurusLinks": [{
              "entry_id": "telephone",
              "sense_id": "t_en_gb0014676.002"
            }]
          }]
        }],
        "language": "en",
        "lexicalCategory": "Verb",
        "pronunciations": [{
            "dialects": [
              "American English"
            ],
            "phoneticNotation": "respell",
            "phoneticSpelling": "ˈteləˌfōn"
          },
          {
            "audioFile": "http://audio.oxforddictionaries.com/en/mp3/telephone_us_1.mp3",
            "dialects": [
              "American English"
            ],
            "phoneticNotation": "IPA",
            "phoneticSpelling": "ˈtɛləˌfoʊn"
          }
        ],
        "text": "telephone"
      }
    ],
    "type": "headword",
    "word": "telephone"
  }]
}

console.log(dummyData.results[0].word); //word
// console.log(dummyData.results[0].lexicalEntries); //array of all versions of the word NOUN, VERB etc..
 console.log(dummyData.results[0].lexicalEntries[0].lexicalCategory); // lexicalCatagory
//console.log(dummyData.results[0].lexicalEntries[0].entries[0].etymologies[0]); // etymologies
//console.log(dummyData.results[0].lexicalEntries[0].entries[0].senses[1]); // array of dictionary entries
// console.log(dummyData.results[0].lexicalEntries[0].entries[0].senses[0].definitions); // array of defenitions
//console.log(dummyData.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text); // example uses
// console.log(dummyData.results[0].lexicalEntries[0].pronunciations[0].audioFile); // pronuciation url

module.exports = dummyData;

const oxfordPattern = {
  baseUrl: 'https://od-api.oxforddictionaries.com/api/v1',
  GETroute: '/entries/en/{word_id}/regions=us',
  headers: {
    "Accept": "application/json",
    "app_id": "OXFORD_APP_ID",
    "app_key": "OXFORD_KEY"
  }

}

const senses = [{
    definitions: ['a system for transmitting voices over a distance using wire or radio, by converting acoustic vibrations to electrical signals'],
    domains: ['Telecommunications'],
    examples: [
      [Object]
    ],
    id: 'm_en_gbus1037280.005',
    short_definitions: ['system for transmitting voices over distance using wire or radio'],
    subsenses: [
      [Object]
    ]
  },
  {
    crossReferenceMarkers: ['Also called Chinese whispers'],
    crossReferences: [
      [Object]
    ],
    definitions: ['a game in which a sentence or phrase becomes distorted by being passed along to the next person in a whisper.'],
    domains: ['Games'],
    id: 'm_en_gbus1037280.018',
    regions: ['US'],
    short_definitions: ['game in which message is distorted by being passed around in whisper']
  }
];

let wordDataObject = {
  id: "database",
  language: "en",
  lexicalEntries: [
    {
      entries: [
        {
          grammaticalFeatures: [{ text: "Singular", type: "Number" }],
          homographNumber: "000",
          senses: [
            {
              definitions: [
                "a structured set of data held in a computer, especially one that is accessible in various ways"
              ],
              domains: ["Computing"],
              examples: [
                { text: "a database covering nine million workers" },
                { text: "database systems" }
              ],
              id: "m_en_gbus0251410.007",
              short_definitions: ["structured set of data held in computer"]
            }
          ]
        }
      ],
      language: "en",
      lexicalCategory: "Noun",
      pronunciations: [
        {
          dialects: ["American English"],
          phoneticNotation: "respell",
          phoneticSpelling: "ˈdādəˌbās"
        },
        {
          dialects: ["American English"],
          phoneticNotation: "respell",
          phoneticSpelling: "ˈdadəˌbās"
        },
        {
          audioFile:
            "http://audio.oxforddictionaries.com/en/mp3/database_us_2_rr.mp3",
          dialects: ["American English"],
          phoneticNotation: "IPA",
          phoneticSpelling: "ˈdædəˌbeɪs"
        },
        {
          audioFile:
            "http://audio.oxforddictionaries.com/en/mp3/database_us_1_rr.mp3",
          dialects: ["American English"],
          phoneticNotation: "IPA",
          phoneticSpelling: "ˈdeɪdəˌbeɪs"
        }
      ],
      text: "database"
    }
  ],
  type: "headword",
  word: "database"
};

console.log(wordDataObject.lexicalEntries[0].entries.lexicalCategory);