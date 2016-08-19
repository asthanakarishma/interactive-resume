/*
$("#main").append("Karishma");
var awesomeThoughts = "I am Karishma and I am AWESOME";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts)

*/

/*var formattedName = HTMLheaderName.replace("%data%", "Karishma Asthana");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

*/

// I consulted this page on the forum to help me with displaying my bio: https://discussions.udacity.com/t/bio-not-displaying-properly/183492
var bio = {
  "name" : "Karishma Asthana",
  "role" : "Aspiring Web Developer",
      "contacts" : {
            "mobile": "512-538-4525",
            "email": "karishma.asthana@trincoll.edu",
            "github": "https://github.com/asthanakarishma",
            "twitter": "@foreverlaughka",
            "location": "Austin, TX"
          },
      "welcomeMessage": "Hi there!",
      "skills": ["Java", "C", "Python", "HTML5", "CSS", "JavaScript", "iOS App Development", "Adobe Photoshop", "Adobe Illustrator", "Adobe Flash", "Public Speaking"],
      "biopic": "images/1932523_10200836880844736_1416304071_o.jpg"
    }

    bio.display = function(){
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      $("#header").prepend(formattedRole);
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      $("#header").prepend(formattedName);
      var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
      var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
      var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
      $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
      var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      if (bio.biopic.length !== 0){
        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedImage);
      }
      $("#header").append(formattedMessage);
      if (bio.skills.length !== 0){
        $("#header").append(HTMLskillsStart);
        var formattedSkill;
        var last = bio.skills.length;
        for(i = 0; i < last; i++){
          formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(formattedSkill);
        }
      }




    }

    bio.display();




var work = {
  "jobs" : [
    {
      "Employer" : "Trinity College Computer Science Dept",
      "title" : "Teaching Assistant",
      "location" : "Hartford, Connecticut",
      "dates" : "January 2016 - May 2016",
      "description" : "I assisted students in coding labs, graded assignments, and held weekly office hours"
    },
    {
      "Employer" : "Trinity College Financial Aid Department",
      "title" : "Admissions & Financial Aid Committee Student Representative",
      "location" : "Hartford, Connecticut",
      "dates" : "2014-present",
      "description" : "I represent the student body on the Admissions & Financial Aid Committee. On the committee we engage in discourse over admissions policies, analyze data trends, and undertake projects regarding new scholarship initiatives, student recruitment, etc."

    },
    {
      "Employer" : "Gravitant, Inc. (Now an IBM company)",
      "title" : "Marketing Intern",
      "location" : "Austin, Texas",
      "dates" : "2013-2014",
      "description" : "Assisted during team meetings, helped to build and maintain company website, polished digital graphics, helped to plan and implement company events"

    },
    {
      "Employer" : "Self-Employed",
      "title" : "Founder & President",
      "location" : "Austin, Texas",
      "dates" : "2013-2014",
      "description" : "A website created to address stress felt by students at high-pressure schools which provides online interactive tutoring when students need tutoring most"
    },
    {
      "Employer" : "Kumon, Inc.",
      "title" : "Junior Tutor",
      "location" : "Austin, Texas",
      "dates" : "March 2013-August 2013",
      "description" : "Helped the children complete their classwork, graded and filed homework"
    }
  ]
};

work.display = function(){
for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].Employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

}
}

work.display();

var pastWork = {
  "projects" : [
    {
      "title" : "Silly Song App",
      "date" : "2016",
      "description" : "As a part of my iOS App Development Nanodegree, I created a simple app that would present a song based on the name input into the interactive box. I applied my knowledge of swift and iOS UI Design in order to complete this project",
      "image" : "images/iOS-app-pic.png"
    },
    {
      "title" : "Portfolio Website",
      "date" : "2016",
      "description" : "I created a sample website that followed a given mock-up by applying my knowledge of HTML5, CSS3, Bootstrap, and Responsive Design",
      "image" : "images/responsive-web-pic-edited.jpeg"

    }
  ]
};


projects.display = function(){
  for (project in pastWork.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", pastWork.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDate = HTMLprojectDates.replace("%data%", pastWork.projects[project].date);
    $(".project-entry:last").append(formattedDate);
    var formattedDescription = HTMLprojectDescription.replace("%data%", pastWork.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if (pastWork.projects[project].image.length > 0) {
      var formattedImage = HTMLprojectImage.replace("%data%", pastWork.projects[project].image);
      $(".project-entry:last").append(formattedImage);
    }
  }
}

projects.display();

var pastEducation = {
 "schools" : [
   {
   "name" : "Westwood High School",
   "location" : "Austin, Texas",
   "degree" : "none",
   "majors" : "none",
   "dates" : "2010-2014",
   "url" : "https://westwood.roundrockisd.org"

 },
 {
   "name" : "Trinity College",
   "location" : "Hartford, Connecticut",
   "degree" : "B.S.",
   "majors" : "Computer Science, Psychology",
   "dates": "2014-2018",
   "url" : "http://www.trincoll.edu"

 }],
 "onlineCourses" : [
   {
    "title" : "Beginning iOS App Development Nanodegree",
    "school" : "Udacity",
    "dates" : "May 2016-August 2016",
    "url" : "https://www.udacity.com/course/beginning-ios-app-development-nanodegree--nd006"
  },
  {
    "title" : "Front-End Web Developer Nanodegree",
    "school" : "Udacity",
    "dates" : "June 2016- in progress",
    "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }
 ]
 };

 education.display = function(){
   for (school in pastEducation.schools){
     $("#education").append(HTMLschoolStart);
     var formattedTitle = HTMLschoolName.replace("%data%", pastEducation.schools[school].name);
     $(".education-entry:last").append(formattedTitle);
     var formattedDate = HTMLschoolDates.replace("%data%", pastEducation.schools[school].dates);
     $(".education-entry:last").append(formattedDate);
     var formattedDegree = HTMLschoolDegree.replace("%data%", pastEducation.schools[school].degree);
     $(".education-entry:last").append(formattedDegree);
     var formattedLocation = HTMLschoolLocation.replace("%data%", pastEducation.schools[school].location);
     $(".education-entry:last").append(formattedLocation);
     var formattedMajor = HTMLschoolMajor.replace("%data%", pastEducation.schools[school].majors);
     $(".education-entry:last").append(formattedMajor);
   }
   $("#education").append(HTMLonlineClasses);
   for (course in pastEducation.onlineCourses){

     var formattedTitle = HTMLonlineTitle.replace("%data%", pastEducation.onlineCourses[course].title);
     $(".education-entry:last").append(formattedTitle);
     var formattedSchool = HTMLonlineSchool.replace("%data%", pastEducation.onlineCourses[course].school);
     $(".education-entry:last").append(formattedSchool);
     var formattedDates = HTMLonlineDates.replace("%data%", pastEducation.onlineCourses[course].dates);
     $(".education-entry:last").append(formattedDates);
     var formattedURL = HTMLonlineURL.replace("%data%", pastEducation.onlineCourses[course].url);
     $(".education-entry:last").append(formattedURL);
   }
 }

 education.display();

 $(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;
  logClicks(x, y);
});


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
