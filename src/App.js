import {Component} from 'react'

import MultilingualGreetingItem from './components/MultilingualGreetingItem'
import MultilingualGreetingTabButton from './components/MultilingualGreetingTabButton'

import './App.css'

import {
  MultilingualGreetingAppContainer,
  MultilingualGreetingsHeading,
  LanguageTabButtonList,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeLanguageId: languageGreetingsList[0].id}

  getRespectiveLanguage = () => {
    const {activeLanguageId} = this.state
    const filteredLanguage = languageGreetingsList.filter(
      eachLanguage => eachLanguage.id === activeLanguageId,
    )
    return filteredLanguage
  }

  updateLanguage = id => {
    this.setState({activeLanguageId: id})
  }

  render() {
    const {activeLanguageId} = this.state
    const selectedLanguage = this.getRespectiveLanguage()
    return (
      <MultilingualGreetingAppContainer>
        <MultilingualGreetingsHeading>
          Multilingual Greetings
        </MultilingualGreetingsHeading>
        <LanguageTabButtonList>
          {languageGreetingsList.map(eachLanguage => (
            <MultilingualGreetingTabButton
              key={eachLanguage.id}
              languageDetails={eachLanguage}
              updateLanguage={this.updateLanguage}
              isActiveLanguge={activeLanguageId === eachLanguage.id}
            />
          ))}
        </LanguageTabButtonList>

        {selectedLanguage.map(language => (
          <MultilingualGreetingItem
            key={language.id}
            languageDetails={language}
          />
        ))}
      </MultilingualGreetingAppContainer>
    )
  }
}

export default App
