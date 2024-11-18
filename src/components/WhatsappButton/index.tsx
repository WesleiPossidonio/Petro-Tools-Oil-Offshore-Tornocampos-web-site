import { ContainerWhatsappButton, ImageWhatsapp } from './styled'

import ImgWhatsapp from '../../assets/whatsapp.png'

export const WhatsappButton = () => {
  return (
    <ContainerWhatsappButton
      href="https://api.whatsapp.com/send/?phone=5522997657098&text&type=phone_number&app_absent=0"
      target="_blank"
    >
      <ImageWhatsapp
        src={ImgWhatsapp}
        title="Entre em Contato Conosco!"
        alt=""
      />
    </ContainerWhatsappButton>
  )
}
