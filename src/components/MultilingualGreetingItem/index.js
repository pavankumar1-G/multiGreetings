import {ImageContainer, ImageItem} from './styledComponents'

const MultilingualGreetingItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <ImageContainer>
      <ImageItem src={imageUrl} alt={imageAltText} />
    </ImageContainer>
  )
}
export default MultilingualGreetingItem
