# Marvel-Backend


Type : GET
Route : "/characters"
// ----------------------------------
// Route to get a list of characters
// ----------------------------------
Query Info Required
limit between 1 and 100 No
skip number of results to ignore No
name search a character by name No

Type : GET
Route :"/character/:id"
// ----------------------------------------------
// Route to get the infos of a specific character
// ----------------------------------------------
Params Info Required
characterId characters mongoDB id Yes

Type : GET
Route : "/comics/:id"
// ----------------------------------------------------
// Get a list of comics containing a specific character
// ----------------------------------------------------
Params Info Required
characterId characters mongoDB id Yes

Type : GET
Route = "/comics"
// ------------------------------
// Route to get a list of comics
// ------------------------------
Query Info Required
limit between 1 and 100 No
skip number of results to ignore No
title search a comic by title No
