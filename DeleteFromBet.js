db.getCollection('Bet').remove({"ClientId" : { $ne: 3}})