import TopicCardActions from '../TopicCardActions';
import TopicCardBody from '../TopicCardBody';
import TopicCardHeader from '../TopicCardHeader';

function TopicCard() {
    return (
        //criar o avatar, nome dele e o tempo que foi postado, respectivamente
        <div id="topic-card">
            <TopicCardHeader/>
            <TopicCardBody/>
            <TopicCardActions/>

        </div>
    )
}

export default TopicCard;