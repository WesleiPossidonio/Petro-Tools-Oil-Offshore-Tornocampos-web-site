import * as zod from 'zod'
import ReCAPTCHA from 'react-google-recaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import api from '../../services/api'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { EnvelopeOpen, MapPinLine, PhoneCall } from '@phosphor-icons/react'
import { Input } from '../Input'
import { TextRegular, TitleText } from '../typograph'
import { Button } from '../Button'
import { useEffect, useState } from 'react'

import {
  BoxIcon,
  ContainerContact,
  ContentInfo,
  ContentText,
  Form,
  TextArea,
} from './styled'

const sendEmailFormSchema = zod.object({
  name: zod.string().min(3, 'Por gentileza, digite o seu nome'),
  email: zod.string().email('Por gentileza, digite o seu email corretamente'),
  phone: zod
    .string()
    .min(11, 'Por gentileza, digite o numero de telefone corretamente')
    .max(11, 'Por gentileza, digite o numero sem caractere'),
  subject_text: zod.string().min(3, 'Digite sua dúvida'),
  subject_title: zod.string().min(3, 'Digite o Assunto da sua dúvida'),
})

type createSendEmailFormInputs = zod.infer<typeof sendEmailFormSchema>

export const ContactSection = () => {
  const [captcha, setCaptcha] = useState<string | null>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createSendEmailFormInputs>({
    resolver: zodResolver(sendEmailFormSchema),
  })

  useEffect(() => {
    Aos.init()
  }, [])

  const handleSendEmail = async (data: createSendEmailFormInputs) => {
    const { email, name, phone, subject_text, subject_title } = data

    if (!captcha) {
      toast.error('Captcha pendente!', {
        position: 'top-right',
      })
      return
    }

    const dataSendEmail = {
      email,
      name,
      phone,
      subject_text,
      subject_title,
      captcha, // Incluindo o token reCAPTCHA
    }

    try {
      await toast.promise(api.post('sendMail', dataSendEmail), {
        pending: 'Verificando seus dados',
        success: 'Dúvida enviada com sucesso!',
        error: 'Verifique seus dado e faça novamente! 🤯',
      })
      reset()
      setCaptcha(null) // Resetando o captcha após o envio
    } catch (error) {
      console.log(error)
    }
  }

  const handleCapcha = (token: string | null) => {
    setCaptcha(token)
  }

  return (
    <ContainerContact id="contact">
      <Form
        onSubmit={handleSubmit(handleSendEmail)}
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Input
          placeholder="Nome:"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          placeholder="E-Mail:"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          placeholder="Telefone:"
          {...register('phone')}
          error={errors.phone?.message}
        />

        <Input
          type="tel"
          placeholder="Assunto:"
          {...register('subject_title')}
          error={errors.subject_title?.message}
        />

        <TextArea
          placeholder="Escreva a sua Dúvida"
          {...register('subject_text')}
          error={errors.subject_text?.message}
        />
        <div id="reCaptcha">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
            onChange={handleCapcha}
          />
        </div>

        <Button btnLarge={false} bgColor="bg" type="submit">
          Enviar
        </Button>
      </Form>

      <ContentText data-aos="fade-left" data-aos-duration="1000">
        <TitleText size="s" color="bg">
          - Contatos
        </TitleText>
        <TitleText size="l">
          Fale Conosco e Faça Seu Projeto Acontecer
        </TitleText>
        <TextRegular>
          Estamos aqui para ouvir suas necessidades e oferecer soluções sob
          medida para o seu projeto.
        </TextRegular>

        <ContentInfo>
          <BoxIcon>
            <PhoneCall size={40} />
          </BoxIcon>
          <div>
            <TitleText size="s">Telefone</TitleText>
            <TextRegular size="sm">
              <a href="tel:+55222765-1377">(22) 2765-1377</a>{' '}
            </TextRegular>
          </div>
        </ContentInfo>

        <ContentInfo>
          <BoxIcon>
            <EnvelopeOpen size={40} />
          </BoxIcon>
          <div>
            <TitleText size="s">Email:</TitleText>
            <TextRegular size="sm">
              <a href="mailto:petro@petrotoolsoffshore.com.br">
                petro@petrotoolsoffshore.com.br
              </a>{' '}
            </TextRegular>
          </div>
        </ContentInfo>

        <ContentInfo>
          <BoxIcon>
            <MapPinLine size={40} />
          </BoxIcon>
          <div>
            <TitleText size="s">Endereço:</TitleText>
            <TextRegular size="sm">
              {' '}
              <a
                href="https://maps.app.goo.gl/FvcfEvQVrKsUwKV28"
                target="_blank"
              >
                Av. Pres. Kennedy, 996/1000 - Vila da Rainha, <br /> Campos dos
                Goytacazes - RJ, 28020-010
              </a>
            </TextRegular>
          </div>
        </ContentInfo>
      </ContentText>
    </ContainerContact>
  )
}
