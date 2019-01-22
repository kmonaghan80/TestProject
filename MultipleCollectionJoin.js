db.Bet.aggregate([
   {
      $lookup:{
         from:"Customer",
         localField:"CustomerId",
         foreignField:"_id",
         as:"lsg"
      }
   },
   {
      $unwind:"$lsg"
   },
   {
      $lookup:{
         from:"CustomerRating",
         localField:"CustomerId",
         foreignField:"CustomerId",
         as:"lsg2"
      }
   },
   {
      $unwind:"$lsg2"
   },
   {
      $project:{
         "_id":1,
         "MarketId":1,
         "BiggestLoss":"$lsg.BiggestLoss",
         "Rating":"$lsg2.Rating"
      }
   }
]);