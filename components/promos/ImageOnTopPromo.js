import Image from 'next/image'
import { Description, ImageOnTopWrapper, Index, Media, Title, Date, ContactField } from "./ImageOnTopPromo-styles";
import Timeline from '@/components/timeline/Timeline';

export default function ImageOnTopPromo(props) {
    const showTimeline = props.showTimeline
    const lastItem = props.lastItem
    const { media, contact, description } = props.data

    console.log(props);

    console.log(media);

    return (
       <ImageOnTopWrapper>
           {showTimeline ? 
            <Timeline lastItem={lastItem}/> :
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
            <Title>{props.data.title}</Title>
            {description ? <Description>{props.data.description}</Description> : ''}
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