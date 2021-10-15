import News from '../modal/news.js';


export const getNews = async (request, response) => {
    try {
        
 //const size = Number(request.query.size);
        //const skip = Number(request.query.page);
   
       // const skip=1;
       // console.log(size, skip)
      //  const data = await News.find({}).limit(size).skip(size * skip);
      const data = await News.find({});
      // console.log(data.count());
        response.status(200).json(data);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
        response.status('Error in news-Controller.js');
    }
}