import { TimelineWrapper, TimelineItem } from "./Timeline-styles"

export default function Timeline(props) {
    const lastItem = props.lastItem

    return (
       <TimelineWrapper lastItem={lastItem}>
           <TimelineItem/>
       </TimelineWrapper>
    )
}