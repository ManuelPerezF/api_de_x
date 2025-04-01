import express from "express";
import TweetService from "../db/tweet";

const tweetService = new TweetService();

class TweetController {
    async getAllTweets() {
        //return [1,2,3,4,5,6,7,8,9,10]
        const tweets = await tweetService.getAllTweets();
        return tweets.filter(tweet => tweet % 2 === 0);
        
        
    
    }
}
export default TweetController;

