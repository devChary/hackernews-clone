import { Component } from 'react';
import Error from 'next/error';
import fetch from 'isomorphic-fetch';

import StoryList from '../components/StoryList';

class Index extends Component {

    render() {
        const { stories } = this.props;
        if (!stories.length) {
            return <Error statusCode={503} />;
        }

        return (
            <>
                <h1> Hackernews Clone </h1>
                <StoryList stories={stories} />
            </>
        )
    }
}

Index.getInitialProps = async () => {
    let stories;

    try {
        const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
        stories = await res.json();
    } catch (err) {
        console.log(err);
        stories = [];
    }

    return { stories };
}

export default Index;