// const userDetailsCollection = require("../user_vote_details_collection");

// async function updateCandidateDetails(candidateId) {
//   let collection = await userDetailsCollection;

//   let response = {
//     status: 0,
//     message: "Candidate Deleted Sucessfully",
//     data: candidateId,
//   };

//   const deletionId = { id: candidateId };

//   let deleteResult = await collection.deleteOne(deletionId);

//   if (deleteResult.acknowledged) {
//     return response;
//   } else {
//     response["status"] = 2;
//     response["message"] = "Data Save nhi hua Phir se try kro :) :)";

//     return response;
//   }
// }

// module.exports = updateCandidateDetails;