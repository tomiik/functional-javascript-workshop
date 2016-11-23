function checkUsersValid(goodUsers) {
   return function allUsersValid(submittedUsers) {
     // SOLUTION GOES HERE
     return submittedUsers.every(function(submittedUser){
        return goodUsers.some(function(goodUser){
           return goodUser === submittedUser;})
     });
   };
 }

 module.exports = checkUsersValid
