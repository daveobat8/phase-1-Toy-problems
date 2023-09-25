// Student Grade Generator
//function for generation of grades.
function calculatedGrades (marks){
   if (marks > 79) {
     return "A";
   }
   else if (marks <=79 && marks >= 60){
       return "B";
   }
   else if (marks >= 50 && marks <= 59){
    return "C";
   }
   else if (marks >= 40 && marks <= 49){
    return "D";
   }
   else if ( marks < 40){
    return "E"; 
   }
}

//create user input log
function studentsMarks (){
    let marks;
    
}