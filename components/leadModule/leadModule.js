import { LeadModuleContainer, LeadModuleContent, Title, Description, Cta } from './leadModule-styles'
import { ButtonPrimary } from 'styles/theme/buttons'
import Link from 'next/link'

export default function LeadModule(props) {

    return (
       <LeadModuleContainer mobileImage={props.data.mobileImage} tabletImage={props.data.tabletImage} desktopImage={props.data.desktopImage}>
           <LeadModuleContent>
                <Title>{props.data.title}</Title>
                <Description>{props.data.description}</Description>
                    {props.data.ctaLink 
                        ? 
                            <Cta>
                                <Link href={props.data.ctaLink}>
                                    <ButtonPrimary>
                                       {props.data.ctaText}
                                    </ButtonPrimary>
                                </Link>
                            </Cta>
                        : ''
                    }
            </LeadModuleContent>
        </LeadModuleContainer> 
    )
}