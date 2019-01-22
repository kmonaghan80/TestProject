db.Customer.aggregate([
    {
        $unwind : "$Rating"
    },
    {
	$match: { Rating : {$ne : null}}
    },
    {
        $addFields: {
              "CustomerId" : "$_id",
              "Rating" : "$Rating.Rating",
              "UserId" : "$Rating.UserId",
              "Datestamp" : "$Rating.Datestamp",
              "ModifiedDatestamp" :  "$Rating.ModifiedDatestamp"
           }
    },
    { 
        $project : {CustomerId : 1, "Rating" : 1, "UserId" : 1, "Datestamp" : 1, "ModifiedDatestamp" : 1, _id : 0} 
    },
    {
        $out : "CustomerRating"
    }
])
    