import { TimelineWrapper, TimelineItem } from "./Timeline-styles"

export default function Timeline(props) {
    const { lastItem, darkBackground } = props

    return (
       <TimelineWrapper darkBackground={darkBackground} lastItem={lastItem}>
           <TimelineItem darkBackground={darkBackground}/>
       </TimelineWrapper>
    )
}