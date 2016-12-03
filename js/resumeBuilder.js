/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Bruce Lu",
    "role": "Web Developer",
    "skills": [
    "awsomeness", "delivering things", "running", "cooking", "biking"
    ],
    "contacts": {
        "mobile": "18612232434",
        "email": "lue2048@163.com",
        "github": "smallbonelu",
        "twitter": "@smallbonelu",
        "location": "Shanghai",
        "blog": "http://blog.smallbonecar.com"
    },
    "wellcomeMessage": "Welcome to my site",
    "bioPic": "images/fry.jpg"
};

var work = {
    "jobs": [
    {
        "employer": "ChinaSoft.Inc",
        "title": "Product Feedback Analysts Engineer",
        "dates": "in progress",
        "description": "Analysts Office 365 Product supported cases and provide feedback.",
        "location": "Shanghai"
    },
    {
        "employer": "Lanmon.Inc",
        "title": "System Administrator",
        "dates": "March 2011 - Feb 2013",
        "description": "Company System Administrator",
        "location": "Shanghai"
    }
  ]
};

var education = {
    "schools": [
    {
        "name": "ZhongNan University",
        "degree": "Masters",
        "majors": ["Network Engineering", "Computer Science"],
        "dates": "2009 Jan - 2015 Jan",
        "location": "Changsha",
        "city": "Hunan",
        "url": "http://example.com"
    },
    {
        "name": "Shanghai JiaoTong University",
        "degree": "BA",
        "majors": ["CS"],
        "dates": "in progress",
        "city": "Shanghai",
        "location": "Shanghai",
        "url": "http://example.com"
    }
    ],
    "onlineCourses": [
    {
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "dates": "2016 Oct - 2016 Nov",
        "url": "http://www.Udacity.com/"
    }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014 Feb - 2014 May",
            "description": "Build Coding Guide website.",
            "images": [ "https://www.clarity-ventures.com/portals/0/images/resources/custom-programming-design-project-management.png", "https://www.clarity-ventures.com/portals/0/images/resources/custom-programming-design-project-management.png" ]
        },
        {
            "title": "Sample Project 2",
            "dates": "2014 Jun - 2014 Jul",
            "description": "The expectations for our work have matured significantly over the last couple of decades. If this overwhelms those of us who build the web day in and day out, imagine how our clients must feel. And yet time and again, we fail our clients by offloading too much responsibility for the development process onto them. We need to build best practices into our workflows from the start, Kendra Skeene reminds us — not wait for our clients to request specific core practices.",
            "images": [ "https://www.clarity-ventures.com/portals/0/images/resources/custom-programming-design-project-management.png", "https://www.clarity-ventures.com/portals/0/images/resources/custom-programming-design-project-management.png" ]
        }
    ]
};

// Display Biography information
bio.display = function() {
    if (bio.skills.length > 0 && bio.name !== false) {
        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.wellcomeMessage);

        $.each(bio.contacts, function(key, value) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", value);
            $("#topContacts").append(formattedContact);
            $("#footerContacts").append(formattedContact);
        });

        $("#header").prepend(formattedHeaderRole);
        $("#header").prepend(formattedHeaderName);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

// Display work experience
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmployer);
        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
};



// format the last name to uppercase
function inName(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var nameArray = finalName.trim().split(" ");
    nameArray[0] = nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    finalName = nameArray.join(" ");
    $("#name").text(finalName);
}


// Display the project information
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        for (var i = 0; i < project.images.length; i++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images[i]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    });
};

// Display education information
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
    });

    education.onlineCourses.forEach(function(onlineCourse) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineClasses);
        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    });
};


bio.display();
inName(bio.name);
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);