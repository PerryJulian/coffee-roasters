import { Cta, ImageOnTopListWrapper, ItemsWrapper, Title } from "./ImageOnTopList-styles"
import ImageOnTopPromo from "components/promos/ImageOnTopPromo"
import { ButtonPrimary } from 'styles/theme/buttons'
import Link from 'next/link'

export default function ImageOnTopList(props) {
    const hideTitle = props.data.hideTitle
    const items = props.data.items
    const fullWidth = props.data.fullWidth
    const showTimeline = props.data.showTimeline
    const { style } = props.data

    return (
       <ImageOnTopListWrapper fullWidth={fullWidth}>
           {hideTitle
                ? '' 
                : <Title>{props.data.title}</Title>
            }
           <ItemsWrapper>
               {props.data.items.map((item, index) => {
                   let lastItem = false

                   if (index == items.length - 1) {
                        lastItem = true
                   }
                   return <ImageOnTopPromo style={style} key={index} index={index} data={item} showTimeline={showTimeline} lastItem={lastItem}/>
               })}
           </ItemsWrapper>
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
       </ImageOnTopListWrapper>
    )
}