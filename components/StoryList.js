import StoryDetail from './StoryDetail';

const StoryList = ({ stories }) => (
    <div className="story-list">
        {stories.map(story => (
            <StoryDetail story={story} />
        ))}
        <style jsx>{`
            .story-list {
                padding: 0 1em;
            }
        `}</style>
    </div>
)

export default StoryList;