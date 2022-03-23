import { Cta, ImageOnTopListWrapper, ItemsWrapper, Title } from "./ImageOnTopList-styles"
import ImageOnTopPromo from "components/promos/ImageOnTopPromo"
import { ButtonPrimary } from 'styles/theme/buttons'
import Link from 'next/link'

export default function ImageOnTopList(props) {
    const { darkBackground, title, ctaText, ctaLink, items, hideTitle, showTimeline } = props.data

    return (
       <ImageOnTopListWrapper darkBackground={darkBackground}>
           {hideTitle
                ? '' 
                : <Title>{title}</Title>
            }
           <ItemsWrapper darkBackground={darkBackground}>
               {props.data.items.map((item, index) => {
                   let lastItem = false

                   if (index == items.length - 1) {
                        lastItem = true
                   }
                   return <ImageOnTopPromo key={index} index={index} data={item} showTimeline={showTimeline} lastItem={lastItem} darkBackground={darkBackground}/>
               })}
           </ItemsWrapper>
           {props.data.ctaLink 
                        ? 
                            <Cta>
                                <Link href={ctaLink}>
                                    <ButtonPrimary>
                                       {ctaText}
                                    </ButtonPrimary>
                                </Link>
                            </Cta>
                        : ''
                    }
       </ImageOnTopListWrapper>
    )
}