class TweetService {

    private tweets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

    async getAllTweets() {
        return this.tweets;
    }
}

export default TweetService;