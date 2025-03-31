import { Request, Response, NextFunction } from 'express';

class TweetHttpHandler{
    async getTweets(request: Request, response: Response, next: NextFunction)  {
        try {
            const tweets = await this.getTweets();
            response.json(tweets);
        } catch (error) {
            next(error)
            //response.status(500).json({ error: 'Failed to fetch tweets' });
        }
    }
}