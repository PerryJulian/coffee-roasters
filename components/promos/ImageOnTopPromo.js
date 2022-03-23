import Image from 'next/image'
import { Description, ImageOnTopWrapper, Index, Media, Title, Date, ContactField } from "./ImageOnTopPromo-styles";
import Timeline from '@/components/timeline/Timeline';

export default function ImageOnTopPromo(props) {
    const { darkBackground, lastItem, showTimeline } = props
    const { media, title, contact, description } = props.data

    return (
       <ImageOnTopWrapper>
           {showTimeline ? 
            <Timeline darkBackground={darkBackground} lastItem={lastItem}/> :
            ""
           }
            {props.data.media ? 
                <Media>
                    <Image 
                        src={media}
                        layout='fill'
                    />
                </Media> : 
                <Index>{`0${props.index + 1}`}</Index>
            }
            <Title darkBackground={darkBackground}>{title}</Title>
            {description ? <Description darkBackground={darkBackground}>{description}</Description> : ''}
            {contact ? <DateComponent info={contact}/> : ''}
       </ImageOnTopWrapper>
    )
}

function DateComponent(props) {
    const { street, city, state, phone } = props.info
    return (
        <Date>
            <ContactField>{street}</ContactField>
            <ContactField>{city}</ContactField>
            <ContactField>{state}</ContactField>
            <ContactField>{phone}</ContactField>
        </Date>
    )
}