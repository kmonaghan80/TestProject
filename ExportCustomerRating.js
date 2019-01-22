db.Customer.aggregate([
    {
	$match: { Rating : {$ne : null}}
    },
    {
        $addFields: {
              "CustomerId" : "$_id"
           }
    },
    { 
        $project : {CustomerId : 1, Rating : 1, _id : 0} 
    },
    {
        $out : "CustomerRating"
    }
])
    