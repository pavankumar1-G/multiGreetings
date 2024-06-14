import './index.css'

import {ButtonItem, Button} from './styledComponents'

const MultilingualGreetingTabButton = props => {
  const {updateLanguage, languageDetails, isActiveLanguge} = props
  const {id, buttonText} = languageDetails
  const backgroundColor = isActiveLanguge ? '#db1c48' : 'transparent'
  const textColor = isActiveLanguge ? '#ffffff' : '#db1c48'

  const onClickTabButton = () => {
    updateLanguage(id)
  }

  return (
    <ButtonItem>
      <Button
        type="button"
        onClick={onClickTabButton}
        backgroundColor={backgroundColor}
        textColor={textColor}
      >
        {buttonText}
      </Button>
    </ButtonItem>
  )
}
export default MultilingualGreetingTabButton
