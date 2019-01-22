db.Bet.aggregate([
   {
     $lookup:
       {
         from: "CustomerRating",
         localField: "_id",
         foreignField: "CustomerId",
         as: "rating_docs"
       }
  },
  {
      $match : {ClientCustomerId : "00121_so"}
  },
  { 
        $project : {"rating_docs.CustomerId" : 0, "rating_docs._id" : 0} 
    },
])