db.Customer.aggregate([
   {
     $lookup:
       {
         from: "CustomerRating",
         localField: "ClientCustomerId",
         foreignField: "ClientCustomerId",
         as: "rating_docs"
       }
  },
  {
      $match : {ClientCustomerId : "00121_so"}
  }
])